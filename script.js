function updateStatistics() {
  fetch('https://api.kotone.tech/stats')
    .then(response => response.json())
    .then(data => {
      // Format numbers with commas using toLocaleString()
      const servers = data.servers.toLocaleString();
      const users = data.users.toLocaleString();
      const usedCommands = data.used_commands.toLocaleString();

      // Update values in the HTML with formatted numbers
      document.getElementById('servers').textContent = servers;
      document.getElementById('users').textContent = users;
      document.getElementById('commands').textContent = usedCommands;
      
      // You can add logic here to update the third value of commands used if provided in the JSON
      // For example:
      // const commands = data.commands.toLocaleString();
      // document.getElementById('commands').textContent = commands;
    })
    .catch(error => console.error('Error fetching data from API:', error));
}

// Call the function when the page loads to update the statistics
updateStatistics();
