// Small progressive enhancement: keep the footer year current.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Close the mobile navigation after selecting a section.
  const navContent = document.getElementById("navbarContent");
  const navLinks = document.querySelectorAll("#navbarContent .nav-link, #navbarContent .btn");
  if (navContent && window.bootstrap) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const collapse = window.bootstrap.Collapse.getInstance(navContent);
        if (collapse && navContent.classList.contains("show")) collapse.hide();
      });
    });
  }
});
