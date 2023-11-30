// Assume you have a JSON object like this
const jsonData = {
    title: "Dynamic Tech Page",
    content: "This is a dynamic page content for the tech industry.",
    // Add more data as needed
  };
  
  // Update the content dynamically
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pageTitle').textContent = jsonData.title;
    document.getElementById('pageContent').textContent = jsonData.content;
  });
  