document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector(".main__container");
    const logoContainer = document.querySelector(".logo__container");
    window.addEventListener("wheel", (event) => {
        const deltaY = event.deltaY;

        if (deltaY > 0) {
            mainContainer.classList.add("active");
            logoContainer.classList.add("active");
        } else {
            mainContainer.classList.remove("active");
            logoContainer.classList.remove("active");
        }
    });
});
