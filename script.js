console.log(
  "Inspiration: ",
  "Switch model: https://youtu.be/z3TgmTi42ic?si=zcXImZ3iUCFOiK3j"
);

const $modal = document.querySelector("dialog");
let $input = document.querySelector("input");

document.addEventListener("click", (e) => {
  if (e.target === $input) {
    $modal.showModal();
    return;
  }
  if (e.target.matches(".close")) {
    $modal.close();
    $input.checked = false;
    return;
  }
});
