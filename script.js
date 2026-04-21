const tx = document.getElementById("conteudo");

if (tx) {
    tx.setAttribute("style", "height:" + (tx.scrollHeight) + "px;overflow-y:hidden;"); 

    tx.addEventListener("input", OnInput, false);
}

function OnInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
        themeToggle.title = "Modo escuro";
    } else {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
        themeToggle.title = "Modo claro";
    }
});