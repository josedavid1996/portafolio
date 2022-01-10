((d) => {
  const $btnButton = d.querySelector(".btn-menu"),
    $menu = d.querySelector(".menu");

  $btnButton.addEventListener("click", (e) => {
    $btnButton.firstElementChild.classList.toggle("none");
    $btnButton.lastElementChild.classList.toggle("none");

    $menu.classList.toggle("is-active");
  });
})(document);
