// ==UserScript==
// @name         Remove Okko.tv Image Overlay
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Удаляет overlay
// @author       ArturKaktus
// @match        https://okko.tv/*
// @grant        none
// @updateURL    https://github.com/ArturKaktus/Okko-logo-remover-tm/raw/refs/heads/main/userscript/logo-remover.user.js
// @downloadURL  https://github.com/ArturKaktus/Okko-logo-remover-tm/raw/refs/heads/main/userscript/logo-remover.user.js
// ==/UserScript==

(function() {
    function removeImageOverlay() {
        const videoContainers = document.querySelectorAll('div[class^="contentVideoElement__"]');

        videoContainers.forEach(container => {
            const overlayImages = container.querySelectorAll('img');
            overlayImages.forEach(img => {
                if (img.style.position === 'absolute') {
                    img.remove();
                }
            });
        });
    }

    const observer = new MutationObserver(function(mutations) {
        removeImageOverlay();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    removeImageOverlay();
})();