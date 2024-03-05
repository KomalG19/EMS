document.addEventListener("DOMContentLoaded", () => {
    fetchEvents();
  });
  
  function fetchEvents() {
    // Make a GET request to fetch events
    fetch('/api/events')
      .then(response => response.json())
      .then(events => {
        displayEvents(events);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }
  
  function displayEvents(events) {
    const eventContainer = document.getElementById('eventContainer');
    eventContainer.innerHTML = ''; // Clear previous content
  
    events.forEach(event => {
      // Create event card
      const eventCard = document.createElement('div');
      eventCard.classList.add('event');
  
      // Populate event details
      eventCard.innerHTML = `
        <h2>${event.name}</h2>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Description:</strong> ${event.description}</p>
      `;
  
      // Append event card to container
      eventContainer.appendChild(eventCard);
    });
  }
  