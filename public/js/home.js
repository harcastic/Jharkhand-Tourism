// ============ INTERSECTION OBSERVER FOR FADE-ON-SCROLL ============
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// Observe all fade-on-scroll elements
document.querySelectorAll('.fade-on-scroll').forEach(el => fadeObserver.observe(el));

// ============ JOURNEY SECTION OBSERVER ============
const journeyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hidden');
      journeyObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.journey').forEach(section => journeyObserver.observe(section));

// ============ NEWSLETTER HANDLER ============
function handleNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Show success message
  alert('✓ Thanks for subscribing! Check your email for travel tips.');
  event.target.reset();
}

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============ NAVIGATION SCROLL EFFECT ============
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }
});

// ============ PACKAGE DETAIL HANDLER ============
document.querySelectorAll('.package-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const packageName = this.closest('.package-card').querySelector('h3').textContent;
    alert(`Details for "${packageName}" package will be available soon!\n\nFor now, use our Smart Planner to customize your itinerary.`);
  });
});

// ============ ENHANCED HOMEPAGE INTERACTIONS ============

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Enhanced card hover effects
document.addEventListener('DOMContentLoaded', () => {
  // Add loading animation to images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  });

  // Staggered animation for grid items
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        staggerObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply stagger effect to grid items
  document.querySelectorAll('.why-visit__item, .destination-card, .feature-box').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    staggerObserver.observe(item);
  });
});

// Enhanced button interactions
document.querySelectorAll('.hero-btn, .itinerary-btn-primary, .package-btn, .link-see-more').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-2px) scale(1.02)';
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0) scale(1)';
  });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect on page load (uncomment if desired)
// window.addEventListener('load', () => {
//   const heroTitle = document.querySelector('.hero-title');
//   if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 150);
//   }
// });

// Statistics counter animation
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    // Format the number based on the target
    if (target >= 1000) {
      element.textContent = Math.floor(current).toLocaleString() + (element.textContent.includes('K') ? 'K+' : '+');
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
}

// Trigger counter animation when stats section comes into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumber = entry.target.querySelector('.stat-number');
      const text = statNumber.textContent;
      const number = parseInt(text.replace(/[^0-9]/g, ''));
      
      if (number > 0) {
        animateCounter(statNumber, number);
      }
      
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-box').forEach(box => {
  statsObserver.observe(box);
});