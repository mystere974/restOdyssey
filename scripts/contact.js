// Alert Submit

document.querySelector(".form-container").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const message =
  `Thank you ${name} for submitting your message, your message will be forwarded to the team of Wild Code School very soon!`;
    alert(message);
  });


  // Check Form


