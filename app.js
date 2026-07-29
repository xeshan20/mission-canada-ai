// ===========================================
// Mission Canada AI
// app.js
// PART 1
// ===========================================

// ===============================
// Theme Mode
// ===============================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

themeBtn.innerHTML =
document.body.classList.contains("dark")
? "☀️"
: "🌙";

});

}

// ===============================
// Firebase Elements
// ===============================

const email = document.getElementById("email");
const password = document.getElementById("password");

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// ===============================
// Helper Functions
// ===============================

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

// ===============================
// Application Table
// ===============================

const table =
document.getElementById("applicationTable");

const count =
document.getElementById("applicationCount");

// ===============================
// Local Storage
// ===============================

function getApplications(){

return JSON.parse(
localStorage.getItem("applications")
) || [];

}

function saveApplications(data){

localStorage.setItem(
"applications",
JSON.stringify(data)
);

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
// Load Applications
// ===========================================

function loadApplications(){

if(!table) return;

const applications = getApplications();

table.innerHTML = "";

applications.forEach((application,index)=>{

const row = `

<tr>

<td>${application.company}</td>

<td>${application.position}</td>

<td>${application.status}</td>

<td>${application.date}</td>

<td>

<button onclick="deleteApplication(${index})">

🗑 Delete

</button>

</td>

</tr>

`;

table.innerHTML += row;

});

if(count){

count.innerText = applications.length;

}

}


// ===========================================
// Add Application
// ===========================================

const applicationForm =
document.getElementById("applicationForm");

if(applicationForm){

applicationForm.addEventListener("submit",(e)=>{

e.preventDefault();

const company =
document.getElementById("company").value;

const position =
document.getElementById("position").value;

const status =
document.getElementById("status").value;

const date =
document.getElementById("date").value;

let applications = getApplications();

applications.push({

company,
position,
status,
date

});

saveApplications(applications);

applicationForm.reset();

loadApplications();

showSuccess("Application Saved");

});

}


// ===========================================
// Delete Application
// ===========================================

function deleteApplication(index){

let applications = getApplications();

applications.splice(index,1);

saveApplications(applications);

loadApplications();

}

window.deleteApplication = deleteApplication;


// ===========================================
// Dashboard Counter
// ===========================================

window.onload = ()=>{

loadApplications();

console.log("Mission Canada AI Ready 🚀");

};
function uploadCV(event){

const file = event.target.files[0];

if(!file){
return;
}

localStorage.setItem("uploadedCV", file.name);

alert("✅ CV Uploaded Successfully!\n\nFile: " + file.name);

}
function viewJob(jobName){

localStorage.setItem("selectedJob", jobName);

window.location.href = "jobs.html";

}
function updateDashboard(){

let applications =
JSON.parse(localStorage.getItem("applications")) || [];

const count =
document.getElementById("applicationCount");

if(count){

count.innerText = applications.length;

}

}

updateDashboard();
function loadSavedJobs(){

const list = document.getElementById("savedJobsList");

if(!list) return;

const savedJobs =
JSON.parse(localStorage.getItem("savedJobs")) || [];

if(savedJobs.length === 0){

list.innerHTML = "<li>No Saved Jobs</li>";

return;

}

list.innerHTML = "";

savedJobs.forEach(function(job){

list.innerHTML += "<li>❤️ " + job + "</li>";

});

}

loadSavedJobs();
function findJobs(){

alert("🔍 Searching Canada Jobs...");

setTimeout(function(){

window.location.href="jobs.html";

},1000);

}
const cvFile = document.getElementById("cvFile");

if(cvFile){

cvFile.addEventListener("change", function(){

if(this.files.length > 0){

alert("✅ CV Uploaded Successfully!");

}

});

}
