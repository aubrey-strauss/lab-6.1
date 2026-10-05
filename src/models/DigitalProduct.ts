//4.Create the DigitalProduct Subclass:
//Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
import { Product } from './Product.js';
export class DigitalProduct extends Product {
    //Add a fileSize property (number) for digital products.
    fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    //Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
    getPriceWithTax(taxRate: number): number {
        return this.price;
    }
    //Use a getter method to return the formatted file size in megabytes.
    get formattedFileSize() {
        return `${this.fileSize.toFixed(2)} MB`;
    }
}