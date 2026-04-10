/* ================== PRODUCT DATA ================== */
const products = [
    {
        id: 1,
        name: "Satin Slip Midi Dress",
        category: "Dresses",
        price: 3200.00, // Lowered price
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
        description: "Elegant satin slip dress featuring a cowl neckline and adjustable spaghetti straps. Perfect for evening events or layered for daytime chic.",
        isTrending: true
    },
    {
        id: 2,
        name: "Linen Blend Blazer",
        category: "Tops",
        price: 4100.00,
        image: "https://images.unsplash.com/photo-1551048632-24e444b48a3e?auto=format&fit=crop&w=600&q=80",
        description: "A tailored linen-blend blazer that brings instant sophistication to any outfit. Features a single-breasted front and lightly padded shoulders.",
        isTrending: true
    },
    {
        id: 3,
        name: "Wide Leg Trousers",
        category: "Bottoms",
        price: 2500.00,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
        description: "High-waisted wide-leg trousers that drape beautifully. Features a concealed zip fastening and side pockets.",
        isTrending: true
    },
    {
        id: 4,
        name: "Ribbed Knit Sweater",
        category: "Tops",
        price: 1800.00,
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
        description: "Cozy ribbed knit sweater with a relaxed fit. Made from a soft wool blend to keep you warm in style."
    },
    {
        id: 5,
        name: "Pleated Midi Skirt",
        category: "Bottoms",
        price: 2200.00,
        image: "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?auto=format&fit=crop&w=600&q=80",
        description: "A timeless pleated midi skirt that moves beautifully. Features an elasticated waistband for comfort."
    },
    {
        id: 6,
        name: "Structured Mini Tote",
        category: "Accessories",
        price: 3800.00,
        image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80",
        description: "A minimalist mini tote bag crafted from premium vegan leather. Includes a detachable crossbody strap."
    },
    {
        id: 7,
        name: "Off-Shoulder Blouse",
        category: "Tops",
        price: 1500.00,
        image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=600&q=80",
        description: "Romantic off-shoulder blouse with subtle volume sleeves. Perfect for date night."
    },
    {
        id: 8,
        name: "Classic Wrap Dress",
        category: "Dresses",
        price: 3600.00,
        image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=600&q=80",
        description: "The universally flattering wrap dress in a soft, breathable fabric. Ties at the waist."
    },
    {
        id: 9,
        name: "Silk Scarf",
        category: "Accessories",
        price: 900.00,
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
        description: "A versatile silk scarf that can be worn around the neck, in your hair, or tied to your favourite bag."
    },
    {
        id: 10,
        name: "Puff Sleeve Midi Dress",
        category: "Dresses",
        price: 4500.00,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
        description: "A dreamy puff sleeve dress with a fitted bodice and flowing skirt."
    },
    {
        id: 11,
        name: "Tailored Linen Shorts",
        category: "Bottoms",
        price: 1600.00,
        image: "https://images.unsplash.com/photo-1591369822096-114cb1735515?auto=format&fit=crop&w=600&q=80",
        description: "Chic linen shorts with a high-rise waist and subtle pleating."
    },
    {
        id: 12,
        name: "Gold Plated Hoop Earrings",
        category: "Accessories",
        price: 1200.00,
        image: "https://images.unsplash.com/photo-1535632066927-ab0c9ab60908?auto=format&fit=crop&w=600&q=80",
        description: "Classic gold-plated hoops that add a touch of elegance to any look."
    },
    {
        id: 13,
        name: "V-Neck Cashmere Cardigan",
        category: "Tops",
        price: 6500.00,
        image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&w=600&q=80",
        description: "Ultra-soft premium cashmere cardigan with a relaxed V-neck silhouette."
    },
    {
        id: 14,
        name: "Floral Summer Maxi",
        category: "Dresses",
        price: 3900.00,
        image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=600&q=80",
        description: "Breezy floral maxi dress perfect for summer getaways and brunches."
    },
    {
        id: 15,
        name: "Minimalist Leather Belt",
        category: "Accessories",
        price: 1400.00,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        description: "A sleek and versatile thin leather belt with a subtle gold buckle."
    },
    {
        id: 16,
        name: "Flared Denim Jeans",
        category: "Bottoms",
        price: 2900.00,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
        description: "Classic vintage-washed flared jeans with a flattering high rise."
    }
];

/* ================== STATE MANAGEMENT ================== */
let cart = JSON.parse(localStorage.getItem('liana_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('liana_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('liana_user')) || null;

let currentCategoryFilter = 'All';
let currentPriceFilter = 'All';

/* ================== ROUTING (SPA LOGIC) ================== */
function navigateTo(pageId, state = {}) {
    // Auth Guard
    if (pageId === 'auth' && currentUser) {
        pageId = 'profile'; // Redirect to profile if already logged in
    }
    if (pageId === 'profile' && !currentUser) {
        pageId = 'auth'; // Redirect to login if not logged in
    }

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-link') === pageId) {
            link.classList.add('active');
        }
    });

    // Page Specific Logic
    if (pageId === 'shop') {
        if (state.category) {
            currentCategoryFilter = state.category;
            const radio = document.querySelector(`input[name="category"][value="${state.category}"]`);
            if(radio) radio.checked = true;
        }
        renderShop();
    } else if (pageId === 'product' && state.productId) {
        renderProductDetail(state.productId);
    } else if (pageId === 'cart') {
        renderCart();
    } else if (pageId === 'checkout') {
        renderCheckout();
    } else if (pageId === 'wishlist') {
        renderWishlist();
    } else if (pageId === 'profile') {
        renderProfile();
    }
}

// Global exposure for onClick handlers
window.navigateTo = navigateTo;

/* ================== EVENT LISTENERS ================== */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Navigation
    document.querySelectorAll('[data-link]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            let pageId = el.getAttribute('data-link');
            navigateTo(pageId);
        });
    });

    // Search Overlay
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearch = document.getElementById('close-search');

    searchToggle.addEventListener('click', (e) => {
        e.preventDefault();
        searchOverlay.classList.toggle('active');
        if(searchOverlay.classList.contains('active')) {
            document.getElementById('search-input').focus();
        }
    });

    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });

    // Shop Filters - Category
    document.querySelectorAll('input[name="category"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentCategoryFilter = e.target.value;
            renderShop();
        });
    });

    // Shop Filters - Price
    document.querySelectorAll('input[name="price"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentPriceFilter = e.target.value;
            renderShop();
        });
    });

    // Forms Submission Logic
    const loginForm = document.getElementById('login-form');
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = loginForm.querySelector('input[type="email"]').value;
            const username = emailInput.split('@')[0];
            const userId = 'USR-' + Math.floor(100000 + Math.random() * 900000);
            
            currentUser = { 
                email: emailInput, 
                name: username.charAt(0).toUpperCase() + username.slice(1), 
                id: userId 
            };
            
            localStorage.setItem('liana_user', JSON.stringify(currentUser));
            showToast(`Welcome back, ${currentUser.name}!`);
            setTimeout(() => navigateTo('profile'), 1000);
        });
    }

    // Init UI 
    updateBadges();
    renderHomeTrending();
});

/* ================== RENDER FUNCTIONS ================== */

function generateProductCardHTML(product) {
    const inWishlist = wishlist.includes(product.id);
    const heartClass = inWishlist ? 'fas fa-heart' : 'far fa-heart';
    const heartColor = inWishlist ? 'color: #e74c3c;' : '';

    return `
        <div class="product-card">
            <div class="product-image-container" onclick="navigateTo('product', {productId: ${product.id}})">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay" onclick="event.stopPropagation()">
                    <button class="action-btn" aria-label="Add to Wishlist" onclick="toggleWishlist(${product.id})">
                        <i class="${heartClass}" style="${heartColor}"></i>
                    </button>
                    <button class="action-btn" aria-label="Add to Cart" onclick="addToCart(${product.id}, 1)">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h4 class="product-name" onclick="navigateTo('product', {productId: ${product.id}})">${product.name}</h4>
                <div class="product-price">₹${product.price.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
            </div>
        </div>
    `;
}

function renderHomeTrending() {
    const grid = document.getElementById('home-trending-grid');
    if(!grid) return;
    const trendingList = products.filter(p => p.isTrending).slice(0, 4);
    grid.innerHTML = trendingList.map(generateProductCardHTML).join('');
}

function renderShop() {
    const grid = document.getElementById('main-shop-grid');
    const countLabel = document.getElementById('product-count');
    
    let filtered = products;
    
    // Apply Category Filter
    if (currentCategoryFilter !== 'All') {
        filtered = filtered.filter(p => p.category === currentCategoryFilter);
    }
    
    // Apply Price Filter
    if (currentPriceFilter !== 'All') {
        if (currentPriceFilter === 'under5000') {
            filtered = filtered.filter(p => p.price < 5000);
        } else if (currentPriceFilter === '5000to10000') {
            filtered = filtered.filter(p => p.price >= 5000 && p.price <= 10000);
        } else if (currentPriceFilter === 'over10000') {
            filtered = filtered.filter(p => p.price > 10000);
        }
    }
    
    countLabel.innerText = `Showing ${filtered.length} results`;
    grid.innerHTML = filtered.map(generateProductCardHTML).join('');
    
    if(filtered.length === 0) {
        grid.innerHTML = '<p class="text-center" style="grid-column: 1/-1;">No products match your filters.</p>';
    }
}

function renderProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const container = document.getElementById('product-detail-content');
    const loading = document.getElementById('product-loading');
    
    loading.style.display = 'none';
    container.style.display = 'grid';

    container.innerHTML = `
        <div class="pd-images">
            <a class="nav-back" onclick="navigateTo('shop')"><i class="fas fa-arrow-left"></i> Back to Shop</a>
            <img src="${product.image}" alt="${product.name}" class="main-img">
            <div class="pd-thumbnails">
                <img src="${product.image}" class="active" alt="thumb">
                <img src="${product.image}" alt="thumb">
                <img src="${product.image}" alt="thumb">
            </div>
        </div>
        <div class="pd-info">
            <span class="product-category">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="pd-price">₹${product.price.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
            <p class="pd-desc">${product.description}</p>
            
            <div class="pd-filters">
                <p><strong>Size</strong></p>
                <div class="pd-size">
                    <button class="size-btn">XS</button>
                    <button class="size-btn active">S</button>
                    <button class="size-btn">M</button>
                    <button class="size-btn">L</button>
                    <button class="size-btn">XL</button>
                </div>
            </div>

            <div class="pd-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id}, 1)">Add to Cart</button>
                <button class="btn btn-outline" onclick="toggleWishlist(${product.id})">
                    <i class="${wishlist.includes(product.id) ? 'fas fa-heart' : 'far fa-heart'}"></i> Wishlist
                </button>
            </div>
            
            <div class="pd-extra mt-4" style="line-height:2; font-size:0.9rem; color:var(--clr-gray);">
                <div style="cursor:pointer;" onclick="showToast('Open Shipping & Returns policy details.')">
                    <i class="fas fa-box"></i> Shipping & Returns <span style="float:right;">+</span>
                </div>
                <hr style="opacity: 0.3; margin: 0.5rem 0;">
                <div style="cursor:pointer;" onclick="showToast('Size Guide chart overlay.')">
                    <i class="fas fa-ruler-combined"></i> Size Guide <span style="float:right;">+</span>
                </div>
            </div>
        </div>
    `;
}

function renderWishlist() {
    const grid = document.getElementById('wishlist-grid');
    const emptyMsg = document.getElementById('empty-wishlist-message');
    
    if (wishlist.length === 0) {
        grid.style.display = 'none';
        emptyMsg.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        emptyMsg.style.display = 'none';
        
        const wItems = products.filter(p => wishlist.includes(p.id));
        grid.innerHTML = wItems.map(generateProductCardHTML).join('');
    }
}

function renderProfile() {
    if (!currentUser) return;
    const nameEl = document.getElementById('profile-name');
    const idEl = document.getElementById('profile-id');
    const emailEl = document.getElementById('profile-email');
    
    if(nameEl) nameEl.innerText = currentUser.name;
    if(idEl) idEl.innerText = currentUser.id;
    if(emailEl) emailEl.innerText = currentUser.email;
}

window.logoutUser = function() {
    currentUser = null;
    localStorage.removeItem('liana_user');
    showToast("You have been successfully signed out.");
    navigateTo('home');
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart-message text-center pt-4" style="padding: 3rem 0;"><p>Your cart is empty.</p><button class="btn btn-outline mt-3" onclick="navigateTo(\'shop\')">Continue Shopping</button></div>';
        subtotalEl.innerText = '₹0.00';
        totalEl.innerText = '₹0.00';
        return;
    }

    let subtotal = 0;
    container.innerHTML = '';

    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (!product) return;
        
        const itemTotal = product.price * cartItem.quantity;
        subtotal += itemTotal;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" onclick="navigateTo('product', {productId: ${product.id}})" style="cursor:pointer;">
                <div class="cart-item-details">
                    <span class="product-category">${product.category}</span>
                    <h4 class="mt-2 text-md">${product.name}</h4>
                    <p class="mt-2 mb-2" style="font-weight: 600;">₹${product.price.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    <div class="qty-control">
                        <button onclick="updateCartQuantity(${product.id}, -1)">-</button>
                        <span>${cartItem.quantity}</span>
                        <button onclick="updateCartQuantity(${product.id}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-btn" onclick="removeFromCart(${product.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });

    subtotalEl.innerText = `₹${subtotal.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    totalEl.innerText = `₹${subtotal.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

function renderCheckout() {
    const container = document.getElementById('checkout-items');
    const totalEl = document.getElementById('checkout-total');
    
    if(cart.length === 0) {
        container.innerHTML = '<p>No items to checkout.</p>';
        totalEl.innerText = '₹0.00';
        return;
    }

    let total = 0;
    container.innerHTML = '';
    
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if(!product) return;
        total += product.price * cartItem.quantity;
        
        container.innerHTML += `
            <div class="summary-row" style="font-size: 0.9rem;">
                <span>${cartItem.quantity}x ${product.name}</span>
                <span>₹${(product.price * cartItem.quantity).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            </div>
        `;
    });
    
    totalEl.innerText = `₹${total.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    
    // Handle form submit
    document.getElementById('checkout-form').onsubmit = (e) => {
        e.preventDefault();
        showToast("Order placed successfully! Thank you for shopping with LIANA.");
        cart = [];
        saveCart();
        setTimeout(() => navigateTo('home'), 2000);
    };
}

/* ================== CART LOGIC ================== */
function addToCart(id, qty = 1) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({ id, quantity: qty });
    }
    saveCart();
    showToast("Added to bag");
}

function updateCartQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id, false);
        } else {
            saveCart();
            renderCart();
        }
    }
}

function removeFromCart(id, showNotif = true) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
    if(showNotif) showToast("Removed from bag");
}

function saveCart() {
    localStorage.setItem('liana_cart', JSON.stringify(cart));
    updateBadges();
}

/* ================== WISHLIST LOGIC ================== */
function toggleWishlist(id) {
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Removed from wishlist");
    } else {
        wishlist.push(id);
        showToast("Added to wishlist");
    }
    localStorage.setItem('liana_wishlist', JSON.stringify(wishlist));
    updateBadges();
    
    // Re-render views if they are active
    const activePageId = document.querySelector('.page.active-page').id;
    if(activePageId === 'page-shop') renderShop();
    if(activePageId === 'page-home') renderHomeTrending();
    if(activePageId === 'page-wishlist') renderWishlist();
    if(activePageId === 'page-product') renderProductDetail(id);
}

/* ================== UTILS ================== */
function updateBadges() {
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('wishlist-count').innerText = wishlist.length;
}

window.showToast = function(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 200);
    }, 3000);
}
