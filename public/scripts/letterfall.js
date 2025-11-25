// Letterfall animation
function initLetterfall() {
  const canvas = document.getElementById('letterfall-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=?!';
  const fontSize = 16;
  const chars = [];
  
  const numChars = 80;
  for (let i = 0; i < numChars; i++) {
    chars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      char: letters[Math.floor(Math.random() * letters.length)],
      opacity: Math.random() * 0.2 + 0.3,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5
    });
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px "Helvetica Neue", Helvetica, Arial, sans-serif`;
    
    for (let char of chars) {
      ctx.fillStyle = `rgba(40, 40, 40, ${char.opacity})`;
      ctx.fillText(char.char, char.x, char.y);
      
      char.x += char.dx;
      char.y += char.dy;
      
      if (char.x < -20) char.x = canvas.width + 20;
      if (char.x > canvas.width + 20) char.x = -20;
      if (char.y < -20) char.y = canvas.height + 20;
      if (char.y > canvas.height + 20) char.y = -20;
    }
  }
  
  let animationFrame;
  function animate() {
    draw();
    animationFrame = requestAnimationFrame(animate);
  }
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    chars.forEach(char => {
      char.x = Math.random() * canvas.width;
      char.y = Math.random() * canvas.height;
    });
  });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLetterfall);
} else {
  initLetterfall();
}
