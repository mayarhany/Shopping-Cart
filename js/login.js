// dom elements
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
function validateInput(input, name){
    if(input.value === ''){
        input.style.setProperty('outline', '1px solid red');
        let p = document.createElement('p')
        p.appendChild(document.createTextNode(`${name} must be entered frist`));
        input.parentNode.appendChild(p);
        return false;
    }
}

loginForm.addEventListener('submit', (e) =>{
    if(!validateInput(emailInput, 'Email') && !validateInput(passwordInput, 'Password')){        
        e.preventDefault();
        createUser();
    }
})

regisrerBtn.addEventListener('click', () =>{
    container.classList.add('active');
})
loginBtn.addEventListener('click', () =>{
    container.classList.remove('active');
})

// hendel the inputs
emailInput.addEventListener('keydown', () =>{
    emailInput.style.setProperty('outline', 'none');
    emailInput.parentNode.removeChild(document.querySelector('#email ~ p'));
})
passwordInput.addEventListener('keydown', () =>{
    passwordInput.style.setProperty('outline', 'none');
    passwordInput.parentNode.removeChild(document.querySelector('#password ~ p'));
})