/* ============================================
   GameGuidePro - Main JavaScript
   ============================================ */
(function() {
  'use strict';

  // --- Mobile Menu Toggle ---
  var menuToggle = document.getElementById('mobile-menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      var isOpen = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    var links = mobileMenu.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    }

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    });
  }

  // --- Theme Toggle (Dark/Light) ---
  var themeToggle = document.getElementById('theme-toggle');
  var THEME_KEY = 'ggp_theme';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch(e) {}
  }

  // Load saved theme (default dark)
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) setTheme(saved);
  } catch(e) {}

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  // --- Smooth Scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Lazy Image Loading ---
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[data-src]').forEach(function(img) {
      img.src = img.dataset.src;
      img.loading = 'lazy';
    });
  } else {
    // Fallback: IntersectionObserver
    if ('IntersectionObserver' in window) {
      var imgObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            img.src = img.dataset.src;
            imgObserver.unobserve(img);
          }
        });
      });
      document.querySelectorAll('img[data-src]').forEach(function(img) {
        imgObserver.observe(img);
      });
    }
  }

  // --- Search Filter (Homepage games) ---
  var searchInput = document.getElementById('nav-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      var query = this.value.toLowerCase().trim();
      var cards = document.querySelectorAll('.game-card');
      cards.forEach(function(card) {
        var text = card.textContent.toLowerCase();
        card.style.display = text.indexOf(query) !== -1 ? '' : 'none';
      });
    });
  }

})();
