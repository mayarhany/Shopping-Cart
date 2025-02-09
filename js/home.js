import { products } from "./products.js";
import { updateCartCount } from "./cart.count.js";

const productList = document.getElementById("product-list");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
    productList.innerHTML = products.map((product) =>
        `<div class="col-lg-3 col-md-4 col-6">
                <div class="card shadow">
                    <img src="${product.image}" class="card-img-top" alt="Product 1" />
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="card-text d-flex align-items-center justify-content-between mb-3">
                            <p class="mb-0">$${product.price}</p>
                            <div class="stars">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                        </div>
                        <a href="#" onclick="window.addToCart(${product.id})" class="main-btn d-inline-block w-100 text-center">Add to Cart</a>
                    </div>
                </div>
            </div>`
    )
    .join("");
}

window.addToCart = (id) => {
  const product = products.find((product) => product.id === id);
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  // console.log(cart);
};

displayProducts();
updateCartCount();