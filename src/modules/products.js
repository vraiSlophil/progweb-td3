class Product {
    constructor(ref, prix, description) {
        this.ref = ref;
        this.prix = prix;
        this.description = description;
    }
}

const products = [
    new Product('1', 10, 'Product 1'),
    new Product('2', 20, 'Product 2'),
    new Product('3', 30, 'Product 3'),
    new Product('4', 40, 'Product 4'),
];