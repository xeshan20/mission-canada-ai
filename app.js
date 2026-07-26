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
