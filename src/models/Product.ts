//2. Create the product base class
//Inside src/models/Product.ts, create a Product base class with the following:
export class Product {
    sku: string;
    name: string;
    price: number;

//Properties: sku (string), name (string), price (number).
    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

//Methods:
//displayDetails() - a method that returns a formatted string with the product’s details.
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }

//getPriceWithTax() - a method that calculates the final price of the product with tax.
    getPriceWithTax(taxRate: number): number {
        return this.price * (1 + taxRate);
    }
}

