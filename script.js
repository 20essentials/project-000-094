const $modal = document.querySelector('dialog');
let $input = document.querySelector('input');

document.addEventListener('click', e => {
  if (e.target === $input) {
    $modal.showModal();
    return;
  }
  if (e.target.matches('.close') || e.target.matches('dialog')) {
    $modal.close();
    $input.checked = false;
    return;
  }
});
