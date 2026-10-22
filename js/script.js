/**
 * Sachin's Portfolio - Main JavaScript
 * Handles dynamic content rendering from data.js, theme toggling,
 * mobile menu navigation, smooth scrolling, and form interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  initNavigation();
  initContactForm();
  initCopyEmail();
  initScrollSpy();
});

/* ==========================================================================
   1. Theme Management (Dark / Light with LocalStorage persistence)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('sachin-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Default to dark mode or stored preference
  const currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('sachin-theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;
  if (theme === 'dark') {
    themeToggleBtn.innerHTML = '☀️';
    themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
    themeToggleBtn.title = 'Switch to light mode';
  } else {
    themeToggleBtn.innerHTML = '🌙';
    themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    themeToggleBtn.title = 'Switch to dark mode';
  }
}

/* ==========================================================================
   2. Skills Rendering (Dynamically populated from data.js - FR-5)
   ========================================================================== */
function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer || typeof skills === 'undefined') return;

  const categoryIcons = {
    Backend: '⚡',
    Frontend: '🎨',
    Database: '🗄️',
    Tools: '🛠️'
  };

  let html = '';
  for (const [category, skillList] of Object.entries(skills)) {
    const icon = categoryIcons[category] || '🔹';
    const pillsHtml = skillList
      .map(skill => `<span class="skill-pill">${skill}</span>`)
      .join('');

    html += `
      <div class="skill-category-card" data-category="${category}">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">${icon}</div>
          <h3 class="skill-cat-title">${category}</h3>
        </div>
        <div class="skill-pills-list">
          ${pillsHtml}
        </div>
      </div>
    `;
  }

  skillsContainer.innerHTML = html;
}

/* ==========================================================================
   3. Projects Rendering & Filtering (From data.js - FR-4, FR-6, SRS 6.4.1)
   ========================================================================== */
let currentCategoryFilter = 'all';

function renderProjects(categoryFilter = 'all') {
  const projectsContainer = document.getElementById('projects-container');
  if (!projectsContainer || typeof projects === 'undefined') return;

  currentCategoryFilter = categoryFilter;

  const filteredProjects = categoryFilter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(categoryFilter.toLowerCase()));

  if (filteredProjects.length === 0) {
    projectsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 0; color: var(--text-muted);">
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  const cardsHtml = filteredProjects.map(proj => {
    // Tech tag pills
    const techTagsHtml = (proj.tech || [])
      .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
      .join('');

    // Feature bullet points
    const featuresHtml = (proj.features || [])
      .map(f => `
        <li class="project-feature-item">
          <span class="feature-check-icon">✓</span>
          <span>${escapeHtml(f)}</span>
        </li>
      `)
      .join('');



    return `
      <article class="project-card" data-category="${escapeHtml(proj.category)}">

        <div class="project-body">
          <h3 class="project-title">${escapeHtml(proj.name)}</h3>
          <p class="project-problem">🎯 ${escapeHtml(proj.problem || proj.desc)}</p>
          <p class="project-desc">${escapeHtml(proj.desc)}</p>
          
          <div class="project-tech-tags">
            ${techTagsHtml}
          </div>

          <ul class="project-features">
            ${featuresHtml}
          </ul>

          <div class="project-actions">
            <a href="${escapeHtml(proj.github)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View source code on GitHub">
              <span>GitHub Code</span> ↗
            </a>

          </div>
        </div>
      </article>
    `;
  }).join('');

  projectsContainer.innerHTML = cardsHtml;
  initProjectFilters();
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.onclick = () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    };
  });
}

/* ==========================================================================
   4. Experience Rendering (Dynamically populated from data.js)
   ========================================================================== */
function renderExperience() {
  const experienceContainer = document.getElementById('experience-container');
  if (!experienceContainer || typeof experience === 'undefined') return;

  const html = experience.map(exp => {
    const bulletsHtml = (exp.bullets || [])
      .map(b => `
        <li class="timeline-bullet-item">
          <span class="bullet-icon">▹</span>
          <span>${escapeHtml(b)}</span>
        </li>
      `)
      .join('');

    return `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
              <div class="timeline-company">${escapeHtml(exp.company)} • ${escapeHtml(exp.location)}</div>
            </div>
            <span class="timeline-period-badge">📅 ${escapeHtml(exp.period)}</span>
          </div>
          <ul class="timeline-bullets">
            ${bulletsHtml}
          </ul>
        </div>
      </div>
    `;
  }).join('');

  experienceContainer.innerHTML = html;
}

/* ==========================================================================
   5. Education & Certifications Rendering (From data.js)
   ========================================================================== */
function renderEducation() {
  const eduContainer = document.getElementById('education-card-container');
  const certContainer = document.getElementById('certifications-container');

  if (eduContainer && typeof education !== 'undefined') {
    eduContainer.innerHTML = education.map(edu => `
      <div class="edu-card">
        <h4 class="edu-degree">${escapeHtml(edu.degree)}</h4>
        <div class="edu-institution">${escapeHtml(edu.institution)}</div>
        <div class="edu-meta">📍 ${escapeHtml(edu.location)} • ${escapeHtml(edu.status)}</div>
        <p class="edu-desc">${escapeHtml(edu.focus)}</p>
      </div>
    `).join('');
  }

  if (certContainer && typeof certifications !== 'undefined') {
    certContainer.innerHTML = certifications.map(cert => `
      <div class="cert-card">
        <div class="cert-info">
          <h4>${escapeHtml(cert.title)}</h4>
          <div class="cert-issuer">${escapeHtml(cert.issuer)} • ${escapeHtml(cert.year)}</div>
        </div>
        <a href="${escapeHtml(cert.link)}" target="_blank" rel="noopener noreferrer" class="cert-badge">
          ${escapeHtml(cert.badge)} ↗
        </a>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   6. Navigation & Mobile Menu (FR-1, FR-2, FR-3)
   ========================================================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const siteHeader = document.querySelector('.site-header');

  // Mobile menu toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      mobileMenuBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '☰';
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '☰';
      }
    });
  }

  // Header scroll shadow effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   7. ScrollSpy Active Link Indicator
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   8. Contact Form Handling (FR-10, Client validation & Formspree)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const messageInput = document.getElementById('sender-message');
    const submitBtn = document.getElementById('contact-submit-btn');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all fields.', 'error');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending message...';

    // Formspree / endpoint submission simulation or actual submission
    try {
      // If user connects Formspree:
      const formAction = form.getAttribute('action');
      if (formAction && formAction.includes('formspree.io')) {
        const response = await fetch(formAction, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          showToast('Thank you! Your message has been sent successfully.', 'success');
          form.reset();
        } else {
          throw new Error('Formspree returned an error');
        }
      } else {
        // Fallback smooth mailto simulation or notification
        setTimeout(() => {
          showToast('Thank you Sachin has received your message note!', 'success');
          form.reset();
        }, 800);
      }
    } catch (err) {
      // Graceful fallback to mailto
      showToast('Redirecting to your default email client...', 'success');
      window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
    } finally {
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }, 1000);
    }
  });
}

/* ==========================================================================
   9. Copy Email to Clipboard with Toast Notification
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = personalInfo.email || 'sachin.dev.work@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        showToast('Email copied to clipboard: ' + email, 'success');
      })
      .catch(() => {
        showToast('Email: ' + email, 'success');
      });
  });
}

/* ==========================================================================
   10. Toast Notification System
   ========================================================================== */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : 'ℹ'}</span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Utility: Prevent XSS in dynamically injected text
function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


