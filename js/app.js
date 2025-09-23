// app.js

// Función para redirigir
function goTo(page) {
  window.location.href = page;
}

// =======================
// INDEX (welcome.html)
// =======================
const startBtn = document.getElementById("btnStart");
if (startBtn) {
  startBtn.addEventListener("click", () => goTo("entrada.html"));
}

// =======================
// ENTRADA (entrada.html)
// =======================
const btnRegister = document.getElementById("btnRegister");
const btnLogin = document.getElementById("btnLogin");

if (btnRegister) {
  btnRegister.addEventListener("click", () => goTo("register.html"));
}
if (btnLogin) {
  btnLogin.addEventListener("click", () => goTo("login.html"));
}

// =======================
// LOGIN (login.html)
// =======================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recargar la página
    alert("Inicio de sesión exitoso ✅");
    window.location.href = "dashboard.html"; // redirige al dashboard
  });
}

// =======================
// REGISTER (register.html)
// =======================
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Aquí más adelante podrías guardar datos
    alert("Cuenta creada con éxito 🎉");
    goTo("login.html");
  });
}
