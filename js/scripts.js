/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

//Navbar movement when scrolling + Hamburger menu
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



//Stop scrolling when pop-up is open
  document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.querySelector('.overlay');
    var body = document.body;

    // Function to handle the state change of the popup
    function handlePopupState() {
      if (window.location.hash === '#popup1') {
        body.style.overflow = 'hidden'; // Disable scrolling
      } else {
        body.style.overflow = ''; // Enable scrolling
      }
    }

    // Add event listener for hash change
    window.addEventListener('hashchange', handlePopupState);

    // Initial check when the page loads
    handlePopupState();
  });



/*
// Loading screen
document.addEventListener("DOMContentLoaded", function () {

    // Set the duration for the loading screen to be visible in milliseconds
    const duration = 1000; // 1 second

    // Check if the loading screen is present on the current page
    const loadingScreen = document.getElementById("loading-screen");

    // If the loading screen is found, proceed with the loading logic
    if (loadingScreen) {
        // Hide the header initially
        const header = document.getElementById("mainNav");
        if (header) {
            header.style.display = "none";
        }

        // Ensure the loading screen is hidden initially
        loadingScreen.style.display = "none";

        // Function to show the loading screen
        function showLoadingScreen() {
            loadingScreen.style.display = "flex"; // Use flex to center the waves
            loadingScreen.classList.add("fade-in"); // Apply fade-in animation
            document.body.style.overflow = "hidden"; // Prevent scrolling during loading
            window.scrollTo(0,0);

            // Set a timeout to hide the loading screen and show the header after the specified duration
            setTimeout(function () {
                // Hide the loading screen with fade-out effect
                loadingScreen.classList.remove("fade-in");
                loadingScreen.classList.add("fade-out");

                // Show the header again
                if (header) {
                    header.style.display = "block";
                }

                // Allow scrolling again
                document.body.style.overflow = "auto";

                // Additional fix: set display: none; after fade-out animation completes
                setTimeout(function () {
                    loadingScreen.style.display = "none";
                }, 500); // Adjust the timeout to match the fade-out duration
            }, duration);
        }

        // Show the loading screen when the page is loaded
        showLoadingScreen();

        // Event listener to detect navigation events (e.g., going back)
        window.addEventListener("popstate", function () {
            // Reset the loading screen when navigating back
            loadingScreen.classList.remove("fade-in", "fade-out");
            loadingScreen.style.display = "none";

            // Show the header again
            if (header) {
                header.style.display = "block";
            }

            // Allow scrolling again
            document.body.style.overflow = "auto";

            // Show the loading screen again after a short delay
            setTimeout(showLoadingScreen, 100);
        });
    }
});
*/