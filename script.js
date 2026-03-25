function showMap() {
    document.getElementById("map").style.display = "block";
}

function donate() {
    alert("Thank you for your donation 🙏");
}

function setLanguage(lang) {

    if (lang === "en") {
        document.getElementById("title").innerText = "Sri Mallamma Devi Temple - Denkanikottai";

        document.getElementById("nav_about").innerText = "About";
        document.getElementById("nav_location").innerText = "Location";
        document.getElementById("nav_gallery").innerText = "Gallery";
        document.getElementById("nav_donation").innerText = "Donation";

        document.getElementById("about_title").innerText = "About Temple";
        document.getElementById("about_text").innerText =
            "Sri Mallamma Devi Temple is a sacred place where devotees come daily for worship.";

        document.getElementById("location_title").innerText = "Location";
        document.getElementById("location_text").innerText =
            "Located near Telugu school, pattalamai kovil road ,Denkanikottai,krishnagiri District, Tamil Nadu.";

        document.getElementById("map_btn").innerText = "View Google Map";

        document.getElementById("gallery_title").innerText = "Gallery";
        document.getElementById("temple_img").innerText = "Temple Image";
        document.getElementById("construction_img").innerText = "Construction Process";
        document.getElementById("god_img").innerText = "Goddess Image";

        document.getElementById("donation_title").innerText = "Donation";
        document.getElementById("donation_text").innerText =
            "Your support is needed for temple maintenance and Annadhanam.";

        document.getElementById("donate_btn").innerText = "Donate Now";
        document.getElementById("announcement-text").innerText =
            "🔔 Festival Announcement: Special pooja on March 30";

        document.getElementById("footer_text").innerText =
            "© 2026 Sri Mallamma Devi Temple";
    }

    else {
        document.getElementById("title").innerText = "ஸ்ரீ மல்லம்மா தேவி கோவில்";

        document.getElementById("nav_about").innerText = "கோவில் பற்றி";
        document.getElementById("nav_location").innerText = "இருப்பிடம்";
        document.getElementById("nav_gallery").innerText = "புகைப்படங்கள்";
        document.getElementById("nav_donation").innerText = "தானம்";

        document.getElementById("about_title").innerText = "கோவில் பற்றி";
        document.getElementById("about_text").innerText =
            "ஸ்ரீ மல்லம்மா தேவி கோவில் ஒரு புனிதமான தலம் ஆகும்.";

        document.getElementById("location_title").innerText = "இருப்பிடம்";
        document.getElementById("location_text").innerText =
            "ஹோசூர் அருகில் அமைந்துள்ளது.";

        document.getElementById("map_btn").innerText = "Google Map பார்க்க";

        document.getElementById("gallery_title").innerText = "புகைப்படங்கள்";
        document.getElementById("temple_img").innerText = "கோவில் படம்";
        document.getElementById("construction_img").innerText = "கட்டுமானம்";
        document.getElementById("god_img").innerText = "அம்மன் படம்";

        document.getElementById("donation_title").innerText = "தானம்";
        document.getElementById("donation_text").innerText =
            "கோவில் பராமரிப்பிற்கு உங்கள் உதவி தேவை.";

        document.getElementById("donate_btn").innerText = "தானம் செய்ய";
        document.getElementById("announcement-text").innerText =
            "🔔 திருவிழா அறிவிப்பு: மார்ச் 30 அன்று சிறப்பு பூஜை";

        document.getElementById("footer_text").innerText =
            "© 2026 ஸ்ரீ மல்லம்மா தேவி கோவில்";
    }
}
// Image list
let images = [
    "images/temple.jpg"
];

let index = 0;

// Show next image
function nextSlide() {
    index = (index + 1) % images.length;
    document.getElementById("slider-image").src = images[index];
}

// Show previous image
function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slider-image").src = images[index];
}
