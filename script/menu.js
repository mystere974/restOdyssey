// Drop-down (show/hide) menu
function youSeeMe(menu) {
    let menuVisible = document.querySelector(`#bottom${menu}`)
  
      if (menuVisible.style.display === "block") {
        menuVisible.style.display = "none";
      } else {
        menuVisible.style.display = "block";
      }
    }