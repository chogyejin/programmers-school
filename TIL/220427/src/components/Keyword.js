export default function Keyword({
  $target,
  initialState,
  onKeywordInput,
  onEnter,
}) {
  const $keyword = document.createElement("input");
  $keyword.classList.add("Keyword");
  $target.appendChild($keyword);

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;

    $keyword.value = this.state.value;
  };

  $keyword.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      onEnter();
    } else {
      onKeywordInput(event.target.value);
    }
  });
}
