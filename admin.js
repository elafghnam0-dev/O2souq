let adminProductsList = JSON.parse(localStorage.getItem("productsAdmin")) || [];

function saveProducts() {
    localStorage.setItem("productsAdmin", JSON.stringify(adminProductsList));
}

document.getElementById("addProductForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const newProduct = {
        name: pName.value,
        price: pPrice.value,
        img: pImg.value,
        desc: pDesc.value
    };

    adminProductsList.push(newProduct);
    saveProducts();
    loadAdminProducts();
    alert("تم إضافة المنتج ✓");
});

function loadAdminProducts() {
    const container = document.getElementById("adminProducts");
    container.innerHTML = "";

    adminProductsList.forEach((p, i) => {
        container.innerHTML += `
        <div class="product-item">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>${p.price}</p>

            <button onclick="deleteProduct(${i})">حذف</button>
        </div>
        `;
    });
}

function deleteProduct(i) {
    adminProductsList.splice(i, 1);
    saveProducts();
    loadAdminProducts();
}

loadAdminProducts();
