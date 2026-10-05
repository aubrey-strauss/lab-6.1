//2. Create the product base class
//Inside src/models/Product.ts, create a Product base class with the following:
class Product {
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
    getPriceWithTax(taxRate: number) {
        return this.price * (1 + taxRate);
    }
}

//3.Create the PhysicalProduct Subclass:
//Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
import { Product } from './Product';
export class PhysicalProduct extends Product {
    //Add a weight property (number) for physical products.
    weight: number;     

constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

//Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
override getPriceWithTax() {
        const taxRate = 0.10;
        return this.price * (1 + taxRate);
    }

//Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
    get formattedWeight() {
        return `${this.weight.toFixed(1)} kg`;
    }
}