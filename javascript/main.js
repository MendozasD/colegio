import { navbar } from "/javascript/navbar.js";
import "/scss/style.scss";
import "/scss/navbar.scss";
import "/scss/background.scss";
import "/scss/home.scss";
import "/scss/history.scss";

document.querySelector("#app").innerHTML = `
  <div id="background">
    <div class="circle" id="circle_top"></div>
    <div class="circle" id="circle_bottom"></div>
  </div>
  </div>
  <div id="home_container">
    <div id="home_title">
      <p id="welcome">Bienvenidos al</p>
      <p id="title">Colegio Jesús </br> de Nazareth</h1>
    </div>
    <div id="home_img">
      <img src="./assets/home_pic_1.jpg" class="home_pic" alt="Home Image" />
      <img src="./assets/home_pic_2.jpg" class="home_pic" alt="Home Image" />
    </div>
  </div>
  <div id="history_container" class="commom_container">
    <div id="history_column" class="wrapper">
      <h1 class="title">Historia</h1>
      <p>Nuestra querida institución Colegio Jesús de Nazareth nació en el año 2000 (por resolución 481 del 6 de Octubre de 2000) y desde entonces ha mantenido sus puertas abiertas a la enseñanza de niños, niñas y adolescentes del Barrio Cantilito y los barrios adyacentes, en esta; nuestra hermosa ciudad de Santa Marta. Desde sus inicios el Colegio Jesús de Nazareth y su plantel de docentes normalistas y técnicos han promovido calidad en la enseñanza de nuestros estudiantes, transformando nuestra comunidad educativa en un modelo de excelencia. Desde hace más de 20 años hemos educado a cientos de niñas y niños de nuestra comunidad, por ello nuestra institución es ahora parte importante de la historia de esta zona de la ciudad de Santa Marta, representando siempre el amor, enseñanzas y dedicación, elementos de tremenda valía en la vida de todos quienes pisan nuestras aulas desde su fundación. En la actualidad nuestra institución cuenta con 78 alumnos en el nivel preescolar y 132 en el nivel primario, todos parte de la familia Nazarena.
      </br>
      </br>
      <span class="italic">Rectora: Dra. Silvia Sierra Calvo</span></p>
      <div id="calendar">
        <div class="year">
          <h1>1990</h1>
          <img class="pencil" src="./assets/pencil.png">
        </div>
        <div class="year">
          <h1>2024</h1>
          <img class="pencil" src="./assets/pencil.png">
        </div>
      </div>
    </div>
  </div>
  <div id="mision_container" class="commom_container">
    <div class="mision_column wrapper">
      <img class="star" src="./assets/star.png" alt="star" />
      <h1 class="title">Misión</h1>
      <p>Plantea como Misión Educativa, hacer una institución que brinde un servicio educativo de calidad, proyectado a una educación basada en valores, impulsando un aprendizaje holístico; propiciando un clima de armonía y democracia, con un equilibrio en el desarrollo de la inteligencia emocional y una comunicación de empatía.</p>
    </div>
    <div class="mision_column wrapper">
      <h1 class="title">Visión</h1>
      <p>La Institución Educativa COLEGIO JESUS DE NAZARETH busca mejorar la calidad educativa con un enfoque humanista, cognitivo y valorativo. Promovemos la educación democrática, para el trabajo y basada en valores cristianos. Buscamos desarrollar actitudes que fortalezcan la identidad personal, comunal, institucional y nacional. Formamos alumnos creativos, críticos, emprendedores e innovadores, con equilibrio emocional, espíritu solidario, justicia, paz y autoestima elevada. Nos comprometemos con el cambio social a través de actividades productivas y la defensa de la ecología, en consonancia con una educación humanista, científica y tecnológica. Buscamos la excelencia educativa.</p>
    </div>
  </div>
  <div id="news_container" class="commom_container">
    <h1 class="title">Noticias</h1>
    <div id="coming_soon">
      <h2>EN CONSTRUCCIÓN</h2>
      <p>
        Aquí encontrará pronto todas las noticas relacionadas con nuestra
        institución.
      </p>
    </div>
  </div>
`;

navbar(document.querySelector("#app"));

const menu = document.querySelector("#menu");
const btnClose = document.querySelector("#btn_close_menu");
const navLinks = document.querySelectorAll(".nav_link");
const btnMenu = document.querySelector("#btn_menu");
const display = getComputedStyle(btnMenu).display;

btnMenu.addEventListener("click", () => {
  menu.style.display = "grid";
  menu.style.transform = "translateY(0)";
  menu.style.borderRadius = "0 0 200px 200px";
  setTimeout(() => {
    menu.style.borderRadius = "0 0 50px 50px";
  }, 300);
});

btnClose.addEventListener("click", () => {
  menu.style.borderRadius = "0 0 200px 200px";
  setTimeout(() => {
    menu.style.transform = "translateY(-100%)";
  }, 400);
});

function showMenu(a, b, c) {
  setTimeout(() => {
    a.style.transform = "translateY(0)";
  }, 100);
  setTimeout(() => {
    b.style.transform = "translateY(0)";
  }, 150);
  setTimeout(() => {
    c.style.transform = "translateY(0)";
  }, 200);
}

showMenu(navLinks[0], navLinks[1], navLinks[2]);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.borderRadius = "0 0 200px 200px";
    setTimeout(() => {
      display === "none"
        ? (menu.style.transform = "translateY(0)")
        : (menu.style.transform = "translateY(-100%)");
    }, 400);
  });
});
