const h1 = document.querySelector("div.hello h1");

function handleClick() {
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleClick);
