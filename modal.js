document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.getElementById("aboutBtn");
  const contactBtn = document.getElementById("contactBtn");

  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("myModal");

  aboutBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });
  contactBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
