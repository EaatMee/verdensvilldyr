window.onload = oppstart;

  function oppstart() {
    document.getElementById("banner").onclick = banner;
  }

  function banner() {
    openNav()
  }

  function openNav() {
      document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
      document.getElementById("myNav").style.height = "0%";
  }
