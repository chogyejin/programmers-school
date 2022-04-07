export default function Cart({ $target, initialState, onRemove }) {
  const $cart = document.createElement("div");
  $target.appendChild($cart);

  // state
  // {
  //  productName: str,
  //  basePrice: num,
  //  selectedOptions: arr,
  // }

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const calculateTotalPrice = () => {
    const { basePrice, selectedOptions } = this.state;

    return selectedOptions.reduce(
      (acc, option) => acc + (basePrice + option.optionPrice) * option.ea,
      0
    );
  };

  this.render = () => {
    const { productName, basePrice, selectedOptions } = this.state;

    $cart.innerHTML = `
      <ul>
        ${
          Array.isArray(selectedOptions) &&
          selectedOptions
            .map(
              (option, index) =>
                `
                <li data-index=${index} class="cartItem">${productName} - ${
                  option.optionName
                } | ${basePrice + option.optionPrice}, ${
                  option.ea
                }개<button class="remove">X</button></li>
              `
            )
            .join("")
        }
      </ul>
      <div>
        총 ${calculateTotalPrice()} 원
      </div>
    `;

    // 카트에서 지우려는 리스트의 인덱스 뽑아 onRemove() 실행
    $cart.querySelectorAll(".remove").forEach(($button) => {
      $button.addEventListener("click", (event) => {
        const $li = event.target.closest(".cartItem");

        if ($li) {
          const { index } = $li.dataset;
          onRemove(parseInt(index));
        }
      });
    });
  };

  this.render();
}
