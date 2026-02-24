import { iconHamburger, iconClose } from "/javascript/icons.js";

export function navbar(a) {
  a.innerHTML += `<nav id="navbar">
  <a id="logo_container" href="#home_container">
    <picture>
      <source srcset="./logo_no_bg.webp" type="image/webp" />
      <img src="./logo_no_bg.png" id="logo" class="loader_pic" alt="Escudo del Colegio Jesús de Nazareth" />
    </picture>
    <p id="logo_title">Colegio<br>Jesús de<br>Nazareth</p>
  </a>
  <section id="menu">
    <a class="nav_link" href="#history_container">Historia</a>
    <a class="nav_link" href="#mision_container">Misión y Visión</a>
    <a class="nav_link" href="#vida_container">Vida Escolar</a>
    <a class="nav_link" href="#footer">Contacto</a>
    <div id="btn_close_menu" role="button" tabindex="0" aria-label="Cerrar menú">
      ${iconClose}
    </div>
    <picture>
      <source srcset="./rainbow.webp" type="image/webp" />
      <img src="./rainbow.png" id="rainbow" alt="" loading="lazy" />
    </picture>
  </section>
  <div id="btn_menu" role="button" tabindex="0" aria-label="Abrir menú" aria-expanded="false">
    ${iconHamburger}
  </div>
</nav>`;
}
