
nav.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.add("active");
  }
});

// Order now button
const orderNowButton = document.getElementById("order-now");
orderNowButton.addEventListener("click", function() {
  alert("You clicked the order now button!");
});