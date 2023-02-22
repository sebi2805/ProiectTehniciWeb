document.addEventListener("DOMContentLoaded", () => {
  const labels = [
    "Fresh",
    "Locally-sourced",
    "Organic",
    "Sustainable",
    "Farm-to-people",
    "Seasonal",
    "Natural",
    "Grass-fed",
    "Delicious",
    "Farm-fresh",
    "Local",
    "Pesticide-free",
    "Antibiotic-free",
    "Hormone-free",
    "Freshly-harvested",
    "Juicy",
    "Tender",
    "Freshly-baked",
  ];

  const labelElements = labels.map((label) => {
    const labelElement = document.createElement("strong");
    labelElement.textContent = label;
    labelElement.style.paddingRight = "2px";
    return labelElement;
  });

  // Get the container element by its ID
  const container = document.getElementById("label-container");

  // Add the label elements to the container element
  labelElements.forEach((labelElement) => {
    container.appendChild(labelElement);
  });
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
