const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    if (document.body.style.background == "black") {

        document.body.style.background = "#f5f7fb";
        document.body.style.color = "black";
        themeBtn.innerHTML = "🌙";

    } else {

        document.body.style.background = "black";
        document.body.style.color = "white";
        themeBtn.innerHTML = "☀️";

    }

});
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

signupBtn.onclick = () => {
    alert("Signup button connected ✅");
};

loginBtn.onclick = () => {
    alert("Login button connected ✅");
};

logoutBtn.onclick = () => {
    alert("Logout button connected ✅");
};
