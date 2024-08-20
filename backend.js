// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function () {
    // Authentication Check
    function checkAuthentication() {
        if (!sessionStorage.getItem('loggedIn')) {
            if (window.location.pathname !== '/login.html') {
                window.location.href = 'login.html';
            }
        }
    }

    // Call this function on every page that requires authentication
    checkAuthentication();

    // Function to handle the lightbox display
    window.openLightbox = function(element) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = element.src;
        lightbox.style.display = 'flex';
    };

    // Function to close the lightbox
    window.closeLightbox = function() {
        document.getElementById('lightbox').style.display = 'none';
    };

    // Function to show a specific project
    window.showProject = function(projectId) {
        console.log('showProject called with:', projectId); // Debugging statement

        // Hide all galleries and model containers
        document.querySelectorAll('.gallery').forEach(gallery => {
            gallery.style.display = 'none';
        });
        document.querySelectorAll('.model-container').forEach(container => {
            container.style.display = 'none';
        });

        // Display the selected gallery
        const selectedGallery = document.getElementById(projectId);
        if (selectedGallery) {
            selectedGallery.style.display = 'block';
        }

        // Display the corresponding model container
        const modelContainerId = projectId + '-models';
        const modelContainer = document.getElementById(modelContainerId);
        if (modelContainer) {
            modelContainer.style.display = 'block';
            const hasModels = modelContainer.querySelector('iframe');
            const noModelsMessage = modelContainer.querySelector('.no-models');
            if (hasModels) {
                noModelsMessage.style.display = 'none';
            } else {
                noModelsMessage.style.display = 'block';
            }
        }
    };

    // Initialize with the first project visible
    showProject('project1');

    // Sidebar Menu Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    // Check if elements exist
    if (hamburgerMenu && sidebar && sidebarOverlay) {
        hamburgerMenu.addEventListener('click', function () {
            console.log('Hamburger menu clicked'); // Debugging statement
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
        });

        // Click outside of sidebar to close it
        sidebarOverlay.addEventListener('click', function () {
            console.log('Sidebar overlay clicked'); // Debugging statement
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    } else {
        console.error('Sidebar elements not found');
    }
});
