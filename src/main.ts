//5. Implement the Main Program:
//Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { Product } from './models/Product';

//Create an array of products that includes both physical and digital products.
const products: Product[] = [
    new PhysicalProduct("PHY001", "Board Game", 35.00, 2.5),
    new DigitalProduct("DIG001", "Online Casino", 70.00, 100)
];

//Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
//Hint: Utilize polymorphism to your advantage here.
const inventory: Product[] = [game, casino];

console.log("Product Inventory:");

inventory.forEach((product) => {
    console.log(product.displayDetails());
    console.log(`Price with Tax: $${product.getPriceWithTax(0.10).toFixed(2.5)}`);

    if (product instanceof PhysicalProduct) {
        console.log(`Weight: ${product.formattedWeight}`);
    } else if (product instanceof DigitalProduct) {
        console.log(`File Size: ${product.formattedFileSize}`);
    }
}   
