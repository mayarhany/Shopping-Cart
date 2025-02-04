export function updateCartCount(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.querySelector('.badge');
    badge.textContent = count;
}