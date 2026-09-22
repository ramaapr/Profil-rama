function TampilkanPesan() {
  const pesan = document.getElementById("pesan");

  if (pesan.style.color === "blue") {
    pesan.textContent = "Halo! Saya sedang belajar HTML.";
    pesan.style.color = "red";

  } else if (pesan.style.color === "red") {
    pesan.textContent = "Saya sedang belajar JavaScript!";
    pesan.style.color = "green";

  } else {
    pesan.textContent =
      "Halo! Saya Rama, sedang belajar menjadi web developer.";
    pesan.style.color = "blue";
  }
}
function LihatProject() {
  document.getElementById("project").scrollIntoView({
    behavior: "smooth"
  });
}
function KirimEmail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=ramapratama2410@gmail.com",
    "_blank"
  );
}
