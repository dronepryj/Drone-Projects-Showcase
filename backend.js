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
    // Hide all project galleries and model containers
    document.querySelectorAll('.project').forEach(project => {
        project.style.display = 'none';
    });
    document.querySelectorAll('.model-container').forEach(container => {
        container.style.display = 'none';
    });

    // Show the selected project's photo gallery
    document.getElementById(projectId).style.display = 'block';

    // Show the corresponding 3D model container
    const modelContainerId = projectId + '-models';
    const modelContainer = document.getElementById(modelContainerId);
    if (modelContainer) {
        modelContainer.style.display = 'block';
        // Check if there is an iframe or show the no-models message
        const hasModels = modelContainer.querySelector('iframe');
        const noModelsMessage = modelContainer.querySelector('.no-models');
        if (hasModels) {
            noModelsMessage.style.display = 'none';
        } else {
            noModelsMessage.style.display = 'block';
        }
    }
}
