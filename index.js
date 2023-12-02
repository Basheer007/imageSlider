let images = document.getElementById("images");
let btns = document.querySelectorAll(".btns");
let imageLists = [
  "portraits-1",
  "portraits-2",
  "portraits-3",
  "portraits-4",
  "portraits-5",
];

let imageIndex = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("btn-left")) {
      imageIndex--;
      if (imageIndex <= 0) {
        imageIndex = imageLists.length - 1;
      }
      images.src = `images/${imageLists[imageIndex]}.jpeg`;
    } else {
      imageIndex++;
      if (imageIndex >= imageLists.length) {
        imageIndex = 0;
      }
      images.src = `images/${imageLists[imageIndex]}.jpeg`;
    }
  });
});
