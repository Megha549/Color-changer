document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("change-button");
    const body = document.body;
    const mainText = document.getElementById("main-text");

    button.addEventListener("click", function() {
        if (body.classList.contains("changed")) {
            body.classList.remove("changed");
            mainText.textContent = "Welcome to My Webpage";
        } else {
            body.classList.add("changed");
            mainText.textContent = "You have clicked the button!";
        }
    });
});
