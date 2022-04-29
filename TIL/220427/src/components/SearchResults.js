export default function SearchResults({ $target, initialState }) {
  const $results = document.createElement("div");
  $results.classList.add("SearchResults");

  $target.appendChild($results);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $results.innerHTML = `
    ${this.state
      .map(
        (result) => `
      <div>
        <img src="${result.url}" />
      </div>
    `
      )
      .join("")}
    `;
  };

  this.render();
}
