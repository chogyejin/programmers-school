import ProductOptions from "../ProductOptions.js";
import Cart from "../Cart.js";
import { request } from "../api.js";

// Product 관련 component를 모은 Page
export default function ProductPage({ $target, initialState }) {
  const $product = document.createElement("div");

  // state
  // {
  //  productId: num,
  //  product: obj,
  //  optionData: arr,
  //  selectedOptions: arr,
  // }

  this.state = initialState;

  const productOptions = new ProductOptions({
    $target: $product,
    initialState: [],
    onSelect: (option) => {
      const nextState = { ...this.state };
      const { selectedOptions } = nextState;
      const selectedOptionIndex = selectedOptions.findIndex(
        (selectedOption) => selectedOption.optionId === option.optionId
      );

      if (selectedOptionIndex > -1) {
        nextState.selectedOptions[selectedOptionIndex].ea++;
      } else {
        nextState.selectedOptions.push({
          optionId: option.optionId,
          optionName: option.optionName,
          optionPrice: option.optionPrice,
          ea: 1,
        });
      }

      this.setState(nextState);
    },
  });

  const cart = new Cart({
    $target: $product,
    initialState: {
      productName: "",
      basePrice: 0,
      selectedOptions: [],
    },
    onRemove: (selectedOptionIndex) => {
      const nextState = { ...this.state };
      nextState.selectedOptions.splice(selectedOptionIndex, 1);

      this.setState(nextState);
    },
  });

  this.setState = (nextState) => {
    if (nextState.productId !== this.state.productId) {
      fetchOptionData(nextState.productId);
      return;
    }

    this.state = nextState;

    const { product, selectedOptions, optionData } = this.state;

    productOptions.setState(optionData);
    cart.setState({
      productName: product.name,
      basePrice: product.basePrice,
      selectedOptions: selectedOptions,
    });

    this.render();
  };

  this.render = () => {
    $target.appendChild($product);
  };

  const fetchOptionData = (productId) => {
    return (
      request(`/products/${productId}`)
        .then((product) => {
          // product 객체, 이 객체의 id 이용하여 다시 request
          this.setState({
            ...this.state,
            product,
            optionData: [], // 후에 set 하게 됨
            selectedOptions: [],
          });
          return request(`/product-options?product.id=${product.id}`);
        })
        // .then((productOptions) => {
        //   console.log(productOptions); // options 배열
        //   return Promise.all(
        //     productOptions
        //       .map((productOption) => productOption.id)
        //       .map((id) => {
        //         return request(`/product-option-stocks?productOption.id=${id}`); // option id 뽑아서 옵션별 재고 request
        //       })
        //   );
        // })
        // .then((productStock) => {
        //   console.log(productStock);
        // });
        .then((productOptions) => {
          // 옵션과 재고 Promise 묶기
          return Promise.all([
            Promise.resolve(productOptions),
            Promise.all(
              productOptions
                .map((productOption) => productOption.id)
                .map((id) => {
                  return request(
                    `/product-option-stocks?productOption.id=${id}`
                  ); // option id 뽑아서 옵션별 재고 request
                })
            ),
          ]);
        })
        .then((data) => {
          // data: [options 배열, 각 option에 대한 재고 배열]
          const [productOptions, stocks] = data;
          const flatStock = stocks.flat(); // array로 한 번 묶여 있어서 풀고
          const optionData = productOptions.map((productOption, i) => {
            const stock = flatStock[i].stock;

            return {
              optionId: productOption.id,
              optionName: productOption.optionName,
              optionPrice: productOption.optionPrice,
              stock,
            };
          });

          this.setState({
            ...this.state,
            optionData,
          });
        })
    );
  };
}
