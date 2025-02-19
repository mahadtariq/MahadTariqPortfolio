document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".project-item").forEach((item) => {
        let images = item.querySelectorAll(".project-image");
        let index = 0;

        item.addEventListener("mouseenter", function () {
            let imgContainer = this.querySelector(".project-image-container");
            imgContainer.style.display = "block";

            let interval = setInterval(() => {
                images.forEach((img) => img.classList.remove("active"));
                images[index].classList.add("active");
                index = (index + 1) % images.length;
            }, 1000);

            item.dataset.interval = interval;
        });

        item.addEventListener("mouseleave", function () {
            let imgContainer = this.querySelector(".project-image-container");
            imgContainer.style.display = "none";
            clearInterval(item.dataset.interval);
        });
    });
});

