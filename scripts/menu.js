// Drop-down (show/hide) menu
function youSeeMe(menu) {
  let menuVisible = document.querySelector(`#bottom${menu}`)
  
    if (!menuVisible.style.display || menuVisible.style.display == "none") {
      menuVisible.style.display = "block";
    }
    else {
    menuVisible.style.display = "none";
    }
}