window.onload = function () {
  const img = ["", "", ""];

  const intervalo_img = 3000;
  let actual_position = 0;
  let $img = document.querySelector("#img");
  let intervalo;

  function next_img() {
    if (actual_position >= img.length - 1) {
      actual_position = 0;
    } else {
      actual_position++;
    }
    render_img();
  }
  function last_img() {
    if (actual_position <= 0) {
      actual_position = img.length - 1;
    } else {
      actual_position--;
    }
    render_img();
  }

  function render_img() {
    $img.style.backgroundImage = `url(${img[actual_position]}`;
  }

  function carousel() {
    intervalo = setInterval(next_img, intervalo_img);
  }

  render_img();
  carousel();
};
