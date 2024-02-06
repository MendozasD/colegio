import "/scss/style.scss";
import "/scss/navbar.scss";
import "/scss/background.scss";
import "/scss/home.scss";

document.querySelector("#app").innerHTML = `
  <div id="background">
    <div class="circle" id="circle_top"></div>
    <div class="circle" id="circle_bottom"></div>
  </div>
  <nav id="navbar">
    <div id="logo_container">
      <img src="/assets/logo_no_bg.png" id="logo" alt="Logo" />
      <p id="logo_title">Colegio </br> Jesús de </br> Nazareth</p>
    </div>
    <div id="menu">
      <a class="nav_link" href="/about">Historia</a>
      <a class="nav_link" href="/about">Misión y Visión</a>
      <a class="nav_link" href="/about">Noticias</a>
      <div id="btn_close_menu"></div>
    </div>
    <div id="btn_menu"></div>
  </nav>
  </div>
  <div id="home_container">
    <div id="home_title">
      <p id="welcome">Bienvenidos al</p>
      <p id="title">Colegio Jesús </br> de Nazareth</h1>
    </div>
    <div id="home_img">
      <img src="/assets/home_pic_1.jpg" class="home_pic" alt="Home Image" />
      <img src="/assets/home_pic_2.jpg" class="home_pic" alt="Home Image" />
    </div>
  </div>
`;

const menu = document.querySelector("#menu");
const btnClose = document.querySelector("#btn_close_menu");
const navLinks = document.querySelectorAll(".nav_link");

document.querySelector("#btn_menu").addEventListener("click", () => {
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
