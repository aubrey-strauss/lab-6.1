//3.Create the PhysicalProduct Subclass:
//Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
import Product from './Product.js';
export class PhysicalProduct extends Product {
    //Add a weight property (number) for physical products.
    weight: number;     

constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

//Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
getPriceWithTax() {
        const taxRate = 0.10;
        return super.getPriceWithTax();
    }

//Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
    get formattedWeight() {
        return `${this.weight.toFixed(1)} kg`;
    }
}