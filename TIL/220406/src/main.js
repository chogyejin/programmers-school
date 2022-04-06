import ProductPage from "./ProductPage.js";

// const dummy = [
//   {
//     optionId: 1,
//     optionName: "옵션 1",
//     optionPrice: 1000,
//     stock: 10,
//   },
//   {
//     optionId: 2,
//     optionName: "옵션 2",
//     optionPrice: 5000,
//     stock: 10,
//   },
//   {
//     optionId: 3,
//     optionName: "옵션 3",
//     optionPrice: 1000,
//     stock: 0,
//   },
// ];

const $app = document.querySelector(".app");

new ProductPage({
  $target: $app,
  initialState: {
    productId: 1,
  },
});
