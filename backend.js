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
    document.querySelectorAll('.model-container').forEach(container => {
        const models = container.querySelector('iframe');
        const noModelsMessage = container.querySelector('.no-models');
        if (models) {
            container.style.display = 'block';
            noModelsMessage.style.display = 'none';
        } else {
            container.style.display = 'block';
            noModelsMessage.style.display = 'block';
        }
    });
    document.getElementById(projectId).style.display = 'block';
}
