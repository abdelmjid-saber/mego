// header
let topHeader = document.getElementById("header");
onscroll = function header() {
  if (scrollY >= 130) {
    topHeader.style.position = "fixed";
    topHeader.style.backgroundColor = "#ffffff";
    topHeader.style.boxShadow = "0 0 11px 0 #00000036";
  } else {
    topHeader.style.position = "relative";
    topHeader.style.backgroundColor = "#ececec";
    topHeader.style.boxShadow = "none";
  }
};

// Mega Menu
let ontherlink = document.getElementById("onther-links");
let megaMenu = document.getElementById("mega-menu");
ontherLinks.onclick = function megaMenuT() {
  megaMenu.classList.toggle('mega-menu-active')
};



