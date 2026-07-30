console.log("WonderLust Loaded Successfully!");

const button = document.querySelector("#startBtn");

button.addEventListener("click", function () {
    alert("Welcome to WonderLust!");
});


const bookBtn = document.getElementById("bookBtn");
const startBtn = document.getElementById("startBtn");
const footerBtn = document.getElementById("footerBookBtn");

function openBookingForm(){

    bookingModal.style.display = "flex";

}

bookBtn.addEventListener("click", openBookingForm);

startBtn.addEventListener("click", openBookingForm);

footerBtn.addEventListener("click", openBookingForm);





window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        if (document.body.classList.contains("dark-mode")) {
            navbar.style.background = "#111827";
        } else {
            navbar.style.background = "#1e3a8a";
        }

    } else {

        if (document.body.classList.contains("dark-mode")) {
            navbar.style.background = "#111827";
        } else {
            navbar.style.background = "rgba(255,255,255,.15)";
        }

    }

});


const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

const logo = document.getElementById("logo");

if (logo) {

    logo.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = searchInput.value.toLowerCase();

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}





// ================= Modal =================

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

const placeName = document.getElementById("placeName");
const price = document.getElementById("price");
const days = document.getElementById("days");
const rating = document.getElementById("rating");
const modalImage = document.getElementById("modalImage");

const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(button=>{

    button.addEventListener("click",function(){

        placeName.textContent=this.dataset.place;
        price.textContent="💰 Price : "+this.dataset.price;
        days.textContent="📅 Duration : "+this.dataset.days;
        rating.textContent="⭐ Rating : "+this.dataset.rating;
        
        modalImage.src = this.dataset.image;
        
        modal.style.display="flex";

    });

});

closeBtn.addEventListener("click",function(){

    modal.style.display="none";

});

window.addEventListener("click",function(e){

    if(e.target===modal){
        modal.style.display="none";
    }

});

const favButtons = document.querySelectorAll(".fav-btn");

favButtons.forEach(btn => {

    btn.addEventListener("click", function(){

        if(this.textContent=="🤍"){
            this.textContent="❤️";
        }else{
            this.textContent="🤍";
        }

    });

});





const bookingModal = document.getElementById("bookingModal");
const bookNow = document.getElementById("bookNow");
const closeBooking = document.getElementById("closeBooking");
const submitBooking = document.getElementById("submitBooking");

bookNow.addEventListener("click", function () {

    modal.style.display = "none";
    bookingModal.style.display = "flex";

});

closeBooking.addEventListener("click", function () {

    bookingModal.style.display = "none";

});

submitBooking.addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(name==="" || email===""){
        alert("Please fill all required fields.");
        return;
    }

    alert("🎉 Booking Confirmed!\nThank you for choosing WonderLust.");

    bookingModal.style.display="none";

});



const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkModeBtn.textContent = "☀️";
        } else {
            darkModeBtn.textContent = "🌙";
        }

    });

}

