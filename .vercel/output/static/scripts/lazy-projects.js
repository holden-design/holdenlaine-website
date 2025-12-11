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

      // If this project contains sub-projects, render them as clickable links
      if (project.projects && project.projects.length > 0) {
        const subProjectNav = document.createElement('div');
        subProjectNav.className = 'sub-project-nav';
        subProjectNav.style.display = 'flex';
        subProjectNav.style.flexDirection = 'column';
        subProjectNav.style.gap = '0.3rem';
        subProjectNav.style.marginTop = '0';

        project.projects.forEach(subProject => {
          const link = document.createElement('a');
          link.href = `#${slugify(subProject.title)}`;
          link.textContent = subProject.title;
          link.style.fontSize = '0.85rem';
          link.style.fontWeight = '500';
          link.style.color = '#222';
          link.style.textDecoration = 'none';
          link.style.textTransform = 'uppercase';
          link.style.letterSpacing = '0.01em';
          link.style.cursor = 'pointer';
          link.style.transition = 'opacity 0.2s ease';
          link.addEventListener('mouseover', () => link.style.textDecoration = 'underline');
          link.addEventListener('mouseout', () => link.style.textDecoration = 'none');
          link.addEventListener('click', (e) => {
            e.preventDefault();
            renderProjectBySlug(slugify(subProject.title));
          });
          subProjectNav.appendChild(link);
        });

        projectEl.appendChild(subProjectNav);
        // Do NOT return early; continue to render main project media below
      }

      // Otherwise render as normal (images or media)
      const grid = document.createElement('div');
      grid.className = 'image-grid';

      // Combine media and images arrays if present
      let mediaItems = [];
      if (project.media && Array.isArray(project.media)) {
        mediaItems = mediaItems.concat(project.media);
      }
      if (project.images && Array.isArray(project.images)) {
        mediaItems = mediaItems.concat(project.images.map(img => ({type: 'image', src: img})));
      }

      mediaItems.forEach(item => {
        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        thumb.style.maxWidth = '400px';
        thumb.style.width = '100%';
        thumb.style.margin = '0';
        let mediaElement;
        if (item.type === 'video') {
          mediaElement = document.createElement('video');
          mediaElement.src = `/images/${item.src}`;
          mediaElement.controls = true;
          mediaElement.preload = 'metadata';
          if (item.poster) {
            mediaElement.poster = `/images/${item.poster}`;
          }
          mediaElement.style.width = '100%';
          mediaElement.style.maxWidth = '400px';
          mediaElement.style.height = 'auto';
          mediaElement.style.display = 'block';
          mediaElement.style.margin = '0 auto';
        } else {
          mediaElement = document.createElement('img');
          // Support subfolders by using the full filename from data
          mediaElement.src = `/images/${item.src || item}`;
          mediaElement.loading = 'lazy';
          mediaElement.draggable = false;
          mediaElement.oncontextmenu = () => false;
          thumb.classList.add('loading');
          mediaElement.addEventListener('load', () => {
            thumb.classList.remove('loading');
            mediaElement.classList.add('loaded');
          });
          mediaElement.addEventListener('error', () => {
            thumb.classList.remove('loading');
            console.error('Failed to load image:', item.src || item);
          });
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

    function createSubProjectContent(subProject, skipCaption = false) {
      console.log('createSubProjectContent called with skipCaption:', skipCaption, 'for:', subProject.title);
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
            mediaElement.style.display = 'block';
          } else {
            mediaElement = document.createElement('img');
            mediaElement.src = `/images/${item.src || item}`;
            mediaElement.loading = 'lazy';
            mediaElement.draggable = false;
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
                  mediaElement.style.display = 'block';
                } else {
                  mediaElement = document.createElement('img');
                  mediaElement.src = `/images/${item.src || item}`;
                  mediaElement.loading = 'lazy';
                  mediaElement.draggable = false;
                  mediaElement.oncontextmenu = () => false;
                  thumb.classList.add('loading');
                  mediaElement.addEventListener('load', () => {
                    thumb.classList.remove('loading');
                    mediaElement.classList.add('loaded');
                  });
                  mediaElement.addEventListener('error', () => {
                    thumb.classList.remove('loading');
                    console.error('Failed to load image:', item.src || item);
                  });
                }
                mediaElement.alt = subProject.title;
                thumb.appendChild(mediaElement);
                grid.appendChild(thumb);
              });
                } else {
                  // Unknown type, skip
                  return;
                }
                mediaElement.alt = subProject.title;
                thumb.appendChild(mediaElement);
                grid.appendChild(thumb);
      return grid;
    }

    function renderProjectBySlug(slug) {
      const container = document.getElementById('main-content');
      console.log('Rendering project:', slug);
      if (!container) {
        console.error('Container missing');
        return;
      }
      
      // First try to find a top-level project
      let project = projects.find(p => slugify(p.title) === slug);
      
      // If not found, search in sub-projects
      if (!project) {
        for (const p of projects) {
          if (p.projects && p.projects.length > 0) {
            const subProject = p.projects.find(sp => slugify(sp.title) === slug);
            if (subProject) {
              // Found a sub-project, render just this one
              console.log('Found sub-project:', subProject);
              container.innerHTML = '';
              const wrapper = document.createElement('div');
              wrapper.className = 'project';
              wrapper.id = slug;
              const content = createSubProjectContent(subProject);
              wrapper.appendChild(content);
              container.appendChild(wrapper);
              history.replaceState(null, '', `#${slug}`);
              return;
            }
          }
        }
      }
      
      // Render top-level project
      if (project) {
        console.log('Found project:', project);
        container.innerHTML = '';
        container.appendChild(createProjectElement(project));
        history.replaceState(null, '', `#${slug}`);
      } else {
        console.error('Project not found:', slug);
      }
    }

    function openLightbox(mediaElement) {
      let lightbox = document.getElementById('lightbox');
      if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        
        const closeBtn = document.createElement('button');
          if (project.projects && project.projects.length > 0) {
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
          // Do NOT return early; continue to render main project media below
      
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
        
        // If it's a main nav link with a sub-nav, only show/hide the submenu, never navigate
        if (a.classList.contains('main-nav-link')) {
          const parent = a.parentElement;
          const subNav = parent.querySelector('.sub-nav');
          
          if (subNav) {
            // Close all other sub-navs
            document.querySelectorAll('.sub-nav').forEach(s => {
              if (s !== subNav) s.classList.remove('active');
            });
            
            // Toggle this sub-nav
            subNav.classList.toggle('active');
            return; // Don't navigate, just toggle submenu
          }
        }
        
        // Navigate to project (only for sub-items or main items without sub-nav)
        renderProjectBySlug(slug);
      });
    });

    const hash = location.hash.replace('#', '');
    if (hash) {
      renderProjectBySlug(hash);
    } else {
      // Show only the "Projects" section by default (which contains the video)
      const container = document.getElementById('main-content');
      if (container) {
        container.innerHTML = '';
        const projectsSection = projects.find(p => p.title === 'Projects');
        if (projectsSection) {
          container.appendChild(createProjectElement(projectsSection));
        }
      }
    }
  } catch (err) {
    console.error('Failed to load projects or prefs', err);
  }
}

document.addEventListener('DOMContentLoaded', init);
