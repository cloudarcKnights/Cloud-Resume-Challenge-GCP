// Call the function to update the visitor count
updateVisitCount();

// Function to update the visitor count
function updateVisitCount() {
  // Make a network request to update the visitor count
  fetch('https://counter-gateway-7u7o4lcy.wl.gateway.dev/UpdateVisitorCount')
    .then(function(response) {
      // Convert the response to JSON format
      return response.json();
    })
    .then(function(data) {
      // Update the visitor count in the HTML element
      console.log(data);
      document.getElementById('counter').innerHTML = data;
    })
}
