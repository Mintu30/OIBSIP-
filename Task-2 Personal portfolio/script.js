// Add active class to nav links on click
nav.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.add("active");
  }
});

// Download resume button functionality
const downloadResumeButton = document.getElementById("download-resume");
downloadResumeButton.addEventListener("click", function() {
  // Add code here to download resume
});