import { navbar } from "/javascript/navbar.js";
import { loader } from "/javascript/loader.js";
import { iconMission, iconVision, iconAcademic, iconArt, iconCommunity, wavyHero, wavySection, iconArrowDown } from "/javascript/icons.js";
import "/scss/style.scss";
import "/scss/navbar.scss";
import "/scss/background.scss";
import "/scss/home.scss";
import "/scss/history.scss";
import "/scss/loader.scss";

document.querySelector("#app").innerHTML = `
  <div id="background">
    <div class="circle" id="circle_top"></div>
    <div class="circle" id="circle_bottom"></div>
  </div>

  <!-- Hero -->
  <section id="home_container">
    <div id="home_title">
      <p id="welcome">Bienvenidos al</p>
      <p id="title">Colegio Jesús<br>de Nazareth</p>
      ${wavyHero}
      <a href="#history_container" class="hero-cta">Conócenos ${iconArrowDown}</a>
    </div>
    <div id="home_img">
      <picture>
        <source srcset="./home_pic_1.webp" type="image/webp" />
        <img src="./home_pic_1.jpg" class="home_pic loader_pic" alt="Estudiantes del Colegio Jesús de Nazareth" />
      </picture>
      <picture>
        <source srcset="./home_pic_2.webp" type="image/webp" />
        <img src="./home_pic_2.jpg" class="home_pic loader_pic" alt="Actividades escolares" />
      </picture>
    </div>
    <div class="scroll-indicator" aria-hidden="true">
      <div class="scroll-line"></div>
    </div>
  </section>

  <hr class="section-divider">

  <!-- Historia -->
  <section id="history_container">
    <div class="history-header reveal">
      <h1 class="title">Nuestra Historia${wavySection}</h1>
    </div>
    <div class="history-content">
      <div class="history-block wrapper reveal">
        <h3>Nuestros Orígenes</h3>
        <p>Nuestra querida institución Colegio Jesús de Nazareth nació en el año 2000, por resolución 481 del 6 de Octubre de 2000. Desde entonces ha mantenido sus puertas abiertas a la enseñanza de niños, niñas y adolescentes del Barrio Cantilito y los barrios adyacentes, en nuestra hermosa ciudad de Santa Marta.</p>
      </div>
      <div class="history-block wrapper reveal">
        <h3>Compromiso con la Excelencia</h3>
        <p>Desde sus inicios, nuestro plantel de docentes normalistas y técnicos ha promovido calidad en la enseñanza, transformando nuestra comunidad educativa en un modelo de excelencia. Hace más de 20 años educamos a cientos de niñas y niños de nuestra comunidad.</p>
      </div>
      <div class="history-block wrapper reveal">
        <h3>Parte de la Comunidad</h3>
        <p>Nuestra institución es parte importante de la historia de esta zona de Santa Marta, representando siempre el amor, enseñanzas y dedicación — elementos de tremenda valía en la vida de todos quienes pisan nuestras aulas desde su fundación.</p>
      </div>
      <p class="history-rector reveal">Rectora: Dra. Silvia Sierra Calvo</p>
    </div>
  </section>

  <!-- Timeline -->
  <section id="timeline">
    <div class="timeline-track">
      <div class="timeline-item reveal">
        <span class="timeline-year">2000</span>
        <span class="timeline-text">Fundación del Colegio Jesús de Nazareth por resolución 481</span>
      </div>
      <div class="timeline-item reveal">
        <span class="timeline-year">2005</span>
        <span class="timeline-text">Consolidación del programa preescolar y primaria básica</span>
      </div>
      <div class="timeline-item reveal">
        <span class="timeline-year">2012</span>
        <span class="timeline-text">Reconocimiento como modelo educativo comunitario en la zona</span>
      </div>
      <div class="timeline-item reveal">
        <span class="timeline-year">2020</span>
        <span class="timeline-text">20 años educando a la comunidad de Cantilito y barrios adyacentes</span>
      </div>
      <div class="timeline-item reveal">
        <span class="timeline-year">Hoy</span>
        <span class="timeline-text">210 estudiantes: 78 en preescolar y 132 en primaria</span>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section id="stats_container">
    <div class="stats-grid">
      <div class="stat reveal">
        <div class="stat-number" data-value="210" data-suffix="">0</div>
        <div class="stat-label">Estudiantes</div>
      </div>
      <div class="stat reveal">
        <div class="stat-number" data-value="24" data-suffix="+">0</div>
        <div class="stat-label">Años de Servicio</div>
      </div>
      <div class="stat reveal">
        <div class="stat-number" data-value="100" data-suffix="%">0</div>
        <div class="stat-label">Dedicación</div>
      </div>
    </div>
  </section>

  <hr class="section-divider" style="margin-top: 0;">

  <!-- Misión y Visión -->
  <section id="mision_container">
    <div class="mision-header reveal">
      <h1 class="title">Misión y Visión${wavySection}</h1>
    </div>
    <div class="mision_column wrapper reveal">
      ${iconMission}
      <h2>Misión</h2>
      <p>Plantea como Misión Educativa, hacer una institución que brinde un servicio educativo de calidad, proyectado a una educación basada en valores, impulsando un aprendizaje holístico; propiciando un clima de armonía y democracia, con un equilibrio en el desarrollo de la inteligencia emocional y una comunicación de empatía.</p>
    </div>
    <div class="mision_column wrapper reveal">
      ${iconVision}
      <h2>Visión</h2>
      <p>La Institución Educativa Colegio Jesús de Nazareth busca mejorar la calidad educativa con un enfoque humanista, cognitivo y valorativo. Promovemos la educación democrática, para el trabajo y basada en valores. Formamos alumnos creativos, críticos, emprendedores e innovadores, con equilibrio emocional, espíritu solidario, justicia, paz y autoestima elevada. Nos comprometemos con el cambio social a través de la excelencia educativa.</p>
    </div>
  </section>

  <hr class="section-divider">

  <!-- Vida Escolar (replaces EN CONSTRUCCION) -->
  <section id="vida_container">
    <div class="vida-header reveal">
      <h1 class="title">Vida Escolar${wavySection}</h1>
      <p class="vida-subtitle">Formamos ciudadanos íntegros a través de experiencias que van más allá del aula.</p>
    </div>
    <div class="vida-grid">
      <div class="vida-card reveal">
        ${iconAcademic}
        <h3>Excelencia Académica</h3>
        <p>Programa educativo integral con enfoque en valores, pensamiento crítico y creatividad desde preescolar hasta primaria.</p>
      </div>
      <div class="vida-card reveal">
        ${iconArt}
        <h3>Arte y Cultura</h3>
        <p>Actividades artísticas y culturales que desarrollan la sensibilidad, expresión y el talento de nuestros estudiantes.</p>
      </div>
      <div class="vida-card reveal">
        ${iconCommunity}
        <h3>Comunidad</h3>
        <p>Más de 20 años siendo parte fundamental del Barrio Cantilito, formando lazos de solidaridad y compromiso social.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer id="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <h3>Colegio Jesús de Nazareth</h3>
        <p>Educando con amor, dedicación y excelencia desde el año 2000 en Santa Marta, Magdalena.</p>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <p>Manzana D Casa # 25</p>
        <p>Barrio Cantilito</p>
        <p>Santa Marta, Magdalena</p>
        <p>Colombia</p>
      </div>
      <div class="footer-col">
        <h4>Navegación</h4>
        <a href="#home_container">Inicio</a>
        <a href="#history_container">Historia</a>
        <a href="#mision_container">Misión y Visión</a>
        <a href="#vida_container">Vida Escolar</a>
      </div>
      <div class="footer-bottom">
        &copy; ${new Date().getFullYear()} Colegio Jesús de Nazareth. Todos los derechos reservados.
      </div>
    </div>
  </footer>
`;

// ── Navbar ──
navbar(document.querySelector("#app"));

const menu = document.querySelector("#menu");
const btnClose = document.querySelector("#btn_close_menu");
const btnMenu = document.querySelector("#btn_menu");

function openMenu() {
  menu.classList.add("menu-open");
  btnMenu.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  menu.classList.remove("menu-open");
  btnMenu.setAttribute("aria-expanded", "false");
}

btnMenu.addEventListener("click", openMenu);
btnMenu.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openMenu();
  }
});

btnClose.addEventListener("click", closeMenu);
btnClose.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    closeMenu();
  }
});

document.querySelectorAll(".nav_link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// ── Scroll Reveal ──
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});

// ── Stat Counter Animation ──
const statsContainer = document.querySelector("#stats_container");
let statsCounted = false;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateCounters() {
  if (statsCounted) return;
  statsCounted = true;

  document.querySelectorAll(".stat-number[data-value]").forEach((el) => {
    const target = parseInt(el.dataset.value, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(easeOutCubic(progress) * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  });
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

if (statsContainer) {
  statsObserver.observe(statsContainer);
}

// ── Loader ──
loader();
