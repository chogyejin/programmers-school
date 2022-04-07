export default function ProductOptions({ $target, initialState, onSelect }) {
  const $select = document.createElement("select");
  $target.appendChild($select);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  // options 객체 배열
  // [
  //   {
  //     optionId: num,
  //     optionName: str,
  //     optionPrice: num,
  //     stock: num,
  //   },
  //   ...
  // ]

  const createOptionFullName = ({ optionName, optionPrice, stock }) => {
    return `${optionName} | ${
      optionPrice > 0 ? `옵션가 : ${optionPrice}` : ""
    } | ${stock > 0 ? `${stock}` : "재고 없음"}`;
  };

  $select.addEventListener("change", (event) => {
    const optionId = parseInt(event.target.value);
    const option = this.state.find((option) => option.optionId === optionId);

    // option이 undefined면 제외
    if (option) {
      onSelect(option);
    }
  });

  this.render = () => {
    if (this.state && Array.isArray(this.state)) {
      $select.innerHTML = `
        <option>선택하세요</option>
        ${this.state
          .map(
            (option) =>
              `
            <option ${option.stock === 0 ? "disabled" : ""} value=${
                option.optionId
              }>${createOptionFullName(option)}</option>`
          )
          .join("")}
      `;
    }
  };

  this.render();
}
