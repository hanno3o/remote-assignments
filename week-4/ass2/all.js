const url = "https://appworks-school.github.io/Remote-Assignment-Data/products"
const result = document.querySelector('.result')

function ajax(url) {
    return fetch(url)
    .then(res => res.json())
}

function render(data) {
    data.forEach(function(item, index, array){
        result.innerHTML += `
        <h2>${data[index].name}</h2>
        <hr>
        <p style="font-weight: 100;">$${data[index].price}</p>
        <p>${data[index].description}</p>
        <br>
        `
    }) 
}

ajax(url).then(data => {
    render(data)
})
// you should get product information in JSON format and render data in the page