document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .querySelector("#jumbotron img")
  .addEventListener("mouseenter", function () {
    this.src = this.src;
  });
