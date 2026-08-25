document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(drop => {
        const btn = drop.querySelector(".dropbtn");
        const content = drop.querySelector(".dropdown-content");

        btn.addEventListener("click", () => {
            const isOpen = content.style.display === "block";
            document.querySelectorAll(".dropdown-content").forEach(dc => dc.style.display = "none");
            content.style.display = isOpen ? "none" : "block";
        });
    });
});
