export function loader() {
  let photos = document.querySelectorAll(".loader_pic");
  let counter = 0;
  photos.forEach((photo) => {
    photo.addEventListener("load", () => {
      counter++;
      counter === photos.length
        ? setTimeout(() => {
            console.log(counter);
            document.querySelector("#loader").style.display = "none";
          }, 1000)
        : null;
    });
  });
}
