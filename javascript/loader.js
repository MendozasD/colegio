export function loader() {
  const photos = document.querySelectorAll(".loader_pic");
  const loaderEl = document.querySelector("#loader");
  let counter = 0;
  const total = photos.length;

  if (total === 0) {
    loaderEl.classList.add("hidden");
    return;
  }

  photos.forEach((photo) => {
    if (photo.complete) {
      counter++;
    } else {
      photo.addEventListener("load", onLoad);
      photo.addEventListener("error", onLoad);
    }
  });

  if (counter >= total) dismiss();

  function onLoad() {
    counter++;
    if (counter >= total) dismiss();
  }

  function dismiss() {
    loaderEl.classList.add("hidden");
    setTimeout(() => loaderEl.remove(), 600);
  }
}
