

// function to animate the burger button


// function myFunction(x) {
//   x.classList.toggle("change");
// }



const hamburger = document.querySelector(".hamburger-btn");

const navMenu = document.querySelector(".collapse");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("show");
  })
);