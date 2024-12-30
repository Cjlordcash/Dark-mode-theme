const moonIcon = document.getElementById("moonIcon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let data = localStorage.getItem("theme");

if (data == "light") {
  moonIcon.src = "images/moon.png";
  document.body.classList.remove("dark-theme");
} else if (data == "dark") {
  moonIcon.src = "images/sun.png";
  document.body.classList.add("dark-theme");
}

moonIcon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    moonIcon.src = "images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    moonIcon.src = "images/moon.png";
    localStorage.setItem("theme", "light");
  }
};
