function setLanguage(lang){

if(lang === "en"){

document.title = "Sri Mallamma Devi Temple - Denkanikottai";

document.getElementById("title").innerText =
"Sri Mallamma Devi Temple - Denkanikottai";

document.getElementById("nav_about").innerText = "About";
document.getElementById("nav_location").innerText = "Location";
document.getElementById("nav_gallery").innerText = "Gallery";

document.getElementById("about_title").innerText = "About Temple";
document.getElementById("about_text").innerText =
    "   Sri Mallamma Devi Temple - Denkanikottai is a sacred place of worship. Devotees believe that Goddess Mallamma blesses them with peace, prosperity, and well-being. Regular poojas and festivals strengthen faith and devotion among devotees. The temple construction is currently in progress. With the support and donations of devotees, the temple will be completed soon. Everyone is kindly requested to participate and support this sacred work.";

document.getElementById("location_title").innerText = "Location";
document.getElementById("location_text").innerText =
"Pattalama Main Road, Near Telugu School, Denkanikottai, Krishnagiri District, Tamil Nadu.";

document.getElementById("map_btn").innerText = "View Map";

document.getElementById("gallery_title").innerText = "Gallery";

document.getElementById("footer_text").innerText =
"© 2026 Sri Mallamma Devi Temple - Denkanikottai";

document.getElementById("announcement-text").innerText =
"🔔  Announcement:May Goddess Mallamma Devi be your support! ";
}

else{

document.title = "ஸ்ரீ மல்லம்மா தேவி கோவில் - தென்கனிக்கோட்டை";

document.getElementById("title").innerText =
"ஸ்ரீ மல்லம்மா தேவி கோவில் - தென்கனிக்கோட்டை";

document.getElementById("nav_about").innerText = "கோவில் பற்றி";
document.getElementById("nav_location").innerText = "இருப்பிடம்";
document.getElementById("nav_gallery").innerText = "புகைப்படங்கள்";

document.getElementById("about_title").innerText = "கோவில் பற்றி";
document.getElementById("about_text").innerText =
    "    ஸ்ரீ மல்லம்மா தேவி கோவில் - தென்கனிக்கோட்டை பகுதியில் அமைந்துள்ள ஒரு புனிதமான தெய்வ ஸ்தலம் ஆகும். அம்மன் அருளால் பக்தர்களின் வாழ்வில் அமைதி, வளம் மற்றும் நலன் கிடைக்கிறது. இங்கு நடைபெறும் பூஜைகள் மற்றும் திருவிழாக்கள் பக்தர்களின் நம்பிக்கையை மேலும் உயர்த்துகின்றன. மேலும், கோவிலின் கட்டுமான பணிகள் தற்போது நடைபெற்று வருகின்றன. பக்தர்களின் ஆதரவு மற்றும் தானங்களின் மூலம் கோவில் விரைவில் முழுமையாக கட்டப்படும். அனைவரும் இந்த புனித பணியில் கலந்து கொண்டு ஆதரவு வழங்குமாறு அன்புடன் கேட்டுக்கொள்கிறோம்.";


document.getElementById("location_title").innerText = "இருப்பிடம்";
document.getElementById("location_text").innerText = "பட்டாளம்மன் மேன் ரோடு, தெலுங்கு பள்ளி அருகில்,\nதென்கனிக்கோட்டை, கிருஷ்ணகிரி மாவட்டம், தமிழ்நாடு";
document.getElementById("map_btn").innerText = "Map பார்க்க";

document.getElementById("gallery_title").innerText = "புகைப்படங்கள்";

document.getElementById("footer_text").innerText =
"© 2026 ஸ்ரீ மல்லம்மா தேவி கோவில் - தென்கனிக்கோட்டை";

document.getElementById("announcement-text").innerText =
"🔔  அறிவிப்பு:ஸ்ரீ மல்லம்மா தேவி துணை! 🙏✨ ";
}
}
function showMap() {
    var map = document.getElementById('map');
    if (map.style.display === 'none') {
        map.style.display = 'block';
    } else {
        map.style.display = 'none';
    }
}