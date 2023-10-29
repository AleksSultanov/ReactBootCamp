import {createProducts, getProducts, deleteProducts} from "./api.js";
let products =[];



// getProducts()
//   .then((data) => {
//     // console.log(data);
//     console.log('result getProducts');
//     products = data.products;
//     console.log(products);
//   });

// const productsFromServ = await getProducts();
// console.log(productsFromServ);

// await getProducts()
//    .then((data) => {
//        console.log('result getProducts');
//        products = data.products;
//        console.log(products);
//      });

// async function handler(){
//   return await getProducts()
//                 .then((data) => {
//                     console.log('result getProducts');
//                     products = data.products;
//                     console.log(products);
//                   });
// }    

// await handler();


// createProducts({
//   title: "test productN",
//   desctiption: "test product",
//   }) 
//   .then((data) => {
//     console.log('result createProducts');
//     products.push(data)
//     console.log(products);
//   });

let productsFromServ = await getProducts();
products = productsFromServ.products;

const createProductsFromServ = await createProducts({title: "test productN"});
products.push(createProductsFromServ);

console.log(products);

const deleteProductsFromServ = await deleteProducts(2);
console.log(deleteProductsFromServ);

productsFromServ = await getProducts();
products = productsFromServ.products;
console.log(products);

products = products.filter((product) => product.id !== 3 );
console.log(products);











