window.onload = function() {
    // Check if a redirection has already been made to avoid infinite loop
    if (!localStorage.getItem('redirectDone')) {
        // Store the redirect flag in localStorage
        localStorage.setItem('redirectDone', 'true');

        // Check if the screen width is mobile or desktop
        if (window.innerWidth <= 768) {
            window.location.href = "responsive.html";  // Redirect to responsive page if it's mobile
        } else {
            window.location.href = "index.html";  // Redirect to desktop page if it's a desktop
        }
    }
}

// Reset localStorage flag when switching pages (so it redirects next time)
window.onbeforeunload = function() {
    localStorage.removeItem('redirectDone');
}