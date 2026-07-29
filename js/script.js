console.log("WonderLust Loaded Successfully!");

const button = document.querySelector("#startBtn");

button.addEventListener("click", function () {
    alert("Welcome to WonderLust!");
});


const bookBtn = document.querySelector("#bookBtn");

bookBtn.addEventListener("click", function () {
    alert("Booking feature is coming soon!");
});


window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#1e3a8a";
    } else {
        navbar.style.background = "rgba(255,255,255,.15)";
    }

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300){
        topBtn.style.display = "block";
    } else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const logo = document.getElementById("logo");

logo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});