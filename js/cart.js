import { updateCartCount } from "./cart.count.js";

// dom elements
const cartItems = document.getElementById('cart-items');
const totalPrice = document.querySelector('.total-price');

// update cart count when page loads
updateCartCount();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCartItems() {
    if(cart.length >= 1){
        let total = 0;
        cartItems.innerHTML = cart.map(item => {
            total += item.price * item.quantity;        
            return `<div class="col-6">
                    <div class="card shadow">
                        <img src="${item.image}" class="card-img-top" alt="Product 1" />
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <div class="card-text d-flex justify-content-between align-items-center">
                                <h6>${item.quantity}</h6>
                                <div>
                                    <span onclick="window.decreaseQuantity(${item.id})"><i class="fa-solid fa-minus me-4 p-2 main-btn cursor-pointer"></i></span>
                                    <span onclick="window.increaseQuantity(${item.id})"><i class="fa-solid fa-plus p-2 main-btn cursor-pointer"></i></span>
                                </div>
                            </div>
                            <h5 class="card-title">$${(item.price * item.quantity).toFixed(2)}</h5>
                            <a href="#" onclick="removeFromCart(${item.id})" class="main-btn d-inline-block w-100 text-center">Remove From Cart</a>
                        </div>
                    </div>
                </div>
            `}).join("");

            // update total price
            totalPrice.textContent = total.toFixed(2);
    }
    else{
        cartItems.innerHTML = `<h3 class="text-center">Cart is empty</h3>`;
        totalPrice.textContent = `0.00`;
    }
}

displayCartItems();


window.increaseQuantity = (id) => {
    const cartItem = cart.find(item => item.id === id);
    cartItem.quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}
window.decreaseQuantity = (id) => {
    const cartItem = cart.find(item => item.id === id);
    if(cartItem.quantity > 1){
        cartItem.quantity--;
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }
}
window.removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}
