// reference the HTML
const filmsList = document.querySelector('#filmsList');

// Fetch data from Star Wars API for all starships
fetch('https://swapi.dev/api/starships/')
  .then(response => response.json()) // Parse response as JSON
  .then(starshipData => {
    // Fetch film data and render on page
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json()) // Parse response as JSON
      .then(data => {
        // Iterate through list of films
        data.results.forEach(film => {
          // new list item for the film
          const filmItem = document.createElement('li');
          // Set text of the list item to title of the film
          filmItem.innerText = film.title;

          // Create a new ul to display film details (directed by, produced by, release date, & starships)
          const details = document.createElement('ul');
          // Add list items EXCEPT starship -> do that after
          details.innerHTML = `
            <li>Directed by: ${film.director}</li>
            <li>Produced by: ${film.producer}</li>
            <li>Release Date: ${film.release_date}</li>
          `;

          // New list item for the starship!
          const starshipsItem = document.createElement('li');
          // text of the list item is "Starships:" the ships will be displayed after this
          starshipsItem.innerText = 'Starships:';
          // new ul to display the starships
          const starshipsList = document.createElement('ul');
          // Iterate through the list of starships in the film data
          const promises = film.starships.map(starshipURL => {
            // Create new list item for starships
            const starshipItem = document.createElement('li');
            return fetch(starshipURL)
              .then(response => response.json())
              .then(starshipDataItem => {
                // Set text of the list item to the starship name and model
                starshipItem.innerText = `${starshipDataItem.name} (${starshipDataItem.model})`;
                // the list is a CHILD to the item(Starships:)
                starshipsList.appendChild(starshipItem);
              })
              .catch(error => {
                console.log(`Error fetching starship data: ${error}`);
              });
          });
          Promise.all(promises).then(() => {
            // Add the starships list to starships item
            starshipsItem.appendChild(starshipsList);
            // Hide details first
            details.style.display = 'none';
            starshipsItem.style.display = 'none';

            // click event listener to Film item
            filmItem.addEventListener('click', () => {
              // when theres nothing displayed and then you click - it displays all. else it hides all again.
              if (details.style.display === 'none') {
                details.style.display = 'block';
                starshipsItem.style.display = 'block';
              } else {
                details.style.display = 'none';
                starshipsItem.style.display = 'none';
              }
            });
            // Add all details a to the film item
            filmItem.appendChild(details);
            filmItem.appendChild(starshipsItem);
            // Add film item to the list of films
            filmsList.appendChild(filmItem);
          });
        });
      })
      .catch(error => {
        console.log(`Error fetching film data: ${error}`);
      });
  })
  .catch(error => {
    console.log(`Error fetching starship data: ${error}`);
  });
