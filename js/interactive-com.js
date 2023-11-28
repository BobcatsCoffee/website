const hero = document.getElementById("hero")
const image = document.getElementById("hero-image")

function rotate(event, element) {
  const x = event.clientX
  const y = event.clientY

  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;

  element.style.setProperty("--rotateX", -1 * offsetY + "deg");
  element.style.setProperty("--rotateY", offsetX + "deg");
}

hero.addEventListener("mousemove", (e) => {
  rotate(e, image)
})


hero.addEventListener("mouseleave", (e) => {
  image.style.setProperty("--rotateX", 0 + "deg");
  image.style.setProperty("--rotateY", 0 + "deg");
})