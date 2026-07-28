alert("resume.js Loaded");
const resumeForm = document.getElementById("resumeForm");

resumeForm.addEventListener("submit", function(e){

e.preventDefault();

const fullName = document.getElementById("fullName").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;
const summary = document.getElementById("summary").value;
const experience = document.getElementById("experience").value;
const education = document.getElementById("education").value;
const skills = document.getElementById("skills").value;

const resume = `

==============================

CANADIAN ATS RESUME

==============================

Name:
${fullName}

Email:
${email}

Phone:
${phone}

Address:
${address}

--------------------------------

PROFESSIONAL SUMMARY

${summary}

--------------------------------

WORK EXPERIENCE

${experience}

--------------------------------

EDUCATION

${education}

--------------------------------

SKILLS

${skills}

`;

localStorage.setItem("generatedResume", resume);

alert("✅ Resume Generated Successfully!");

window.location.href="preview.html";

});
