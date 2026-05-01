document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       1. NAV ACTIVE AUTOMATIQUE
    ========================= */
    const links = document.querySelectorAll(".nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    /* =========================
       2. SLIDER VERTICAL CONTINU
    ========================= */
    const slider = document.querySelector(".vertical-slider");

    if (!slider) return;

    const totalImages = 5;
    const step = 60; // hauteur image (vh)

    // récupérer position sauvegardée
    let index = localStorage.getItem("sliderIndex");

    if (index === null) {
        index = 0;
    } else {
        index = parseInt(index);
    }

    // appliquer position au chargement
    slider.style.transform = `translateY(-${index * step}vh)`;

    // animation automatique
    setInterval(() => {

        index++;

        if (index >= totalImages) {
            index = 0;
        }

        slider.style.transform = `translateY(-${index * step}vh)`;

        // sauvegarde position
        localStorage.setItem("sliderIndex", index);

    }, 4000);

});