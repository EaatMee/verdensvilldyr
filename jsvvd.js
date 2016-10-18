window.onload = oppstart;

  function oppstart() {
    document.getElementById("banner").onclick = banner;
    document.getElementById("omOss").onclick = omOss;
    document.getElementById("forBarn").onclick = forBarn;
    document.getElementById("kontaktOss").onclick = kontaktOss;
    document.getElementById("ForAmur").onclick = amur;
    document.getElementById("ForUtryd").onclick = utryd;
    document.getElementById("ForForest").onclick = natur;
    document.getElementById("ForEnergi").onclick = energi;
    document.getElementById("ForKlima").onclick = klima;
    document.getElementById("ForHav").onclick = hav;
    
  }

  function banner() {
    window.location.href = "index.html"
  }

function amur() {
    window.location.href = "amurleopard.html"
  }

function utryd() {
    window.location.href = "index.html"
  }

function natur() {
    window.location.href = "natur.html"
  }

function energi() {
    window.location.href = "energi.html"
  }

function klima() {
    window.location.href = "klima.html"
  }

function hav() {
    window.location.href = "havogkyst.html"
  }

  function openNav() {
      document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
      document.getElementById("myNav").style.height = "0%";
  }

  function omOss(){
      window.location.href = "omoss.html"
  }

  function forBarn(){
      window.location.href = "forbarn.html"
  }
  function kontaktOss(){
      window.location.href = "kontaktoss.html"
  }
