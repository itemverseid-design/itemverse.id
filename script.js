document.addEventListener("DOMContentLoaded", () => {
    console.log("ITEMVERSE Website Ready!");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});