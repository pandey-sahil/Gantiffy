     // JavaScript to detect device
        window.onload = function() {
            if (window.innerWidth <= 768) {  // Mobile devices
                window.location.href = "responsive.html";
            } else {  // Desktop devices
                window.location.href = "index.html";
            }
        }
