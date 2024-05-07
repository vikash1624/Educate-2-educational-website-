// =================================================================SECTION-9- Testimonial==========================================


function first() {
  document
    .getElementById("id-first-btn")
    .setAttribute("class", "btn btn-warning");
  document
    .getElementById("id-second-btn")
    .setAttribute("class", "btn  btn-outline-warning ");

  document
    .getElementById("id-third-btn")
    .setAttribute("class", "btn  btn-outline-warning");

  // TEXT
  document.getElementById("div_1").style.display = "block";
  document.getElementById("div_2").style.display = "none";
  document.getElementById("div_3").style.display = "none";
}

function second() {
  document
    .getElementById("id-first-btn")
    .setAttribute("class", "btn btn-outline-warning");
  document
    .getElementById("id-second-btn")
    .setAttribute("class", "btn btn-warning");

  document
    .getElementById("id-third-btn")
    .setAttribute("class", "btn btn-outline-warning");

  // TEXT
  document.getElementById("div_1").style.display = "none";
  document.getElementById("div_2").style.display = "block";
  document.getElementById("div_3").style.display = "none";
}

function third() {
  document
    .getElementById("id-first-btn")
    .setAttribute("class", "btn btn-outline-warning");
  document
    .getElementById("id-second-btn")
    .setAttribute("class", "btn btn-outline-warning");

  document
    .getElementById("id-third-btn")
    .setAttribute("class", "btn btn-warning");

  // TEXT
  document.getElementById("div_1").style.display = "none";
  document.getElementById("div_2").style.display = "none";
  document.getElementById("div_3").style.display = "block";
}