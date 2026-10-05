//5. Implement the Main Program:
//Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
import { PhysicalProduct } from './models/PhysicalProduct.js';
import { DigitalProduct } from './models/DigitalProduct.js';
//Create an array of products that includes both physical and digital products.
const products = [
    new PhysicalProduct("PHY001", "Board Game", 35.00, 1.5),
    new DigitalProduct("DIG001", "Online Casino", 70.00, 100)
];

//Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
//Hint: Utilize polymorphism to your advantage here.

console.log("Product Inventory:");

products.forEach((product) => {
    console.log(JSON.stringify(product, null, 2));
    console.log(`Price with Tax: $${product.getPriceWithTax(0.10).toFixed(2)}`);

    if (product instanceof DigitalProduct) {
        console.log(`File Size: ${product.formattedFileSize}`);
    }
}   
)