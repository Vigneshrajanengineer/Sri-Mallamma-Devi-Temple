function showMap() {
    document.getElementById("map").style.display = "block";
}

function donate() {
    alert("Thank you 🙏");
}

/* Slider */
let images = [
    "images/temple.jpg",
    
];

let index = 0;

function nextSlide() {
    index = (index + 1) % images.length;
    document.getElementById("slider-image").src = images[index];
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slider-image").src = images[index];
}

/* Language */
function setLanguage(lang) {

    if (lang === "en") {
        document.getElementById("title").innerText = "Sri Mallamma Devi Temple";
        document.getElementById("nav_about").innerText = "About";
        document.getElementById("nav_location").innerText = "Location";
        document.getElementById("nav_gallery").innerText = "Gallery";
        document.getElementById("nav_donation").innerText = "Donation";

        document.getElementById("about_title").innerText = "About Temple";
        document.getElementById("about_text").innerText = "Sacred temple.";

        document.getElementById("location_text").innerText = "Near Hosur";
        document.getElementById("map_btn").innerText = "View Map";

        document.getElementById("donation_title").innerText = "Donation";
        document.getElementById("donation_text").innerText = "Support temple";

        document.getElementById("donate_btn").innerText = "Donate";

        document.getElementById("announcement-text").innerText =
            "🔔 Festival Announcement: Special pooja on March 30";
    }

    else {
        document.getElementById("title").innerText = "ஸ்ரீ மல்லம்மா தேவி கோவில்";
        document.getElementById("nav_about").innerText = "கோவில் பற்றி";
        document.getElementById("nav_location").innerText = "இருப்பிடம்";
        document.getElementById("nav_gallery").innerText = "புகைப்படங்கள்";
        document.getElementById("nav_donation").innerText = "தானம்";

        document.getElementById("about_title").innerText = "கோவில் பற்றி";
        document.getElementById("about_text").innerText = "புனிதமான தலம்";

        document.getElementById("location_text").innerText = "ஹோசூர் அருகில்";
        document.getElementById("map_btn").innerText = "Map பார்க்க";

        document.getElementById("donation_title").innerText = "தானம்";
        document.getElementById("donation_text").innerText = "உதவி தேவை";

        document.getElementById("donate_btn").innerText = "தானம் செய்ய";

        document.getElementById("announcement-text").innerText =
            "🔔 திருவிழா அறிவிப்பு: மார்ச் 30 அன்று சிறப்பு பூஜை";
    }
}