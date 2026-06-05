const VIDEO_ID = 'iWJYOJ1Ro2Q';
const catalogContainer = document.getElementById('catalog-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const filterContainer = document.querySelector('.filter-container');
const resultCount = document.getElementById('result-count');
const featuredVideoCard = document.getElementById('featured-video-card');
const videoModal = document.getElementById('video-modal');
const modalClose = document.getElementById('modal-close');
const modalIframe = document.getElementById('modal-iframe');

function getContentTypeIcon(contentType) {
    const icons = { slides: 'fa-solid fa-file-powerpoint', webpage: 'fa-solid fa-globe', arcade: 'fa-solid fa-gamepad', video: 'fa-solid fa-video', demo: 'fa-solid fa-laptop-code', datasheet: 'fa-solid fa-file-lines', blog: 'fa-solid fa-newspaper' };
    return icons[contentType] || 'fa-solid fa-file';
}
function getContentTypeLabel(contentType) {
    const labels = { slides: 'Slides', webpage: 'Web Page', arcade: 'Arcade', video: 'Video', demo: 'Demo', datasheet: 'Datasheet', blog: 'Blog' };
    return labels[contentType] || 'Document';
}
function generateFilterButtons() {
    [...new Set(catalogData.map(item => item.category))].forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-button';
        button.setAttribute('data-category', category);
        button.textContent = category;
        filterContainer.appendChild(button);
    });
}
function renderCatalogItems(items) {
    catalogContainer.innerHTML = '';
    if (resultCount) resultCount.textContent = 'Showing ' + items.length + ' of ' + catalogData.length + ' resources';
    if (items.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i><p>No resources found matching your criteria.</p>';
        catalogContainer.appendChild(noResults);
        return;
    }
    items.forEach(item => {
        const catalogItem = document.createElement('article');
        catalogItem.className = 'catalog-item';
        catalogItem.setAttribute('data-category', item.category);
        catalogItem.innerHTML = '<div class="catalog-item-inner"><div class="catalog-image-container"><img src="' + item.imageUrl + '" alt="" class="catalog-image"></div><div class="catalog-meta"><span class="catalog-category">' + item.category + '</span><span class="content-type-chip"><i class="' + getContentTypeIcon(item.contentType) + '"></i>' + getContentTypeLabel(item.contentType) + '</span></div><h3 class="catalog-title">' + item.title + '</h3><a href="' + item.link + '" target="_blank" rel="noopener noreferrer" class="catalog-button">Explore <i class="fa-solid fa-arrow-right"></i></a></div>';
        catalogItem.addEventListener('click', (e) => { if (!e.target.closest('.catalog-button')) window.open(item.link, '_blank', 'noopener,noreferrer'); });
        catalogContainer.appendChild(catalogItem);
    });
}
function filterCatalogItems(category, searchTerm = '') {
    let filteredItems = catalogData;
    if (category !== 'all') filteredItems = filteredItems.filter(item => item.category === category);
    if (searchTerm) filteredItems = filteredItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredItems;
}
function applyFilters() {
    const activeButton = document.querySelector('.filter-button.active');
    renderCatalogItems(filterCatalogItems(activeButton.getAttribute('data-category'), searchInput.value.trim()));
}
function setupEventListeners() {
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyFilters();
        });
    });
    searchInput.addEventListener('input', applyFilters);
    searchButton.addEventListener('click', applyFilters);
    searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') applyFilters(); });
}
function openVideoModal() {
    modalIframe.src = 'https://www.youtube.com/embed/' + VIDEO_ID + '?autoplay=1';
    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
}
function closeVideoModal() {
    videoModal.classList.remove('active');
    videoModal.setAttribute('aria-hidden', 'true');
    modalIframe.src = '';
    document.body.style.overflow = '';
}
function setupVideoModal() {
    if (featuredVideoCard) {
        featuredVideoCard.addEventListener('click', openVideoModal);
        featuredVideoCard.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openVideoModal(); } });
    }
    modalClose.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && videoModal.classList.contains('active')) closeVideoModal(); });
}
function initCatalog() { generateFilterButtons(); renderCatalogItems(catalogData); setupEventListeners(); setupVideoModal(); }
document.addEventListener('DOMContentLoaded', initCatalog);
