// backend.js

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = element.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function showProject(projectId) {
    document.querySelectorAll('.project').forEach(project => {
        project.style.display = 'none';
    });
    document.getElementById(projectId).style.display = 'block';
}
