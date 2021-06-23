// // Btn submit

// document.querySelector(".form-submit").addEventListener("click", () => {
//   const formSubmit = document.querySelector(".form-submit");
//   formSubmit.classList.add("submit-active");
// })

// document.querySelector(".form-submit").addEventListener("mouseleave", () => {
//   const formSubmit = document.querySelector(".form-submit");
//   formSubmit.classList.remove("submit-active");
// })


// Anim Img contact

document.getElementById('main-title').addEventListener("mouseover", () => {
  const img = document.getElementById('contact-img');
  console.log(img);
  img.classList.add("img-filter-over");
})

document.getElementById('main-title').addEventListener("mouseleave", () => {
  const img = document.getElementById('contact-img');
  console.log(img);
  img.classList.remove("img-filter-over");
})


// Alert Submit

document.querySelector(".form-container").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const message =
`Thank you ${name} for submitting your message, your message will be forwarded to the team of Wild Code School very soon!`;
  alert(message);
});
