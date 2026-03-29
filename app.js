(function() {
    // ---------- SMART WHATSAPP ROUTER ----------
    function openWhatsApp(message) {
        const phone = '916309645717';
        const encodedMsg = encodeURIComponent(message || '');
        // Check if user is on mobile
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Route directly to app on mobile, or web portal on desktop (Bypassing blocked api.whatsapp.com)
        const url = isMobile 
            ? `whatsapp://send?phone=${phone}&text=${encodedMsg}` 
            : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;
            
        window.open(url, '_blank');
    }

    // Direct Chat Button Listener
    document.getElementById('directChatBtn').addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsApp("Hello! I have a question from your website.");
    });

    // ---------- PRODUCT DATA ----------
    const products = [
        { id: 1, name: "Ceramic Mug", category: "handmade", basePrice: 2200, images: ["mug1", "mug2"], stock: 5, variants: null, description: "Hand-thrown stoneware mug with a smooth glaze. Perfect for your morning coffee." },
        { id: 2, name: "Handwoven Scarf", category: "handmade", basePrice: 850, images: ["scarf1", "scarf2"], stock: 10, variants: null, description: "Soft, ethically sourced cotton scarf. Handwoven by local artisans." },
        { id: 3, name: "Wooden Earrings", category: "handmade", basePrice: 700, images: ["earrings1", "earrings2"], stock: 3, variants: null, description: "Lightweight wooden earrings with a natural finish. Unique grain patterns." },
        { id: 4, name: "Embroidered Dress", category: "clothes", basePrice: 2200, images: ["dress1", "dress2"], stock: 2, variants: { sizes: ["S", "M", "L"], colors: ["Red", "Blue"] }, description: "Floral embroidered dress with a flattering A-line cut. Made from breathable cotton." },
        { id: 5, name: "Knitted Sweater", category: "clothes", basePrice: 2700, images: ["sweater1", "sweater2"], stock: 4, variants: { sizes: ["M", "L", "XL"], colors: ["Gray", "Green"] }, description: "Cozy hand-knitted sweater, perfect for chilly evenings. 100% wool." },
        { id: 6, name: "Linen Tote Bag", category: "clothes", basePrice: 1000, images: ["totebag1", "totebag2"], stock: 8, variants: null, description: "Durable linen tote bag, ideal for shopping or daily use. Natural color." }
    ];

    const imageMap = {
        mug1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23dbb59b'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-size='20' text-anchor='middle'%3Emug%3C/text%3E%3C/svg%3E",
        mug2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23c38e7b'/%3E%3Ctext x='50%25' y='50%25' fill='white' font-size='20' text-anchor='middle'%3Emug2%3C/text%3E%3C/svg%3E",
        scarf1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23aac7b9'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Escarf%3C/text%3E%3C/svg%3E",
        scarf2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%238bb3a0'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Escarf2%3C/text%3E%3C/svg%3E",
        earrings1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e6b89c'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Eearrings%3C/text%3E%3C/svg%3E",
        earrings2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23d49c7a'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Eearrings2%3C/text%3E%3C/svg%3E",
        dress1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e0a28f'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Edress%3C/text%3E%3C/svg%3E",
        dress2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23c27f68'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Edress2%3C/text%3E%3C/svg%3E",
        sweater1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%239f8c76'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Esweater%3C/text%3E%3C/svg%3E",
        sweater2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23856f59'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Esweater2%3C/text%3E%3C/svg%3E",
        totebag1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23b8a99a'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Etote%3C/text%3E%3C/svg%3E",
        totebag2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%239e8d7c'/%3E%3Ctext x='50%25' y='50%25' fill='white'%3Etote2%3C/text%3E%3C/svg%3E"
    };

    let currentCurrency = 'INR';
    const exchangeRate = 83;
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    let currentDelivery = { charge: 0, provider: 'DTDC', eta: '', distance: 0, service: '' };
    let currentDiscount = 0;
    const cityDistances = { tirupati:0, tirupathi:0, chandragiri:15, renigunta:10, srikalahasti:36, puttur:40, chittoor:65, nellore:130, kadapa:140, chennai:160, bangalore:250, hyderabad:520, vijayawada:360, vizag:620, mumbai:1000, delhi:1800, kolkata:1500 };
    const defaultDistance = 500;
    const coupons = { 'DTDC10': { type: 'percent', value: 10 }, 'WELCOME': { type: 'fixed', value: 100 }, 'FREESHIP': { type: 'fixed', value: 0 } };

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

    function formatPrice(p) { return currentCurrency === 'USD' ? '$' + (p/exchangeRate).toFixed(2) : '₹' + p; }
    function updateCartCount() { document.getElementById('cartCount').textContent = cart.reduce((s,i)=>s+i.quantity,0); }
    function saveCart() { localStorage.setItem('cart',JSON.stringify(cart)); updateCartCount(); }
    function updateWishlistCount() { document.getElementById('wishlistCount').textContent = wishlist.length; }
    function saveWishlist() { localStorage.setItem('wishlist',JSON.stringify(wishlist)); updateWishlistCount(); }
    
    function calculateDTDCRate(distanceKm, totalWeight=1) {
        if(distanceKm <= 15) { let c = Math.floor(Math.random()*51)+100; return { charge:c, service:'DTDC Local Express', eta:'Same day' }; }
        let base=0, service='';
        if(distanceKm<=50) { base=60; service='DTDC Plus (Local)'; }
        else if(distanceKm<=200) { base=90; service='DTDC Regional Plus'; }
        else if(distanceKm<=500) { base=120; service='DTDC Zonal Plus'; }
        else if(distanceKm<=1500) { base=200; service='DTDC National Plus'; }
        else { base=300; service='DTDC Prime'; }
        let charge = base * Math.ceil(totalWeight*2);
        let eta = distanceKm<=50?'Same day':(distanceKm<=200?'Next business day':(distanceKm<=500?'2 business days':(distanceKm<=1500?'3-4 business days':'5-7 business days')));
        return { charge, service, eta };
    }

    function addToCart(id, qty, size, color, eventTarget) {
        let existing = cart.find(i=>i.id===id && i.size===size && i.color===color);
        if(existing) existing.quantity += qty;
        else cart.push({ id, quantity:qty, size, color });
        saveCart();
        const cartIcon = document.querySelector('.cart-btn');
        cartIcon.classList.add('wiggle');
        setTimeout(()=>cartIcon.classList.remove('wiggle'), 300);
        setTimeout(() => alert('Item added to cart!'), 100);
    }

    function openProductDetail(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        document.getElementById('detailMainImage').src = imageMap[product.images[0]];
        document.getElementById('detailName').textContent = product.name;
        document.getElementById('detailPrice').textContent = formatPrice(product.basePrice);
        document.getElementById('detailTotalPrice').textContent = 'total: ' + formatPrice(product.basePrice);
        document.getElementById('detailDescription').textContent = product.description || "A beautiful handmade item from our collection.";
        const stockBadge = product.stock > 0 ? '<span class="stock-badge in-stock">In stock</span>' : '<span class="stock-badge out-of-stock" style="background:#f8d7da; color:#721c24;">Out of stock</span>';
        document.getElementById('detailStock').innerHTML = stockBadge;
        const thumbContainer = document.getElementById('detailThumbnails');
        thumbContainer.innerHTML = '';
        product.images.forEach((imgKey, idx) => {
            const thumb = document.createElement('img');
            thumb.src = imageMap[imgKey];
            thumb.classList.add('product-detail-thumb');
            if (idx === 0) thumb.classList.add('active');
            thumb.addEventListener('click', () => {
                document.getElementById('detailMainImage').src = imageMap[imgKey];
                document.querySelectorAll('.product-detail-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            thumbContainer.appendChild(thumb);
        });
        const variantsDiv = document.getElementById('detailVariants');
        if (product.variants) {
            let html = '';
            if (product.variants.sizes) html += `<div class="variant-row"><label>Size:</label> <select id="detailSize">${product.variants.sizes.map(s => `<option>${s}</option>`).join('')}</select></div>`;
            if (product.variants.colors) html += `<div class="variant-row"><label>Color:</label> <select id="detailColor">${product.variants.colors.map(c => `<option>${c}</option>`).join('')}</select></div>`;
            variantsDiv.innerHTML = html;
        } else variantsDiv.innerHTML = '';
        
        const qtyInput = document.getElementById('detailQuantity');
        qtyInput.value = 1;
        qtyInput.oninput = () => {
            const qty = parseInt(qtyInput.value) || 1;
            const total = product.basePrice * qty;
            document.getElementById('detailTotalPrice').textContent = 'total: ' + formatPrice(total);
        };
        const addBtn = document.getElementById('detailAddToCart');
        addBtn.onclick = () => {
            const qty = parseInt(document.getElementById('detailQuantity').value) || 1;
            const size = document.getElementById('detailSize') ? document.getElementById('detailSize').value : null;
            const color = document.getElementById('detailColor') ? document.getElementById('detailColor').value : null;
            addToCart(product.id, qty, size, color, addBtn);
            document.getElementById('productDetailModal').style.display = 'none';
        };
        document.getElementById('productDetailModal').style.display = 'flex';
    }

    function renderProducts() {
        const h = document.getElementById('filterHandmade').checked;
        const c = document.getElementById('filterClothes').checked;
        const u = document.getElementById('filterUnder1000').checked;
        const s = document.getElementById('searchInput').value.toLowerCase();
        const sort = document.getElementById('sortSelect').value;
        let filtered = products.filter(p => (h||p.category!=='handmade') && (c||p.category!=='clothes') && (!u||p.basePrice<1000) && (!s||p.name.toLowerCase().includes(s)));
        if(sort==='priceAsc') filtered.sort((a,b)=>a.basePrice-b.basePrice);
        else if(sort==='priceDesc') filtered.sort((a,b)=>b.basePrice-a.basePrice);
        const handmade = filtered.filter(p=>p.category==='handmade');
        const clothes = filtered.filter(p=>p.category==='clothes');
        let html = '';
        if(handmade.length) html += '<h2 class="section-title" id="handmade" style="margin-top:2rem;"><span class="badge">🧶 handmade collection</span></h2><div class="product-grid">'+handmade.map((p,i)=>renderProductCard(p,i)).join('')+'</div>';
        if(clothes.length) html += '<h2 class="section-title" id="clothes"><span class="badge">👗 clothes collection</span></h2><div class="product-grid">'+clothes.map((p,i)=>renderProductCard(p,i+handmade.length)).join('')+'</div>';
        document.getElementById('productSections').innerHTML = html || '<p>No products match your filters.</p>';
        
        attachProductEvents();
        updateWishlistCount();
        
        setTimeout(() => {
            document.querySelectorAll('.product-card').forEach(card => card.classList.add('visible'));
        }, 50);
    }

    function renderProductCard(p, idx) {
        const isWished = wishlist.includes(p.id);
        const stockBadge = p.stock>0 ? '<span class="stock-badge in-stock">In stock</span>' : '<span class="stock-badge out-of-stock" style="background:#f8d7da; color:#721c24;">Out of stock</span>';
        const mainImg = imageMap[p.images[0]];
        const thumbs = p.images.map(img=>imageMap[img]).filter(Boolean);
        let variantsHtml = '';
        if(p.variants) {
            variantsHtml = '<div class="product-variants">';
            if(p.variants.sizes) variantsHtml += `<div class="variant-row"><label>Size:</label> <select class="size-select">${p.variants.sizes.map(s=>`<option>${s}</option>`).join('')}</select></div>`;
            if(p.variants.colors) variantsHtml += `<div class="variant-row"><label>Color:</label> <select class="color-select">${p.variants.colors.map(c=>`<option>${c}</option>`).join('')}</select></div>`;
            variantsHtml += '</div>';
        }
        return `<div class="product-card" data-id="${p.id}" data-base-price="${p.basePrice}" style="--card-index:${idx}">
            <div class="wishlist-heart ${isWished?'active':''}" data-id="${p.id}"><i class="${isWished?'fas':'far'} fa-heart"></i></div>
            <div class="product-images"><img src="${mainImg}" class="main-image" alt="${p.name}"><div class="thumbnail-strip">${thumbs.map((src,i)=>`<img src="${src}" class="thumbnail ${i===0?'active':''}" data-index="${i}">`).join('')}</div></div>
            <h4 style="margin-top:1rem;">${p.name}</h4>${stockBadge}${variantsHtml}
            <div class="price-info"><span class="base-price">${formatPrice(p.basePrice)}</span></div>
            <div class="order-row" style="display:flex; gap:0.5rem; margin-top:auto; padding-top:1rem;"><input type="number" min="1" value="1" class="quantity-input"><button class="btn-cart add-to-cart" data-id="${p.id}" style="flex:1; justify-content:center;"><i class="fas fa-cart-plus"></i> Add</button></div>
        </div>`;
    }

    function attachProductEvents() {
        // Heart Pulse Animation
        document.querySelectorAll('.wishlist-heart').forEach(heart => {
            heart.addEventListener('click', function(e) {
                e.stopPropagation();
                const id = parseInt(this.dataset.id);
                if (wishlist.includes(id)) {
                    wishlist = wishlist.filter(i => i !== id);
                    this.classList.remove('active');
                    this.innerHTML = '<i class="far fa-heart"></i>';
                } else {
                    wishlist.push(id);
                    this.classList.add('active');
                    this.innerHTML = '<i class="fas fa-heart"></i>';
                }
                saveWishlist();
                this.classList.add('heart-pulse');
                setTimeout(() => this.classList.remove('heart-pulse'), 400);
            });
        });

        document.querySelectorAll('.thumbnail').forEach(t => t.addEventListener('click', function(e){
            e.stopPropagation();
            let card = this.closest('.product-card');
            let main = card.querySelector('.main-image');
            main.src = this.src; 
            card.querySelectorAll('.thumbnail').forEach(tt=>tt.classList.remove('active')); 
            this.classList.add('active');
        }));
        
        // Aesthetic Lightbox Trigger Animation
        document.querySelectorAll('.main-image').forEach(img => img.addEventListener('click', function(e){
            e.stopPropagation();
            document.getElementById('lightboxImg').src = this.src;
            document.getElementById('lightbox').classList.add('show');
        }));
        
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function(e){
                e.stopPropagation();
                let card=this.closest('.product-card'), id=parseInt(card.dataset.id), qty=parseInt(card.querySelector('.quantity-input').value)||1;
                let sizeSelect=card.querySelector('.size-select'), colorSelect=card.querySelector('.color-select');
                let size=sizeSelect?sizeSelect.value:null, color=colorSelect?colorSelect.value:null;
                addToCart(id,qty,size,color, this);
                updateCartCount();
            });
        });

        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function(e){
                if(e.target.closest('.wishlist-heart') || e.target.closest('.thumbnail') || e.target.closest('.quantity-input') || e.target.closest('.add-to-cart') || e.target.closest('select')) return;
                const id = parseInt(this.dataset.id);
                openProductDetail(id);
                if(!recentlyViewed.includes(id)){ recentlyViewed.unshift(id); if(recentlyViewed.length>5) recentlyViewed.pop(); localStorage.setItem('recentlyViewed',JSON.stringify(recentlyViewed)); }
            });
            
            // --- 3D Hover Animation ---
            card.addEventListener('mousemove', function(e) {
                let rect = this.getBoundingClientRect();
                let x = (e.clientX - rect.left) / rect.width - 0.5;
                let y = (e.clientY - rect.top) / rect.height - 0.5;
                let rotateY = x * 8;
                let rotateX = y * -8;
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }

    // Close Lightbox Events
    document.getElementById('closeLightboxBtn').addEventListener('click', () => {
        document.getElementById('lightbox').classList.remove('show');
    });
    document.getElementById('lightbox').addEventListener('click', (e) => {
        if(e.target === document.getElementById('lightbox')) {
            document.getElementById('lightbox').classList.remove('show');
        }
    });

    document.getElementById('estimateDelivery').addEventListener('click',()=>{
        let city = document.getElementById('deliveryCity').value.trim().toLowerCase();
        if(!city) return alert('Please enter a city first');
        let dist = cityDistances[city] || defaultDistance;
        let weight = cart.reduce((s,i)=>s+(i.quantity*0.5),0);
        let rate = calculateDTDCRate(dist, weight);
        currentDelivery = { charge:rate.charge, provider:'DTDC', eta:rate.eta, distance:dist, service:rate.service };
        
        let area = document.getElementById('deliveryEstimateArea');
        area.style.display='block';
        document.getElementById('deliveryChargeUI').innerText = formatPrice(currentDelivery.charge); 
        document.getElementById('deliveryEta').innerText = currentDelivery.eta;
        document.getElementById('deliveryDistance').innerText = currentDelivery.distance;
        document.getElementById('deliveryService').innerText = currentDelivery.service;
        updateDeliverySummary();
    });

    function updateDeliverySummary(){
        let subtotal = cart.reduce((s,i)=>{ let p=products.find(p=>p.id===i.id); return s+(p?p.basePrice*i.quantity:0); },0);
        let total = subtotal + currentDelivery.charge - currentDiscount;
        document.getElementById('deliveryOrderSummary').innerHTML = `
            <strong>Subtotal:</strong> ${formatPrice(subtotal)}<br>
            ${currentDelivery.charge>0?`<strong>DTDC Delivery:</strong> ${formatPrice(currentDelivery.charge)} (${currentDelivery.service})<br>`:''}
            ${currentDiscount>0?`<strong>Discount:</strong> -${formatPrice(currentDiscount)}<br>`:''}
            <strong style="font-size:1.2rem;">Total: ${formatPrice(total)}</strong>`;
    }

    document.getElementById('applyCouponBtn').addEventListener('click',()=>{
        let code = document.getElementById('couponCode').value.trim().toUpperCase();
        let coupon = coupons[code];
        if(!coupon){ document.getElementById('couponMessage').innerText='Invalid code'; return; }
        let subtotal = cart.reduce((s,i)=>{ let p=products.find(p=>p.id===i.id); return s+(p?p.basePrice*i.quantity:0); },0);
        if(coupon.type==='percent') currentDiscount = Math.round(subtotal*coupon.value/100);
        else currentDiscount = coupon.value;
        if(currentDiscount>subtotal) currentDiscount=subtotal;
        document.getElementById('couponMessage').innerHTML = `Discount applied: -${formatPrice(currentDiscount)}`;
        updateDeliverySummary();
    });

    document.getElementById('sendOrder').addEventListener('click',()=>{
        let name=document.getElementById('deliveryName').value.trim();
        let addr=document.getElementById('deliveryAddress').value.trim(); 
        let phone=document.getElementById('deliveryPhone').value.trim(); 
        let notes=document.getElementById('deliveryNotes').value.trim(); 
        let city=document.getElementById('deliveryCity').value.trim();
        
        if(!name||!addr||!phone||!city) return alert('Please fill in all required delivery fields.');
        
        let subtotal=0, msg=`Hello! I'd like to place an order:\n\n`;
        
        cart.forEach(i=>{ 
            let p=products.find(p=>p.id===i.id); 
            if(p){ 
                let t=p.basePrice*i.quantity; 
                subtotal+=t; 
                msg+=`- *${p.name}* x${i.quantity}`; 
                if(i.size) msg+=` (Size: ${i.size}`; 
                if(i.color) msg+=`${i.size?', ':' ('}Color: ${i.color}`; 
                if(i.size||i.color) msg+=`)`; 
                msg+=` — ${formatPrice(p.basePrice)} each, total ${formatPrice(t)}\n`; 
            } 
        });
        
        let total = subtotal + currentDelivery.charge - currentDiscount;
        
        msg += `\n👤 Name: ${name}\n📮 Address: ${addr}\n📞 Phone: ${phone}\n📍 City: ${city}\n`;
        if(notes) msg += `📝 Notes: ${notes}\n`;
        if(currentDelivery.charge>0) msg += `🚚 DTDC Courier: ${formatPrice(currentDelivery.charge)} (${currentDelivery.service})\n📏 Distance: ${currentDelivery.distance} km\n⏱️ Estimated Delivery: ${currentDelivery.eta}\n`;
        if(currentDiscount>0) msg += `🏷️ Discount: -${formatPrice(currentDiscount)}\n`;
        msg += `\n*Grand Total: ${formatPrice(total)}*\n\nThank you! 💛`;
        
        openWhatsApp(msg);
        
        document.getElementById('deliveryModal').style.display='none';
        cart=[]; saveCart(); renderCartModal();
    });

    document.getElementById('cartBtn').addEventListener('click',()=>{ renderCartModal(); document.getElementById('cartModal').style.display='flex'; });
    document.getElementById('wishlistBtn').addEventListener('click',()=>{ renderWishlistModal(); document.getElementById('wishlistModal').style.display='flex'; });
    document.getElementById('proceedToDelivery').addEventListener('click',()=>{
        if(cart.length===0) return alert('Cart empty');
        document.getElementById('cartModal').style.display='none'; 
        document.getElementById('deliveryModal').style.display='flex';
        document.getElementById('deliveryCity').value=''; 
        document.getElementById('couponCode').value=''; 
        document.getElementById('deliveryEstimateArea').style.display='none'; 
        document.getElementById('couponMessage').innerHTML=''; 
        currentDelivery={charge:0}; currentDiscount=0; 
        updateDeliverySummary();
    });

    function renderCartModal(){ 
        let cont=document.getElementById('cartItems'); 
        if(cart.length===0){ 
            cont.innerHTML='<div class="empty-cart">Your cart is empty</div>'; 
            document.getElementById('cartTotal').innerHTML=''; 
            return; 
        } 
        let html='', total=0; 
        cart.forEach((item,idx)=>{ 
            let p=products.find(p=>p.id===item.id); 
            if(!p) return; 
            let t=p.basePrice*item.quantity; 
            total+=t; 
            html+=`<div class="cart-item" data-index="${idx}"><img src="${imageMap[p.images[0]]}"><div class="cart-item-info"><h4>${p.name}</h4><p>${formatPrice(p.basePrice)} each</p>${item.size?'<p>Size: '+item.size+'</p>':''}${item.color?'<p>Color: '+item.color+'</p>':''}</div><div class="cart-item-actions"><input type="number" min="1" value="${item.quantity}" style="width:50px; text-align:center; border-radius:10px; border:1px solid #ccc; background:var(--input-bg); color:var(--text-color);" class="cart-quantity" data-index="${idx}"><i class="fas fa-trash cart-item-remove" data-index="${idx}"></i></div></div>`; 
        }); 
        cont.innerHTML=html; 
        document.getElementById('cartTotal').innerHTML=`<strong>Total: ${formatPrice(total)}</strong>`; 
        
        document.querySelectorAll('.cart-quantity').forEach(inp=>inp.addEventListener('change',function(){ 
            let idx=this.dataset.index, nq=parseInt(this.value); 
            if(nq>0){ cart[idx].quantity=nq; saveCart(); renderCartModal(); } 
        })); 
        document.querySelectorAll('.cart-item-remove').forEach(btn=>btn.addEventListener('click',function(){ 
            let idx=this.dataset.index; cart.splice(idx,1); saveCart(); renderCartModal(); 
        })); 
    }

    function renderWishlistModal(){ 
        let cont=document.getElementById('wishlistItems'); 
        if(wishlist.length===0){ 
            cont.innerHTML='<div class="empty-wishlist">Your wishlist is empty 💔</div>'; 
            return; 
        } 
        let html=''; 
        wishlist.forEach(id=>{ 
            let p=products.find(p=>p.id===id); 
            if(p) html+=`<div class="wishlist-item" data-id="${p.id}"><img src="${imageMap[p.images[0]]}"><div class="wishlist-item-info"><h4>${p.name}</h4><p>${formatPrice(p.basePrice)}</p></div><i class="fas fa-trash remove-wishlist" data-id="${p.id}"></i></div>`; 
        }); 
        cont.innerHTML=html; 
        document.querySelectorAll('.remove-wishlist').forEach(btn=>btn.addEventListener('click',function(e){ 
            e.stopPropagation(); let id=parseInt(this.dataset.id); wishlist=wishlist.filter(i=>i!==id); saveWishlist(); renderWishlistModal(); renderProducts(); 
        })); 
    }

    document.querySelectorAll('.close-modal').forEach(el=>el.addEventListener('click',function(){ this.closest('.modal').style.display='none'; }));
    window.addEventListener('click',e=>{ if(e.target.classList.contains('modal')) e.target.style.display='none'; });

    document.getElementById('currencyINR').addEventListener('click',()=>{ currentCurrency='INR'; document.getElementById('currencyINR').classList.add('active'); document.getElementById('currencyUSD').classList.remove('active'); renderProducts(); });
    document.getElementById('currencyUSD').addEventListener('click',()=>{ currentCurrency='USD'; document.getElementById('currencyUSD').classList.add('active'); document.getElementById('currencyINR').classList.remove('active'); renderProducts(); });
    document.getElementById('searchInput').addEventListener('input',renderProducts);
    document.getElementById('filterHandmade').addEventListener('change',renderProducts);
    document.getElementById('filterClothes').addEventListener('change',renderProducts);
    document.getElementById('filterUnder1000').addEventListener('change',renderProducts);
    document.getElementById('sortSelect').addEventListener('change',renderProducts);
    document.getElementById('newsletterForm').addEventListener('submit',e=>{ e.preventDefault(); alert('Subscribed!'); });

    const container = document.getElementById('productSections');
    container.innerHTML = '<p style="text-align:center; padding: 2rem; opacity: 0.5;">Loading products...</p>';
    setTimeout(renderProducts, 300);

    // --- Blob Scroll Animation ---
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        document.getElementById('mainHeader').classList.toggle('scrolled', scrollY > 50);
        requestAnimationFrame(() => {
            document.getElementById('blob1').style.transform = `translateY(${scrollY*0.05}px)`;
            document.getElementById('blob2').style.transform = `translateY(${-scrollY*0.05}px)`;
        });
    });

    // --- Smooth Page Transitions ---
    document.querySelectorAll('.nav-links a').forEach(link=>{
        link.addEventListener('click',function(e){
            e.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            if(!targetId) targetId='';
            const transitionContainer = document.getElementById('mainContainer');
            transitionContainer.classList.add('page-transition-out');
            setTimeout(()=>{
                if(targetId){
                    let target = document.getElementById(targetId);
                    if(target) target.scrollIntoView({behavior:'smooth'});
                } else window.scrollTo({top:0,behavior:'smooth'});
                setTimeout(()=>transitionContainer.classList.remove('page-transition-out'),100);
            },200);
        });
    });

    updateCartCount(); updateWishlistCount();
})();
