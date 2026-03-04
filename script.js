document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bg-music");

    // Start music on first click
    document.addEventListener("click", () => {
        music.play();
    }, { once: true });


    const letters = document.querySelectorAll(".letter");
    const overlay = document.querySelector(".overlay");
    const letterText = document.querySelector(".letter-text");
    const closeBtn = document.querySelector(".close-btn");
    const heartsContainer = document.querySelector(".hearts-container");

    let heartsInterval;

    // 💕 Create random heart
    function createHeart() {

        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Random horizontal position
        heart.style.left = Math.random() * 100 + "vw";

        // Random size (40px – 90px)
        const size = 40 + Math.random() * 50;
        heart.style.width = size + "px";
        heart.style.height = size + "px";

        // Random animation duration (5s – 9s)
        heart.style.animationDuration = (5 + Math.random() * 4) + "s";

        heartsContainer.appendChild(heart);

        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 9000);
    }

    function startHearts() {
        heartsInterval = setInterval(createHeart, 400);
    }

    function stopHearts() {
        clearInterval(heartsInterval);
    }

    // Start hearts when page loads
    startHearts();


    letters.forEach(letter => {
        letter.addEventListener("click", () => {
            const content = letter.getAttribute("data-content");
            letterText.textContent = content;

            overlay.classList.remove("hidden");
            stopHearts(); // Stop hearts when letter opens
        });
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
        startHearts(); // Resume hearts
    });

});