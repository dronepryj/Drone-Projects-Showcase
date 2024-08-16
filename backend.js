function showProject(project) {
    // Hide all project galleries
    var projects = document.querySelectorAll('.project');
    projects.forEach(function (proj) {
        proj.style.display = 'none';
    });

    // Show selected project gallery
    document.getElementById(project).style.display = 'flex';
    document.getElementById(project + '-models').style.display = 'flex';
}

function openLightbox(img) {
    // Get the lightbox and the image elements
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');

    // Set the lightbox image to the clicked image
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex'; // Show the lightbox
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}
