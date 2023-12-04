function updateStatistics() {
    fetch('https://api.kotone.tech/stats')
      .then(response => response.json())
      .then(data => {
        // Update values in the HTML
        document.getElementById('servers').textContent = data.servers;
        document.getElementById('users').textContent = data.users;
        document.getElementById('commands').textContent = data.used_commands;
        // You can add logic here to update the third value of commands used if provided in the JSON
        // For example:
        // document.getElementById('commands').textContent = data.commands;
      })
      .catch(error => console.error('Error fetching data from API:', error));
  }
  
  // Call the function when the page loads to update the statistics
  updateStatistics();
  
