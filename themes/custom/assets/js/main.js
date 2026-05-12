/*
window.overlayOn = function(src) {
    document.getElementById("overlay-img").src = src;
    document.getElementById("overlay").classList.add("active");
}

window.overlayOff = function() {
    document.getElementById("overlay").classList.remove("active");
} 

*/
document.addEventListener('DOMContentLoaded', () => {
    // Configure lightbox
    lightbox.option({
      'resizeDuration': 100,
      'imageFadeDuration': 250,
      'wrapAround': true
    })

    // Inject SVGs
    const svgsToInject = document.querySelectorAll('img.svg-inject');
    SVGInjector(svgsToInject);
    
      const observer = new MutationObserver(() => {
        normalizeSvgPaths();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    function normalizeSvgPaths() {
        document.querySelectorAll('.nav-link a .svg-inject').forEach(path => {
            const bbox = path.getBBox();
            const scaleX = 20 / bbox.width;
            const scaleY = 20 / bbox.height;
            const scale = Math.min(scaleX, scaleY);

            path.setAttribute('transform', `scale(${scale}) translate(${-bbox.x}, ${-bbox.y})`);
            path.setAttribute('stroke', 'currentColor');
            path.setAttribute('stroke-width', '1');
            path.setAttribute('fill', 'transparent');
        });
    }

    // Select all gallery containers
    /*
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
    */
});