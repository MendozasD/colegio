export function navbar(a) {
  a.innerHTML += `<nav id="navbar">
  <a id="logo_container" href="#home_container">
    <img src="./assets/logo_no_bg.png" id="logo" alt="Logo" />
    <p id="logo_title">Colegio </br> Jesús de </br> Nazareth</p>
  </a>
  <section id="menu">
    <a class="nav_link" href="#history_container">Historia</a>
    <a class="nav_link" href="#mision_container">Misión y Visión</a>
    <a class="nav_link" href="#news_container">Noticias</a>
    <div id="btn_close_menu">
      <span class="material-symbols-outlined">
        close_small
      </span>
    </div>
    <img src="./assets/rainbow.png" id="rainbow" alt="rainbow" />
  </section>
  <div id="btn_menu">
    <span class="material-symbols-outlined">menu</span>
  </div>
</nav>`;
}
