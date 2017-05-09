const product = {
    name: 'Black Bic Pen',
    price: 1.90,
    discount: 0.05
}

function clone(obj) {
    return { ...obj} //Using Spread to "spread" the obj into a new object that is returning, using the object-spread or object-rest plugin
}

const newProduct = clone(product);
newProduct.name = 'Blue Bic Pen';

console.log(product, newProduct);