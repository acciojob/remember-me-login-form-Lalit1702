// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArr = decodedCookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

// Function to apply preferences from cookies
function applyPreferences() {
    const fontSize = getCookie("fontsize");
    const fontColor = getCookie("fontcolor");

    if (fontSize) {
        document.documentElement.style.setProperty('--fontsize', fontSize + "px");
        document.getElementById('fontsize').value = fontSize;
    }
    if (fontColor) {
        document.documentElement.style.setProperty('--fontcolor', fontColor);
        document.getElementById('fontcolor').value = fontColor;
    }
}

// Form submission event handler
document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fontSize = document.getElementById('fontsize').value;
    const fontColor = document.getElementById('fontcolor').value;

    // Save preferences to cookies
    setCookie("fontsize", fontSize, 30);
    setCookie("fontcolor", fontColor, 30);

    // Apply preferences
    applyPreferences();
});

// Apply preferences on page load
applyPreferences();
