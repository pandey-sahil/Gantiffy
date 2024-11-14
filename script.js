 // Function to check the screen width and store the device type
 function checkDevice() {
    if (window.innerWidth <= 768) {
        localStorage.setItem('deviceType', 'mobile'); // Store mobile view in localStorage
    } else {
        localStorage.setItem('deviceType', 'desktop'); // Store desktop view in localStorage
    }
}

// Function to check the stored device type and load appropriate page
window.onload = function() {
    let deviceType = localStorage.getItem('deviceType');

    // If deviceType is stored and it's mobile, redirect to responsive.html
    if (deviceType === 'mobile') {
        window.location.href = 'responsive.html';
    } else {
        window.location.href = 'index.html';
    }

    // Check device on page resize to handle when user manually resizes the browser window
    window.onresize = function() {
        checkDevice();
    };
}