import HomePage from './pages/HomePage';
interface Product{
    id:number,
    name:string,
    price:number,
    desc:string,
    quantity:number
}
const products = [
    {
        id: 1,
        name :"nguyen tien loi",
        price:123123,
        desc:"doan mo ta",
        quantity:200
    },
    {
        id: 2,
        name :"nguyen jahd",
        price:123123,
        desc:"doan mo ta",
        quantity:200
    },
]


// const arrStr:string[] = ["a","b","c","d"];
// console.log(arrStr);
// const arrNumber:number[]=[1,2,3,4,5];
// console.log(arrNumber);
// const productName: string = "Product1";
// const productPrice: number = 200;
// const productStatus: boolean = true;
// console.log(productName);
// console.log(productPrice);
// console.log(productStatus);


console.log(HomePage.render())

function show(data:Product[]) {
    data.forEach(product => console.log(product.name));
    console.log(data);
}
show(products);