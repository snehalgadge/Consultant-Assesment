function loadSpacecrafts() {
    const api1 = 'https://isro.vercel.app/api/spacecrafts';
    const api2 = 'https://isro.vercel.app/api/launchers';
    const api3 = 'https://isro.vercel.app/api/customer_satellites';
    const api4 = 'https://isro.vercel.app/api/centres'
    
    Promise.all([
      fetch(api1),
      fetch(api2),
      fetch(api3),
      fetch(api4)
    ])
    .then(responses => {
      return Promise.all(responses.map(response => {
        return response.json();
      }));
    })
    .then(data => {
      // process data from each API
      const data1 = data[0];
      const data2 = data[1];
      const data3 = data[2];
      console.log(data1, data2, data3);
    })
    .catch(error => console.log(error)); 
  }
  
  loadSpacecrafts();
			