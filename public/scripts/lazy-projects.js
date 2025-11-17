async function init() {
  try {
    const [projectsRes, prefsRes] = await Promise.all([
      fetch('/data/projects.json'),
      fetch('/data/preferences.json')
    ]);
    const projects = await projectsRes.json();
    const prefs = await prefsRes.json();

    function slugify(title) {
      return String(title)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    function createProjectElement(project) {
      const projectEl = document.createElement('div');
      projectEl.className = 'project';
      projectEl.id = slugify(project.title);

      // If this project contains sub-projects, render them
      if (project.projects && project.projects.length > 0) {
        project.projects.forEach(subProject => {
          const subProjectContent = createSubProjectContent(subProject);
          projectEl.appendChild(subProjectContent);
        });
        return projectEl;
      }

      // Otherwise render as normal (images or media)
      const grid = document.createElement('div');
      grid.className = 'image-grid';

      // Handle both legacy images array and new media array (for videos)
      const mediaItems = project.media || (project.images ? project.images.map(img => ({type: 'image', src: img})) : []);
      console.log('Media items for', project.title, ':', mediaItems);
      
      mediaItems.forEach(item => {
          console.log('Creating media element:', item);
          const thumb = document.createElement('div');
          thumb.className = 'thumb';

          let mediaElement;
          if (item.type === 'video') {
            console.log('Creating video element for:', item.src);
            mediaElement = document.createElement('video');
            mediaElement.src = `/images/${item.src}`;
            mediaElement.controls = true;
            mediaElement.preload = 'metadata';
            if (item.poster) {
              mediaElement.poster = `/images/${item.poster}`;
            }
            // Full native video dimensions
            mediaElement.style.width = '100%';
            mediaElement.style.height = 'auto';
            mediaElement.style.maxWidth = '1920px';
            mediaElement.style.display = 'block';
            console.log('Video element created:', mediaElement);
          } else {
            // Default to image
            mediaElement = document.createElement('img');
            mediaElement.src = `/images/${item.src || item}`;
            mediaElement.loading = 'lazy';
            mediaElement.draggable = false;
            mediaElement.oncontextmenu = () => false;
            // Images fill width for masonry layout
            mediaElement.style.width = '100%';
            mediaElement.style.height = 'auto';
            mediaElement.style.display = 'block';
          }
          
          mediaElement.alt = project.title;

          thumb.appendChild(mediaElement);
          grid.appendChild(thumb);
      });

      projectEl.appendChild(grid);

      // Add caption if provided
      if (project.caption) {
        const caption = document.createElement('p');
        caption.className = 'project-caption';
        caption.textContent = project.caption;
        caption.style.marginTop = '0.25rem';
        caption.style.marginLeft = '5px';
        caption.style.fontSize = '0.7rem';
        caption.style.color = '#555';
        caption.style.lineHeight = '1.3';
        caption.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
        caption.style.maxWidth = '1024px';
        projectEl.appendChild(caption);
      }

      return projectEl;
    }

    function createSubProjectContent(subProject) {
      const grid = document.createElement('div');
      grid.className = 'image-grid';

      const mediaItems = subProject.media || (subProject.images ? subProject.images.map(img => ({type: 'image', src: img})) : []);
      
      mediaItems.forEach(item => {
          const thumb = document.createElement('div');
          thumb.className = 'thumb';

          let mediaElement;
          if (item.type === 'video') {
            mediaElement = document.createElement('video');
            mediaElement.src = `/images/${item.src}`;
            mediaElement.controls = true;
            mediaElement.controlsList = 'nodownload';
            mediaElement.preload = 'metadata';
            mediaElement.draggable = false;
            mediaElement.oncontextmenu = () => false;
            if (item.poster) {
              mediaElement.poster = `/images/${item.poster}`;
            }
            mediaElement.style.width = '100%';
            mediaElement.style.height = 'auto';
            mediaElement.style.maxWidth = '1920px';
            mediaElement.style.display = 'block';
          } else {
            mediaElement = document.createElement('img');
            mediaElement.src = `/images/${item.src || item}`;
            mediaElement.loading = 'lazy';
            mediaElement.draggable = false;
            mediaElement.oncontextmenu = () => false;
            mediaElement.style.width = '100%';
            mediaElement.style.height = 'auto';
            mediaElement.style.display = 'block';
          }
          
          mediaElement.alt = subProject.title;
          thumb.appendChild(mediaElement);
          grid.appendChild(thumb);
      });

      // Add caption if provided
      if (subProject.caption) {
        const caption = document.createElement('p');
        caption.className = 'project-caption';
        caption.textContent = subProject.caption;
        caption.style.marginTop = '0.25rem';
        caption.style.marginLeft = '5px';
        caption.style.fontSize = '0.7rem';
        caption.style.color = '#555';
        caption.style.lineHeight = '1.3';
        caption.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
        caption.style.maxWidth = '1024px';
        
        const wrapper = document.createElement('div');
        wrapper.appendChild(grid);
        wrapper.appendChild(caption);
        return wrapper;
      }

      return grid;
    }

    function renderProjectBySlug(slug) {
      const project = projects.find(p => slugify(p.title) === slug);
      const container = document.getElementById('main-content');
      console.log('Rendering project:', slug, 'Found:', project);
      if (!project || !container) {
        console.error('Project not found or container missing:', {slug, project, container});
        return;
      }
      container.innerHTML = '';
      container.appendChild(createProjectElement(project));
      history.replaceState(null, '', `#${slug}`);
    }

    function openLightbox(mediaElement) {
      let lightbox = document.getElementById('lightbox');
      if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'lightbox-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.setAttribute('aria-label', 'Close');
        lightbox.appendChild(closeBtn);
        
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'lightbox-content';
        lightbox.appendChild(contentWrapper);
        
        document.body.appendChild(lightbox);
        
        const closeLightbox = () => {
          lightbox.classList.remove('active');
          document.body.classList.remove('lightbox-open');
          setTimeout(() => {
            const video = lightbox.querySelector('video');
            if (video) video.pause();
          }, 300);
        };
        
        lightbox.addEventListener('click', (e) => {
          if (e.target === lightbox) closeLightbox();
        });
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          closeLightbox();
        });
      }
      
      const contentWrapper = lightbox.querySelector('.lightbox-content');
      contentWrapper.innerHTML = '';
      
      if (mediaElement.tagName === 'VIDEO') {
        const video = document.createElement('video');
        video.src = mediaElement.src;
        video.controls = true;
        video.autoplay = true;
        if (mediaElement.poster) video.poster = mediaElement.poster;
        contentWrapper.appendChild(video);
        video.addEventListener('click', (e) => e.stopPropagation());
      } else {
        const img = document.createElement('img');
        img.src = mediaElement.src;
        img.alt = mediaElement.alt;
        contentWrapper.appendChild(img);
        img.addEventListener('click', (e) => e.stopPropagation());
      }
      
      // Lock body scroll and trigger fade in
      document.body.classList.add('lightbox-open');
      requestAnimationFrame(() => {
        lightbox.classList.add('active');
      });
    }

    document.querySelectorAll('.sidebar nav a[data-slug]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const slug = a.getAttribute('data-slug');
        
        // If it's a main nav link, show sub-nav on first click, navigate on second
        if (a.classList.contains('main-nav-link')) {
          const parent = a.parentElement;
          const subNav = parent.querySelector('.sub-nav');
          const wasActive = subNav && subNav.classList.contains('active');
          
          // Close all other sub-navs
          document.querySelectorAll('.sub-nav').forEach(s => {
            if (s !== subNav) s.classList.remove('active');
          });
          
          if (subNav && !wasActive) {
            // First click: show sub-nav
            subNav.classList.add('active');
            return;
          }
        }
        
        // Navigate to project (second click on parent, or any sub-item click)
        renderProjectBySlug(slug);
      });
    });

    const hash = location.hash.replace('#', '');
    if (hash) {
      renderProjectBySlug(hash);
    }
  } catch (err) {
    console.error('Failed to load projects or prefs', err);
  }
}

document.addEventListener('DOMContentLoaded', init);
