const checkbox = document.getElementById("darkmode-id");
console.log(checkbox);

function darkmode() {
    const element = document.body;
    if (checkbox.checked) {
        element.classList.add("darkmode");
        localStorage.setItem("dark-mode", "true");
    } else {
        element.classList.remove("darkmode");
        localStorage.setItem("dark-mode", "false");
    }
}

addEventListener("DOMContentLoaded", () => {
    const status = localStorage.getItem("dark-mode");
    if (status === "true") {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
    darkmode();
});

if (checkbox) { // Verifica se o checkbox existe
    checkbox.addEventListener("change", darkmode);
}
