function loadSpacecrafts() {
    fetch('https://isro.vercel.app/api/spacecrafts')
      .then(res => res.json())
      .then(data => {

        data.forEach(user => {
          const markup = `<li>${user.name}</li>`;
          document.querySelector('.spaceCraft').insertAdjacentHTML('beforeend', markup);
        })

      })
      .catch(error => console.log(error));

      fetch('https://isro.vercel.app/api/launchers')
      .then(res => res.json())
      .then(data => {

        data.forEach(user => {
          const markup = `<li>${user.name}</li>`;
          document.querySelector('.launches').insertAdjacentHTML('beforeend', markup);
        })
      })
      .catch(error => console.log(error)); 
  }
  
  loadSpacecrafts();
			