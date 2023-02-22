document.addEventListener("DOMContentLoaded", () => {
  let accordionHeaders = document.querySelectorAll(".accordion-header");
  console.log(accordionHeaders);
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", (event) => {
      // Get the corresponding content element
      let content = event.target.nextElementSibling;

      // Toggle the content's visibility
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
