fetch('http://localhost:3000/getData?number=10')
    .then(res => res.json())
    .then(data => console.log(data)) 
    .catch(error => {
        console.log(`Error: ${error}`);
    })