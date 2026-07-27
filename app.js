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
r// ===============================
// Firebase Signup
// ===============================

if(signupBtn){

signupBtn.onclick = async function(){

const userEmail = email.value.trim();
const userPassword = password.value.trim();

if(userEmail=="" || userPassword==""){

alert("Please enter Email & Password");
return;

}

try{

await createUserWithEmailAndPassword(auth,userEmail,userPassword);

alert("✅ Account Created Successfully");

email.value="";
password.value="";

}catch(error){

alert(error.message);

}

};

}



// ===============================
// Firebase Login
// ===============================

if(loginBtn){

loginBtn.onclick = async function(){

const userEmail=email.value.trim();
const userPassword=password.value.trim();

if(userEmail=="" || userPassword==""){

alert("Please enter Email & Password");
return;

}

try{

await signInWithEmailAndPassword(auth,userEmail,userPassword);

alert("✅ Login Successful");

}catch(error){

alert(error.message);

}

};

}
