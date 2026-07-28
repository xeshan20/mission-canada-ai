alert("resume.js Loaded");
const resumeForm = document.getElementById("resumeForm");
console.log(resumeForm);
alert(resumeForm ? "Form Found ✅" : "Form Not Found ❌");
resumeForm.addEventListener("submit", function(e){
alert("Generate Button Clicked");
e.preventDefault();

const fullName = document.getElementById("fullName").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;
const summary = document.getElementById("summary").value;
const experience = document.getElementById("experience").value;
const education = document.getElementById("education").value;
const skills = document.getElementById("skills").value;
const coreSkills = document.getElementById("coreSkills").value;

const languages = document.getElementById("languages").value;

const certifications = document.getElementById("certifications").value;
const jobTitle = document.getElementById("jobTitle").value;
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
--------------------------------

TARGET POSITION

${jobTitle}
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
--------------------------------

CORE SKILLS

${coreSkills}

--------------------------------

CERTIFICATIONS

${certifications}

--------------------------------

LANGUAGES

${languages}

--------------------------------

REFERENCES

Available Upon Request
`;

localStorage.setItem("generatedResume", resume);

alert("✅ Resume Generated Successfully!");

window.location.href="preview.html";

});
const optimizeBtn = document.getElementById("optimizeBtn");

if(optimizeBtn){

optimizeBtn.addEventListener("click", function(){

const summary = document.getElementById("summary");

summary.value =
"Dedicated and hardworking professional with experience in manufacturing, warehouse operations, production, logistics, material handling, quality control, and teamwork. Strong commitment to workplace safety, efficiency, and productivity. Seeking to contribute valuable skills to a Canadian employer while maintaining high standards of performance.";

alert("✅ Canadian ATS Summary Added");

});

}
