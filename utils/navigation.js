const practices = {
  pratica_01: "Prática 01 - Configuração de Ambiente",
  pratica_02: "Prática 02 - Iluminação e Sombra",
  pratica_03: "Prática 03 - Múltiplos Objetos e Texturas",
};

function createDropdownMenu() {
  const dropdown = document.createElement("div");
  dropdown.id = "dropdown";
  dropdown.innerHTML = `
        <button>Práticas</button>
        <div id="dropdown-content">
            ${Object.keys(practices)
              .map(
                (practice) =>
                  `<a href="../${practice}/index.html">${practices[practice]}</a>`
              )
              .join("")}
        </div>
    `;
  document.body.appendChild(dropdown);

  const info = document.getElementById("info");
  const currentPath = window.location.pathname.split("/").slice(-2, -1)[0];
  if (practices[currentPath]) {
    info.innerText = practices[currentPath];
  }
}

document.addEventListener("DOMContentLoaded", createDropdownMenu);
