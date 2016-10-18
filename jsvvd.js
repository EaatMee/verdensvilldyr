window.onload = oppstart;

  function oppstart() {
    document.getElementById("banner").onclick = banner;
    document.getElementById("omOss").onclick = omOss;
    document.getElementById("forBarn").onclick = forBarn;
    document.getElementById("kontaktOss").onclick = kontaktOss;
    
  }

  function banner() {
    window.location.href = "index.html"
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
