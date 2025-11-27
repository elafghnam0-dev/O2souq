
function loadProducts() {
    const container = document.getElementById("productsList");
    if (!container) return;

    products.forEach(p => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
                <a href="product-details.html?id=${p.id}">تفاصيل</a>
            </div>
        `;
    });
}

function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const product = products.find(p => p.id == id);
    if (!product) return;

    document.getElementById("productImg").src = product.img;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productDesc").textContent = product.desc;
    document.getElementById("productPrice").textContent = product.price;
}

loadProducts();
loadProductDetails();
// =====================
// نظام السلة
// =====================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
    const product = products.find(p => p.id == id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("تمت إضافة المنتج إلى السلة ✓");
}

function loadCart() {
    const container = document.getElementById("cartItems");
    const totalElement = document.getElementById("cartTotal");

    if (!container) return;

    container.innerHTML = "";
    let total = 0;

    cart.forEach((p, index) => {
        total += parseFloat(p.price);

        container.innerHTML += `
            <div class="cart-item">
                <img src="${p.img}">
                <div>
                  <h3>${p.name}</h3>
                  <p>${p.price} جنيه</p>
                </div>
                <button onclick="removeItem(${index})">حذف</button>
            </div>
        `;
    });

    totalElement.textContent = total + " جنيه";
}

function removeItem(i) {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
 
const products = [
    {
        id: 1,
        name: "فلتر زيت أوبل أسترا",
        price: "220",
        desc: "فلتر زيت أصلي لأوبل أسترا جميع الموديلات.",
        img: "images/filter.jpg"
    },
    {
    
        id: 2,
        name: "طقم تيل فرامل شيفروليه لانوس",
        price: "350",
        desc: "تيل فرامل أمامي عالي الجودة.",
        img: "images/brake.jpg"
    }
];
