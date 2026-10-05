import { Product } from './Product';

export class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    override getPriceWithTax(taxRate: number = 0.10) {
        return this.price * (1 + taxRate);
    }

    get formattedWeight() {
        return `${this.weight} kg`;
    }
}