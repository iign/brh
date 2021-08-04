/*******************************************************************************
 ********************************** bluray hunt ********************************
 *******************************************************************************/

// import Alpine from "alpinejs";
// window.Alpine = Alpine;
// Alpine.start();

window.onload = function () {
  console.log("Welcome to BLURAYHUNT");

  const btnMenu = document.getElementById("btn-menu");

  btnMenu.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
};
