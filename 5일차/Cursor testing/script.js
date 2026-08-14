// ===== 상품 데이터 (5열 x 6행 = 30개) =====
const products = [
  { id: 1,  name: '무선 이어폰',       price: 89000,  image: 'https://picsum.photos/300/300?random=11' },
  { id: 2,  name: '노트북 파우치',     price: 35000,  image: 'https://picsum.photos/300/300?random=12' },
  { id: 3,  name: 'USB-C 허브',        price: 42000,  image: 'https://picsum.photos/300/300?random=13' },
  { id: 4,  name: '기계식 키보드',     price: 129000, image: 'https://picsum.photos/300/300?random=14' },
  { id: 5,  name: '무선 마우스',       price: 45000,  image: 'https://picsum.photos/300/300?random=15' },
  { id: 6,  name: '모니터 받침대',     price: 28000,  image: 'https://picsum.photos/300/300?random=16' },
  { id: 7,  name: '블루투스 스피커',   price: 67000,  image: 'https://picsum.photos/300/300?random=17' },
  { id: 8,  name: '태블릿 거치대',     price: 22000,  image: 'https://picsum.photos/300/300?random=18' },
  { id: 9,  name: '웹캠 HD',           price: 55000,  image: 'https://picsum.photos/300/300?random=19' },
  { id: 10, name: 'SSD 1TB',           price: 98000,  image: 'https://picsum.photos/300/300?random=20' },
  { id: 11, name: '게이밍 헤드셋',     price: 78000,  image: 'https://picsum.photos/300/300?random=21' },
  { id: 12, name: '보조배터리 20000mAh', price: 39000, image: 'https://picsum.photos/300/300?random=22' },
  { id: 13, name: 'LED 데스크 램프',   price: 48000,  image: 'https://picsum.photos/300/300?random=23' },
  { id: 14, name: '캔버스 백팩',       price: 52000,  image: 'https://picsum.photos/300/300?random=24' },
  { id: 15, name: '스마트워치',        price: 199000, image: 'https://picsum.photos/300/300?random=25' },
  { id: 16, name: '멀티탭 6구',        price: 18000,  image: 'https://picsum.photos/300/300?random=26' },
  { id: 17, name: '노트북 쿨링패드',   price: 32000,  image: 'https://picsum.photos/300/300?random=27' },
  { id: 18, name: 'HDMI 케이블 2m',    price: 12000,  image: 'https://picsum.photos/300/300?random=28' },
  { id: 19, name: '무선 충전기',       price: 29000,  image: 'https://picsum.photos/300/300?random=29' },
  { id: 20, name: '키보드 손목 받침',  price: 15000,  image: 'https://picsum.photos/300/300?random=30' },
  { id: 21, name: 'USB 메모리 128GB',  price: 24000,  image: 'https://picsum.photos/300/300?random=31' },
  { id: 22, name: '노트북 스탠드',     price: 38000,  image: 'https://picsum.photos/300/300?random=32' },
  { id: 23, name: '마우스 패드 XL',    price: 19000,  image: 'https://picsum.photos/300/300?random=33' },
  { id: 24, name: '블루라이트 차단 안경', price: 25000, image: 'https://picsum.photos/300/300?random=34' },
  { id: 25, name: '휴대용 선풍기',     price: 34000,  image: 'https://picsum.photos/300/300?random=35' },
  { id: 26, name: '텀블러 500ml',      price: 21000,  image: 'https://picsum.photos/300/300?random=36' },
  { id: 27, name: '책상 정리함',       price: 16000,  image: 'https://picsum.photos/300/300?random=37' },
  { id: 28, name: '와이파이 공유기',   price: 89000,  image: 'https://picsum.photos/300/300?random=38' },
  { id: 29, name: '에어팟 케이스',     price: 14000,  image: 'https://picsum.photos/300/300?random=39' },
  { id: 30, name: '노트북 청소 키트',  price: 11000,  image: 'https://picsum.photos/300/300?random=40' },
];

// ===== 장바구니 상태 =====
let cart = [];

// ===== DOM 요소 =====
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo');
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const cartCount = document.getElementById('cartCount');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');

// ===== 페이지 전환 =====
function showPage(pageName) {
  pages.forEach(page => page.classList.remove('active'));
  navLinks.forEach(link => link.classList.remove('active'));

  const targetPage = document.getElementById(pageName + 'Page');
  if (targetPage) {
    targetPage.classList.add('active');
  }

  const activeLink = document.querySelector(`.nav-link[data-page="${pageName}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

logo.addEventListener('click', (e) => {
  e.preventDefault();
  showPage('home');
});

// ===== 상품 목록 렌더링 =====
function renderProducts() {
  productsGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price.toLocaleString()}원</div>
        <button class="add-to-cart" data-id="${product.id}">장바구니 담기</button>
      </div>
    </div>
  `).join('');

  productsGrid.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = parseInt(btn.dataset.id);
      addToCart(productId);
    });
  });
}

// ===== 장바구니 기능 =====
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  cartSidebar.classList.add('open');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartTotalPrice.textContent = totalPrice.toLocaleString() + '원';

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">장바구니가 비어 있습니다.</p>';
    return;
  }

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-image" src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-qty">수량: ${item.quantity}</div>
      </div>
      <div class="cart-item-price">${(item.price * item.quantity).toLocaleString()}원</div>
      <button class="cart-item-remove" data-id="${item.id}">&times;</button>
    </div>
  `).join('');

  cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.id));
    });
  });
}

// ===== 장바구니 토글 =====
cartToggle.addEventListener('click', () => {
  cartSidebar.classList.toggle('open');
});

cartClose.addEventListener('click', () => {
  cartSidebar.classList.remove('open');
});

// ===== 슬라이더 =====
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let slideInterval;

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 4000);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

prevBtn.addEventListener('click', () => {
  goToSlide(currentSlide - 1);
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  goToSlide(currentSlide + 1);
  resetAutoSlide();
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(parseInt(dot.dataset.index));
    resetAutoSlide();
  });
});

// ===== 로그인 / 회원가입 =====
document.getElementById('loginBtn').addEventListener('click', () => {
  alert('로그인 페이지로 이동합니다.');
});

document.getElementById('signupBtn').addEventListener('click', () => {
  alert('회원가입 페이지로 이동합니다.');
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('장바구니가 비어 있습니다.');
    return;
  }
  alert('주문이 완료되었습니다!');
  cart = [];
  updateCartUI();
  cartSidebar.classList.remove('open');
});

// ===== 초기화 =====
renderProducts();
startAutoSlide();
showPage('home');
