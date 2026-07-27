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

signupBtn.onclick = async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{

        await createUserWithEmailAndPassword(auth, email, password);

        alert("Account Created Successfully ✅");

    }catch(error){

        alert(error.message);

    }

};
