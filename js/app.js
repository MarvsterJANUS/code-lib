// ===========================
// DOM Elements
// ===========================
const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const componentCount = document.getElementById('componentCount');
const navButtons = document.querySelectorAll('.nav-btn');

let activeCategory = 'all';

// ===========================
// Theme Toggle
// ===========================
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('codelib-theme') || 'dark';
root.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('codelib-theme', next);
});

// ===========================
// Render Components
// ===========================
function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderCards() {
  grid.innerHTML = '';

  components.forEach(comp => {
    const article = document.createElement('article');
    article.className = 'card';
    article.dataset.category = comp.category;
    article.dataset.name = comp.name;

    article.innerHTML = `
      <div class="card-header">
        <span class="card-tag">${comp.tag}</span>
        <h2>${comp.name}</h2>
      </div>
      <div class="card-preview">${comp.preview}</div>
      <div class="card-code" hidden>
        <pre><code>${escapeHTML(comp.code)}</code></pre>
      </div>
      <div class="card-actions">
        <button class="btn-toggle">View Code</button>
        <button class="btn-copy">Copy Code</button>
      </div>
    `;

    // Toggle code view
    const toggleBtn = article.querySelector('.btn-toggle');
    const codeBlock = article.querySelector('.card-code');
    toggleBtn.addEventListener('click', () => {
      const isHidden = codeBlock.hidden;
      codeBlock.hidden = !isHidden;
      toggleBtn.textContent = isHidden ? 'Hide Code' : 'View Code';
      toggleBtn.classList.toggle('active', isHidden);
    });

    // Copy to clipboard
    const copyBtn = article.querySelector('.btn-copy');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(comp.code).then(() => {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy Code';
          copyBtn.classList.remove('copied');
        }, 1500);
      });
    });

    grid.appendChild(article);
  });
}

renderCards();

// ===========================
// Category Filtering
// ===========================
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activeCategory = btn.dataset.category;
    filterCards();

    // Close mobile sidebar
    sidebar.classList.remove('open');
    removeOverlay();
  });
});

// ===========================
// Search
// ===========================
searchInput.addEventListener('input', () => {
  filterCards();
});

function filterCards() {
  const query = searchInput.value.toLowerCase().trim();
  let visible = 0;

  document.querySelectorAll('.card').forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;

    const matchesCategory = activeCategory === 'all' || category === activeCategory;
    const matchesSearch = !query || name.includes(query) || category.includes(query);

    if (matchesCategory && matchesSearch) {
      card.style.display = '';
      visible++;
    } else {
      card.style.display = 'none';
    }
  });

  componentCount.textContent = `${visible} component${visible !== 1 ? 's' : ''}`;
}

// Initialize count
filterCards();

// ===========================
// Mobile Sidebar Toggle
// ===========================
menuToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  if (isOpen) {
    addOverlay();
  } else {
    removeOverlay();
  }
});

function addOverlay() {
  let overlay = document.querySelector('.sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
  }
  overlay.classList.add('active');
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    removeOverlay();
  });
}

function removeOverlay() {
  const overlay = document.querySelector('.sidebar-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

// ===========================
// Layout Toggle (Grid / List)
// ===========================
const layoutToggle = document.getElementById('layoutToggle');
const savedLayout = localStorage.getItem('codelib-layout') || 'grid';

if (savedLayout === 'list') {
  grid.classList.add('list-view');
  layoutToggle.classList.add('is-list');
}

layoutToggle.addEventListener('click', () => {
  const isList = grid.classList.toggle('list-view');
  layoutToggle.classList.toggle('is-list', isList);
  localStorage.setItem('codelib-layout', isList ? 'list' : 'grid');
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
