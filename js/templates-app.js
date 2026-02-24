// ===========================
// DOM Elements
// ===========================
const grid = document.getElementById('grid');
const searchInput = document.getElementById('searchInput');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const templateCount = document.getElementById('templateCount');
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
// Render Templates
// ===========================
function renderTemplates() {
  grid.innerHTML = '';

  templates.forEach((template, index) => {
    const article = document.createElement('article');
    article.className = 'card template-card';
    article.dataset.category = template.category;
    article.dataset.name = template.name;
    article.dataset.index = index;

    article.innerHTML = `
      <div class="card-header">
        <span class="card-tag">${template.tag}</span>
        <h2>${template.name}</h2>
      </div>
      <div class="card-preview">
        ${template.preview}
      </div>
      <p class="card-description">${template.description}</p>
      <div class="card-actions">
        <button class="btn-toggle btn-preview">Preview</button>
        <div class="download-dropdown">
          <button class="btn-download">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download
          </button>
          <div class="download-dropdown-content">
            <button class="download-option" data-format="html">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              HTML File
            </button>
            <button class="download-option" data-format="zip">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
              ZIP Package
            </button>
          </div>
        </div>
      </div>
    `;

    // Preview button
    const previewBtn = article.querySelector('.btn-preview');
    previewBtn.addEventListener('click', () => {
      openPreviewModal(template);
    });

    // Download options
    const downloadOptions = article.querySelectorAll('.download-option');
    downloadOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const format = option.dataset.format;
        if (format === 'html') {
          downloadHTML(template);
        } else if (format === 'zip') {
          downloadZIP(template);
        }
      });
    });

    grid.appendChild(article);
  });
}

renderTemplates();
animateCards();

// ===========================
// Staggered Card Animation
// ===========================
function animateCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.classList.remove('visible');
    setTimeout(() => {
      if (card.style.display !== 'none') {
        card.classList.add('visible');
      }
    }, 30 * index);
  });
}

// ===========================
// Category Filtering
// ===========================
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activeCategory = btn.dataset.category;
    filterTemplates();

    // Close mobile sidebar
    sidebar.classList.remove('open');
    removeOverlay();
  });
});

// ===========================
// Search
// ===========================
searchInput.addEventListener('input', () => {
  filterTemplates();
});

function filterTemplates() {
  const query = searchInput.value.toLowerCase().trim();
  let visible = 0;
  let visibleIndex = 0;

  document.querySelectorAll('.card').forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;

    const matchesCategory = activeCategory === 'all' || category === activeCategory;
    const matchesSearch = !query || name.includes(query) || category.includes(query);

    if (matchesCategory && matchesSearch) {
      card.style.display = '';
      card.classList.remove('visible');
      // Staggered animation
      const delay = visibleIndex * 30;
      setTimeout(() => card.classList.add('visible'), delay);
      visibleIndex++;
      visible++;
    } else {
      card.style.display = 'none';
      card.classList.remove('visible');
    }
  });

  templateCount.textContent = `${visible} template${visible !== 1 ? 's' : ''}`;
}

// Initialize count
filterTemplates();

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

// ===========================
// Page Transition with Loader
// ===========================
const pageLoader = document.getElementById('pageLoader');
const homeLink = document.querySelector('a.sidebar-header');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

function setupPageTransition(link) {
  if (link && pageLoader) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      pageLoader.classList.add('active');
      setTimeout(() => {
        window.location.href = link.href;
      }, 800);
    });
  }
}

setupPageTransition(homeLink);
sidebarLinks.forEach(link => setupPageTransition(link));

// ===========================
// Download Functions
// ===========================

// Download as single HTML file
function downloadHTML(template) {
  const filename = template.name.toLowerCase().replace(/\s+/g, '-') + '.html';
  const blob = new Blob([template.code], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showDownloadFeedback();
}

// Download as ZIP with separate files
async function downloadZIP(template) {
  if (typeof JSZip === 'undefined') {
    alert('ZIP library not loaded. Please try the HTML download instead.');
    return;
  }

  const zip = new JSZip();
  const folderName = template.name.toLowerCase().replace(/\s+/g, '-');

  // Add files to ZIP
  zip.file('index.html', template.files.html);
  zip.file('style.css', template.files.css);

  // Add JS file if it exists
  if (template.files.js) {
    zip.file('script.js', template.files.js);
  }

  // Generate and download
  try {
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = folderName + '.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showDownloadFeedback();
  } catch (error) {
    console.error('Error creating ZIP:', error);
    alert('Error creating ZIP file. Please try the HTML download instead.');
  }
}

function showDownloadFeedback() {
  // Brief visual feedback could be added here
}

// ===========================
// Preview Modal
// ===========================
const previewModal = document.getElementById('previewModal');
const modalBackdrop = previewModal.querySelector('.modal-backdrop');
const modalClose = previewModal.querySelector('.modal-close');
const modalTag = previewModal.querySelector('.modal-tag');
const modalTitle = previewModal.querySelector('.modal-header h3');
const modalPreview = previewModal.querySelector('.modal-preview');
const templatePreviewFrame = document.getElementById('templatePreviewFrame');

let currentPreviewTemplate = null;

function openPreviewModal(template) {
  currentPreviewTemplate = template;
  modalTag.textContent = template.tag;
  modalTitle.textContent = template.name;

  // Load template into iframe for full preview
  const iframeDoc = templatePreviewFrame.contentDocument || templatePreviewFrame.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(template.code);
  iframeDoc.close();

  previewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePreviewModal() {
  previewModal.classList.remove('active');
  document.body.style.overflow = '';
  currentPreviewTemplate = null;

  // Clear iframe
  const iframeDoc = templatePreviewFrame.contentDocument || templatePreviewFrame.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write('');
  iframeDoc.close();
}

modalBackdrop.addEventListener('click', closePreviewModal);
modalClose.addEventListener('click', closePreviewModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && previewModal.classList.contains('active')) {
    closePreviewModal();
  }
});
