(function() {
    // ---------- PRODUCT DATA ----------
    const products = [
        { id: 1, name: "Ceramic Mug", category: "handmade", basePrice: 2200, images: ["mug1", "mug2"], stock: 5, variants: null, description: "Hand-thrown stoneware mug with a smooth glaze. Perfect for your morning coffee. Notice the fine textural details." },
        { id: 2, name: "Handwoven Scarf", category: "handmade", basePrice: 850, images: ["scarf1", "scarf2"], stock: 10, variants: null, description: "Soft, ethically sourced cotton scarf. Handwoven by local artisans." },
        { id: 3, name: "Wooden Earrings", category: "handmade", basePrice: 700, images: ["earrings1", "earrings2"], stock: 3, variants: null, description: "Lightweight wooden earrings with a natural finish. Unique grain patterns." },
        { id: 4, name: "Embroidered Dress", category: "clothes", basePrice: 2200, images: ["dress1", "dress2"], stock: 2, variants: { sizes: ["S", "M", "L"], colors: ["Red", "Blue"] }, description: "Floral embroidered dress with a flattering A-line cut. Made from breathable cotton." }
    ];

    // Dummy image map (Keep your existing long list of SVG strings here)
    const imageMap = {
        mug1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23dbb59b'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Emug%3C/text%3E%3C/svg%3E",
        mug2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23c38e7b'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Emug2%3C/text%3E%3C/svg%3E",
        scarf1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23aac7b9'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Escarf%3C/text%3E%3C/svg%3E",
        scarf2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%238bb3a0'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Escarf2%3C/text%3E%3C/svg%3E",
        earrings1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e6b89c'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Eearrings%3C/text%3E%3C/svg%3E",
        earrings2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23d49c7a'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Eearrings2%3C/text%3E%3C/svg%3E",
        dress1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e0a28f'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Edress%3C/text%3E%3C/svg%3E",
        dress2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23c27f68'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Edress2%3C/text%3E%3C/svg%3E"
    };

    let currentCurrency = 'INR';
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const container = document.getElementById('productSections');

    // --- DARK MODE LOGIC ---
    const themeBtn = document.getElementById('themeToggle');
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isNowDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isNowDark);
        themeBtn.innerHTML = isNowDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // --- SKELETON LOADER ---
    function renderSkeletons() {
        let skeletons = '<div class="product-grid">';
        for(let i=0; i<4; i++) skeletons += `<div class="skeleton"></div>`;
        skeletons += '</div>';
        container.innerHTML = skeletons;
    }

    // --- MAIN RENDER ---
    function renderProducts() {
        // ... (Keep your existing filter/sort logic here) ...
        let html = '<h2 class="section-title" id="handmade"><span class="badge-title">🧶 products</span></h2><div class="product-grid">';
        products.forEach((p, i) => {
            const mainImg = imageMap[p.images[0]];
            html += `<div class="product-card" data-id="${p.id}">
                        <div class="product-images"><img src="${mainImg}" class="main-image"></div>
                        <h4 style="margin-top:1rem;">${p.name}</h4>
                        <div class="price-info"><strong>₹${p.basePrice}</strong></div>
                    </div>`;
        });
        html += '</div>';
        container.innerHTML = html;
        attachProductEvents();
    }

    // --- MAGNIFIER LOGIC ---
    const magWrapper = document.getElementById('magnifierWrapper');
    const magImg = document.getElementById('detailMainImage');
    
    magWrapper.addEventListener('mousemove', function(e) {
        const rect = magWrapper.getBoundingClientRect();
        // Calculate cursor position as a percentage
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        magImg.style.transformOrigin = `${x}% ${y}%`;
        magImg.style.transform = 'scale(2)'; // Zoom level
    });
    
    magWrapper.addEventListener('mouseleave', function() {
        magImg.style.transformOrigin = 'center center';
        magImg.style.transform = 'scale(1)'; // Reset zoom
    });

    function openProductDetail(id) {
        const p = products.find(prod => prod.id === id);
        magImg.src = imageMap[p.images[0]];
        document.getElementById('detailName').textContent = p.name;
        document.getElementById('detailPrice').textContent = `₹${p.basePrice}`;
        document.getElementById('detailDescription').textContent = p.description;
        document.getElementById('productDetailModal').style.display = 'flex';
    }

    function attachProductEvents() {
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function() {
                openProductDetail(parseInt(this.dataset.id));
            });
        });
        
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', function() {
                this.closest('.modal').style.display = 'none';
            });
        });
    }

    // --- INITIALIZATION ---
    renderSkeletons();
    // Simulate network delay to show off skeleton loaders
    setTimeout(renderProducts, 800); 

    // Header scroll effect
    window.addEventListener('scroll', () => {
        document.getElementById('mainHeader').classList.toggle('scrolled', window.scrollY > 50);
    });
})();
