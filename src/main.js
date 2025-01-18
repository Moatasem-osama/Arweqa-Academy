const navLinks = document.querySelector('.nav-links');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
let logo = document.getElementById('logo');
// وظيفة التبديل بين إظهار وإخفاء القائمة
function onToggleMenu(e) {
    if (e.name === 'menu') {
        e.name = 'close';
        navLinks.classList.remove('hidden'); // إظهار القائمة
    } else {
        e.name = 'menu';
        navLinks.classList.add('hidden'); // إخفاء القائمة
    }
}

// التحقق من صحة اسم المستخدم أثناء الكتابة
phoneInput.addEventListener("keyup", () => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; // Regex لاسم المستخدم
    const phoneValue = phoneInput.value;
    if (phoneRegex.test(phoneValue)) {
        phoneInput.style.boxShadow = "0 0 5px green"; // إذا كان صالحًا
    } else {
        phoneInput.style.boxShadow = "0 0 5px red"; // إذا كان غير صالح
    }
});

// التحقق من صحة البريد الإلكتروني أثناء الكتابة
passwordInput.addEventListener("keyup", () => {
    const passwordRegex = /^[a-zA-Z0-9]{4,12}$/; // Regex مُحسن للبريد الإلكتروني
    const passwordValue = passwordInput.value;
    if (passwordRegex.test(passwordValue)) {
        passwordInput.style.boxShadow = "0 0 5px green"; // إذا كان صالحًا
    } else {
        passwordInput.style.boxShadow = "0 0 5px red"; // إذا كان غير صالح
    }
});
emailInput.addEventListener("keyup", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex مُحسن للبريد الإلكتروني
    const emailValue = emailInput.value;
    if (emailRegex.test(emailValue)) {
        emailInput.style.boxShadow = "0 0 5px green"; // إذا كان صالحًا
    } else {
        emailInput.style.boxShadow = "0 0 5px red"; // إذا كان غير صالح
    }
});

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
   } else {
    document.documentElement.classList.remove('dark')
   
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

let btn = document.getElementById('btn');

onscroll = ()=>{
    if(scrollY >= 400){
        btn.classList.remove('hidden');
    }else{
        btn.classList.add('hidden');
    }
}
btn.onclick =()=>{
    scroll({
        top: 0,
        behavior:'smooth'
    })
}