const container = document.querySelector('.content-box');
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const regisrerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let users = JSON.parse(localStorage.getItem('users')) || [];


function createUser(){
    if (emailRegex.test(emailInput.value)) {
        if(users.find(user => user.email === emailInput.value)) {
            // console.log('found')
            window.location.href = '/home.html';
        }
        else{
            let user = {
                email: emailInput.value,
                password: passwordInput.value
            };
            localStorage.setItem('users', JSON.stringify(users));
            users.push(user);
            window.location.href = '/home.html';
            // console.log('user created');
            // console.log(users);
        }
    }
}

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    createUser();
})

regisrerBtn.addEventListener('click', () =>{
    container.classList.add('active');
})
loginBtn.addEventListener('click', () =>{
    container.classList.remove('active');
})