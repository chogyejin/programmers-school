export default function Header({ $target, initialState }) {
  const $h1 = document.createElement("h1");
  $target.appendChild($h1);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { username, isLoading } = this.state;
    if (!username) {
      $h1.innerHTML = ``;
      return;
    }

    $h1.innerHTML = `
      <h1>${username}의 투두 목록 ${isLoading ? "로딩 중" : ""}</h1>
    `;
  };

  this.render();
}
