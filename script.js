document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-btn');
    const iframeWrapper = document.getElementById('iframe-wrapper');
    const iframe = document.getElementById('content-frame');
    const closeBtn = document.getElementById('close-btn');

    // Handle button clicks to load content & expand iframe
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPage = button.getAttribute('data-target');
            
            // Set the source of the iframe to the target page
            iframe.src = targetPage;
            
            // Add the fullscreen class to expand the iframe container
            iframeWrapper.classList.add('fullscreen');
        });
    });

    // Close/Minimize fullscreen view
    closeBtn.addEventListener('click', () => {
        iframeWrapper.classList.remove('fullscreen');
        // Optional: clear the iframe source when closing
        iframe.src = 'about:blank';
    });
});
