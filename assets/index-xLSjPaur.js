(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
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
`;const i=document.querySelector("#menu"),c=document.querySelector("#btn_close_menu"),n=document.querySelectorAll(".nav_link");document.querySelector("#btn_menu").addEventListener("click",()=>{i.style.display="grid",i.style.transform="translateY(0)",i.style.borderRadius="0 0 200px 200px",setTimeout(()=>{i.style.borderRadius="0 0 50px 50px"},300)});c.addEventListener("click",()=>{i.style.borderRadius="0 0 200px 200px",setTimeout(()=>{i.style.transform="translateY(-100%)"},400)});function d(a,o,r){setTimeout(()=>{a.style.transform="translateY(0)"},100),setTimeout(()=>{o.style.transform="translateY(0)"},150),setTimeout(()=>{r.style.transform="translateY(0)"},200)}d(n[0],n[1],n[2]);
