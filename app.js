// ===========================================
// Mission Canada AI
// app.js
// PART 1
// ===========================================

// Theme

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

themeBtn.innerHTML =
document.body.classList.contains("dark")
? "☀️"
: "🌙";

});

}


// ===========================================
// Login Elements
// ===========================================

const email =
document.getElementById("email");

const password =
document.getElementById("password");

const signupBtn =
document.getElementById("signupBtn");

const loginBtn =
document.getElementById("loginBtn");

const logoutBtn =
document.getElementById("logoutBtn");


// ===========================================
// Helper Functions
// ===========================================

function showSuccess(message){

alert("✅ " + message);

}

function showError(message){

alert("❌ " + message);

}

function clearFields(){

if(email) email.value="";

if(password) password.value="";


} 
// ===========================================
// Firebase Signup
// ===========================================

if(signupBtn){

signupBtn.addEventListener("click", async ()=>{

const userEmail = email.value.trim();
const userPassword = password.value.trim();

if(userEmail==="" || userPassword===""){

showError("Please enter Email & Password");
return;

}

try{

await window.createUserWithEmailAndPassword(
window.auth,
userEmail,
userPassword
);

showSuccess("Account Created Successfully");

clearFields();

}catch(error){

showError(error.message);

}

});

}



// ===========================================
// Firebase Login
// ===========================================

if(loginBtn){

loginBtn.addEventListener("click", async ()=>{

const userEmail = email.value.trim();
const userPassword = password.value.trim();

if(userEmail==="" || userPassword===""){

showError("Please enter Email & Password");
return;

}

try{

await window.signInWithEmailAndPassword(
window.auth,
userEmail,
userPassword
);

showSuccess("Login Successful");

}catch(error){

showError(error.message);

}

});

}
// ===========================================
// Firebase Logout
// ===========================================

if(logoutBtn){

logoutBtn.addEventListener("click", async ()=>{

try{

await window.signOut(window.auth);

showSuccess("Logged Out Successfully");

clearFields();

}catch(error){

showError(error.message);

}

});

}


// ===========================================
// User Session
// ===========================================

if(window.auth){

window.auth.onAuthStateChanged?.((user)=>{

const welcome=document.querySelector("h2");

if(!welcome) return;

if(user){

welcome.innerHTML="Welcome " + user.email;

}else{

welcome.innerHTML="Welcome Muhammad Zeeshan";

}

});

}


// ===========================================
// Application Counter
// ===========================================

const count=document.getElementById("applicationCount");

if(count){

const apps=
JSON.parse(localStorage.getItem("applications"))||[];

count.innerText=apps.length;

}


// ===========================================
// app.js Finished
// ===========================================

console.log("Mission Canada AI Loaded Successfully 🚀");
