const generateBtn = document.getElementById("generateLetter");

generateBtn.addEventListener("click", function(){

const company =
document.getElementById("company").value;

const position =
document.getElementById("position").value;

const letter = `

Dear Hiring Manager,

I am writing to apply for the ${position} position at ${company}.

I am a hardworking and reliable professional from Pakistan with over 13 years of experience in manufacturing, warehouse operations, production, logistics, material handling, and team leadership.

I am confident that my experience, work ethic, and commitment to safety and productivity would make me a valuable addition to your organization.

I am willing to relocate to Canada and can join immediately upon receiving a valid job offer and work permit support.

Thank you for your time and consideration.

Sincerely,

Muhammad Zeeshan

`;

document.getElementById("letter").value = letter;

});
