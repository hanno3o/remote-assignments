function calculate(data) {
    const discount = Object.values(data)[0]
    const products = Object.values(data)[1]
    let total = 0
    products.forEach(item =>{
        total += item.price*(1-discount)
    })
    return total
}

const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700 
        },
        {
            name: "Product 3",
            price: 250 
        }
    ]
})

console.log(discountedPrice) // show the total price of all products after applying a discount