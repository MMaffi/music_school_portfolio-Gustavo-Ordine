// Enlarge image
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");

    // Opens when clicking on the image or overlay
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", () => {
        const img = item.querySelector("img");
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        });
    });

    // Close by X
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Close by clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
        lightbox.style.display = "none";
        }
    });
});