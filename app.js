// ===============================
// Mission Canada AI - app.js
// Part 1
// ===============================

// Theme Button

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

themeBtn.addEventListener("click", function () {

if(document.body.classList.contains("dark")){

document.body.classList.remove("dark");
themeBtn.innerHTML="🌙";

}else{

document.body.classList.add("dark");
themeBtn.innerHTML="☀️";

}

});

}


// Login Elements

const signupBtn=document.getElementById("signupBtn");
const loginBtn=document.getElementById("loginBtn");
const logoutBtn=document.getElementById("logoutBtn");

const email=document.getElementById("email");
const password=document.getElementById("password");
