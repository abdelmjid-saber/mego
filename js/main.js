// let btn = document.getElementById("btnscroll");
// let ontherLinks = document.getElementById("onther-links");


// window.onscroll = function () {
//   if (scrollY >= 675) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };
// btn.onclick = function () {
//   scroll({
//     top: 0,
//     let: 0,
//     behavior: "smooth",
//   });
// };

// header
let topHeader = document.getElementById("header");
onscroll = function  () {
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
// let ontherlink = document.getElementById("onther-links");
// let megaMeny = document.getElementById("mega-menu");
// ontherLinks.onclick = function () {
//   megaMeny.style.opacity = "1";
//   megaMeny.style.top = "100%";
// };



