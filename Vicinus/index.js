// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger");
//   const nav = document.querySelector("nav");
//   const li = document.querySelectorAll("ul.menu > li");
//   const a = document.querySelectorAll("ul.menu > li > ul > li > a");
//   hamburger.addEventListener("click", function () {
//     hamburger.classList.toggle("active");
//     nav.classList.toggle("active");
//   });

//   li.forEach((e) =>
//     e.addEventListener("click", function () {
//       e.querySelectorAll("ul > li ").forEach((a) =>
//         a.classList.toggle("active")
//       );
//     })
//   );
//   const satisfactionElements = document.querySelectorAll("td#satisfaction");

//   satisfactionElements.forEach((element) => {
//     const satisfactionPercentage = parseInt(element.textContent.slice(0, -1)); //pentru a nu lua si % din text
//     if (satisfactionPercentage < 50) {
//       element.style.color = "red";
//     } else if (satisfactionPercentage < 75) {
//       element.style.color = "orange";
//     } else {
//       element.style.color = "green";
//     }
//   });
//   //////////////////////////////////////////////////////////////

//   const labels = [
//     "Fresh",
//     "Locally-sourced",
//     "Organic",
//     "Sustainable",
//     "Farm-to-people",
//     "Seasonal",
//     "Natural",
//     "Grass-fed",
//     "Delicious",
//     "Farm-fresh",
//     "Local",
//     "Pesticide-free",
//     "Antibiotic-free",
//     "Hormone-free",
//     "Freshly-harvested",
//     "Juicy",
//     "Tender",
//     "Freshly-baked",
//   ];

//   const labelElements = labels.map((label) => {
//     const labelElement = document.createElement("strong");
//     labelElement.textContent = label;
//     labelElement.style.paddingRight = "2px";
//     return labelElement;
//   });
//   //////////////////////////////////////////////////////////////////////

//   const container = document.getElementById("label-container");

//   labelElements.forEach((labelElement) => {
//     container.appendChild(labelElement);
//   });
//   let accordionHeaders = document.querySelectorAll(".accordion-header");

//   accordionHeaders.forEach((header) => {
//     header.addEventListener("click", (event) => {
//       let content = event.target.nextElementSibling;

//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   });
// });
const path = require("path");
const express = require("express");
app = express();
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(8080);
console.log("Server is running on port 8080");
