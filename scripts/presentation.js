const animMainTitle = document.querySelector("h1");

let typeHOne = new Typewriter(animMainTitle, {
    delay: 200,
    cursor: ""
  })
  
  typeHOne
  .typeString("Qui sommes nous")
  .start()