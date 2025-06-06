let juegosCargados = [];
let metascoreMin = 0;
let userScoreMin = 0;

document.addEventListener("DOMContentLoaded", async () => {
  const dao = new VideojuegoDAO("data/videojuegos.json");
  juegosCargados = await dao.obtenerRanking();
  mostrarLista(juegosCargados);
});

function mostrarLista(lista) {
  const contenedor = document.getElementById("ranking-list");
  contenedor.innerHTML = "";

  lista.forEach((juego, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <img src="${juego.imagen}" alt="${juego.titulo}">
      <div style="text-align:left;">
        <strong>#${index + 1}</strong> ${juego.titulo}<br>
        Ventas: ${juego.ventas}M<br>
        Metascore: ${juego.metascore} | User Score: ${juego.user_score}
      </div>
    `;
    contenedor.appendChild(item);
  });
}

function filtrarPorNombre() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const juegosFiltrados = videojuegos.filter(juego =>
    juego.nombre.toLowerCase().includes(texto)
  );
  renderizarRanking(juegosFiltrados);
}

function filtrarPorMetascore(valor) {
  metascoreMin = valor;
  aplicarFiltros();
}

function filtrarPorUserScore(valor) {
  userScoreMin = valor;
  aplicarFiltros();
}

function aplicarFiltros() {
  const filtrados = juegosCargados.filter(j =>
    j.metascore >= metascoreMin && j.user_score >= userScoreMin
  );
  mostrarLista(filtrados);
}