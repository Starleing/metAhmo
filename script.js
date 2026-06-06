// ── THEME TOGGLE ──
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
  const label = document.getElementById('themeLabel');
  const iconSun = document.getElementById('iconSun');
  const iconMoon = document.getElementById('iconMoon');
  
  if (theme === 'light') {
    label.textContent = 'Oscuro';
    iconSun.style.display = 'none';
    iconMoon.style.display = 'block';
  } else {
    label.textContent = 'Claro';
    iconSun.style.display = 'block';
    iconMoon.style.display = 'none';
  }
}

// Load saved theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);
}

// ── HAMBURGER MENU ──
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
}

// Close menu when link is clicked
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('hamburger').classList.remove('active');
    });
  });
});

// ── SCROLL REVEAL ANIMATION ──
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => observer.observe(el));

// ── MODAL FUNCTIONS ──
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
  }
}

// Close modal when clicking outside the box
document.addEventListener('DOMContentLoaded', function() {
  const modals = document.querySelectorAll('.modal-overlay');
  
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });
  
  const closeButtons = document.querySelectorAll('.modal-close');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('open');
      }
    });
  });
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
