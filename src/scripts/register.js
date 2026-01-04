import "../styles/register.css";
 import { showMain } from "./home";
export function showRegister(app) {
  app.innerHTML = `
    <div class="app">
   
      <div class="register">
        <h1 class="register_title">Регистрация</h1>
        <br>
        <input class="register_input" type="text" id="user-name" placeholder="Имя">
        <input
          class="register_input"
          id="user-phone"
          type="tel"
          value="+998"
          placeholder="00 000-00-00"
        >

        <button class="register_btn" id="registerBtn">
          Зарегистрироваться
        </button>
           <br></br>
           <br>
         <p class="reg-text">Продолжая, я<br> <a href="https://legal.uzum.uz/privacy-policy-uz.html?_gl=1%2abb4i8h%2a_gcl_au%2aMTc4NTM3MjczMC4xNzY2MDc5MTA3%2a_ga%2aOTU5NTcyMTcwLjE3NjYwNzkxMDc.%2a_ga_7KCSSWWYYD%2aczE3NjY1MDU1MDgkbzUkZzEkdDE3NjY1MDU1MTAkajU4JGwwJGg3MDQxNDQ2MTU.%2a_ga_EZ8RKY9S93%2aczE3NjY1MDU1MDgkbzUkZzAkdDE3NjY1MDU1MDgkajYwJGwwJGgw">
         соглашаюсь с политикой обработки персональных данных</a> и 
         <a href="https://uzumbank.uz/documents/UZUM%20ID%20OMMAVIY%20OFERTA%20(30.01.2025).pdf">принимаю публичную акцию <br> Uzum ID</a> 
         <br></br> 
         <a href="https://uzum.uz/uz/faq">Что такое Uzum ID?</a></p>
        
  `;

 

document
  .getElementById("registerBtn")
  .addEventListener("click", () => {
    const app = document.getElementById("app");

    showMain(app); // 🔥 ВОТ ТУТ ПРОИСХОДИТ ПЕРЕХОД
  });


  document.getElementById("user-name").addEventListener("input", e => {
  e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-Я]/g, "");
});

  document.getElementById("user-phone").addEventListener("input", e => {
  if (!e.target.value.startsWith("+998 ")) {
    e.target.value = "+998 ";
  }
  e.target.value = "+998 " + e.target.value.slice(5).replace(/\D/g, "");
});


const nameInput = document.getElementById("user-name");
const phoneInput = document.getElementById("user-phone");
const registerBtn = document.getElementById("registerBtn");
const error = document.getElementById("error");


nameInput.addEventListener("input", e => {
  
  e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-Я]/g, "");
  
  if (e.target.value.length > 0) {
    e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
  }
});


phoneInput.addEventListener("input", e => {
  if (!e.target.value.startsWith("+998 ")) {
    e.target.value = "+998 ";
  }
  let digits = e.target.value.slice(5).replace(/\D/g, "");
  if (digits.length > 7) digits = digits.slice(0, 7); 
  e.target.value = "+998 " + digits;
});


registerBtn.addEventListener("click", () => {
  const nameVal = nameInput.value.trim();
  const phoneVal = phoneInput.value.trim();


  if (!/^[A-ZА-Я]/.test(nameVal)) {
    error.textContent = "Имя должно начинаться с заглавной буквы.";
    return;
  }

  
  const phoneDigits = phoneVal.slice(5).replace(/\D/g, "");
  if (phoneDigits.length !== 7) {
    error.textContent = "Телефон должен содержать ровно 7 цифр после +998.";
    return;
  }

  
  localStorage.setItem("username", nameVal);
  localStorage.setItem("phone", phoneVal);
  localStorage.setItem("registered", "true");

  
  localStorage.setItem("registered", "true");
  location.reload();
});

 
  registerBtn.onclick = () => {
    if (!nameInput.value) {
      alert("Введите имя");
      return;
    }

    localStorage.setItem("registered", "true");
    localStorage.setItem("username", nameInput.value);

    location.reload(); 
  }
}
