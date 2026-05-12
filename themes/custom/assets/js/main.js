function overlayOn(src) {
    document.getElementById("overlay-img").src = src;
    document.getElementById("overlay").classList.add("active");
}

function overlayOff() {
    document.getElementById("overlay").classList.remove("active");
} 

document.addEventListener('DOMContentLoaded', () => {
    // Select all gallery containers
    const containers = document.querySelectorAll('.gallery-container');

    containers.forEach(container => {
        // Listen for clicks in container
        container.addEventListener('click', (event) => {
            // Check if user clicked on image
            if (event.target.tagName === 'IMG') {
                const src = event.target.src;
                overlayOn(src);
            }
        });
    });
    document.getElementById("overlay").addEventListener('click', overlayOff);
});