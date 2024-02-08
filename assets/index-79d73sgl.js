(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();function d(n){n.innerHTML+=`<nav id="navbar">
  <a id="logo_container" href="#home_container">
    <img src="/assets/logo_no_bg.png" id="logo" alt="Logo" />
    <p id="logo_title">Colegio </br> Jesús de </br> Nazareth</p>
  </a>
  <div id="menu">
    <a class="nav_link" href="#history_container">Historia</a>
    <a class="nav_link" href="#mision_container">Misión y Visión</a>
    <a class="nav_link" href="#news_container">Noticias</a>
    <div id="btn_close_menu"></div>
  </div>
  <div id="btn_menu"></div>
</nav>`}document.querySelector("#app").innerHTML=`
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
      <img src="/assets/home_pic_1.jpg" class="home_pic" alt="Home Image" />
      <img src="/assets/home_pic_2.jpg" class="home_pic" alt="Home Image" />
    </div>
  </div>
  <div id="history_container" class="commom_container">
    <div id="history_column" class="wrapper">
      <h1 class="title">Historia</h1>
      <p>Nuestra querida institución Colegio Jesús de Nazareth nació en el año 2000 (por resolución 481 del 6 de Octubre de 2000) y desde entonces ha mantenido sus puertas abiertas a la enseñanza de niños, niñas y adolescentes del Barrio Cantilito y los barrios adyacentes, en esta; nuestra hermosa ciudad de Santa Marta. Desde sus inicios el Colegio Jesús de Nazareth y su plantel de docentes normalistas y técnicos han promovido calidad en la enseñanza de nuestros estudiantes, transformando nuestra comunidad educativa en un modelo de excelencia. Desde hace más de 20 años hemos educado a cientos de niñas y niños de nuestra comunidad, por ello nuestra institución es ahora parte importante de la historia de esta zona de la ciudad de Santa Marta, representando siempre el amor, enseñanzas y dedicación, elementos de tremenda valía en la vida de todos quienes pisan nuestras aulas desde su fundación. En la actualidad nuestra institución cuenta con 78 alumnos en el nivel preescolar y 132 en el nivel primario, todos parte de la familia Nazarena.
      </br>
      </br>
      <span class="italic">Rectora: Dra. Silvia Sierra Calvo</span></p>
    </div>
  </div>
  <div id="mision_container" class="commom_container">
    <div class="mision_column wrapper">
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
    <div class="news_card">
      <h1 class="news_title">En Construcción</h1>
    </div>
  </div>
`;d(document.querySelector("#app"));const i=document.querySelector("#menu"),l=document.querySelector("#btn_close_menu"),o=document.querySelectorAll(".nav_link"),u=document.querySelector("#btn_menu");u.addEventListener("click",()=>{i.style.display="grid",i.style.transform="translateY(0)",i.style.borderRadius="0 0 200px 200px",setTimeout(()=>{i.style.borderRadius="0 0 50px 50px"},300)});l.addEventListener("click",()=>{i.style.borderRadius="0 0 200px 200px",setTimeout(()=>{i.style.transform="translateY(-100%)"},400)});function m(n,s,t){setTimeout(()=>{n.style.transform="translateY(0)"},100),setTimeout(()=>{s.style.transform="translateY(0)"},150),setTimeout(()=>{t.style.transform="translateY(0)"},200)}m(o[0],o[1],o[2]);o.forEach(n=>{n.addEventListener("click",()=>{i.style.borderRadius="0 0 200px 200px",setTimeout(()=>{i.style.transform="translateY(-100%)"},400)})});
