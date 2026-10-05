//2. Create the Product Base Class:    
//Inside src/models/Product.ts, create a Product base class with the following:
export class PhysicalProduct {
//Properties: sku (string), name (string), price (number).
    sku: string;
    name: string;
    price: number;
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
    getPriceWithTax(taxRate: number) {
        return this.price * (1 + taxRate);
    }

//3.Create the PhysicalProduct Subclass:
//Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
//Add a weight property (number) for physical products.
//Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
//Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
    import { Product } from './Product.js';
//Add a weight property (number) for physical products.
    weight: number;    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    override getPriceWithTax(taxRate: number = 0.10) {
        return this.price * (1 + taxRate);
    }

    get formattedWeight() {
        return `${this.weight.toFixed(2)} kg`;
    }

//4. Create the DigitalProduct Subclass:
//Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
import { Product } from './Product.js';

}