function filterByCategory() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const allCommands = document.querySelectorAll('.command-list > div');
  
    allCommands.forEach(command => {
      command.classList.remove('fade-inn'); // Remover la clase fade-in de todos los elementos
      command.style.display = 'none';
    });
  
    if (selectedCategory === 'all') {
      allCommands.forEach(command => {
        command.classList.add('fade-inn'); // Agregar la clase fade-in
        command.style.display = 'block';
      });
    } else {
      const filteredCommands = document.querySelectorAll(`.category-${selectedCategory}`);
      filteredCommands.forEach(command => {
        command.classList.add('fade-inn'); // Agregar la clase fade-in
        command.style.display = 'block';
      });
    }
  
    // Esperar un tiempo para remover la clase fade-in después de que finalice la animación
    setTimeout(() => {
      if (selectedCategory === 'all') {
        allCommands.forEach(command => {
          command.classList.remove('fade-inn');
        });
      } else {
        const filteredCommands = document.querySelectorAll(`.category-${selectedCategory}`);
        filteredCommands.forEach(command => {
          command.classList.remove('fade-inn');
        });
      }
    }, 500); // Tiempo igual a la duración de la animación (en este caso, 0.5s)
  }
  
