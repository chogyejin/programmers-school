export default function SuggestKeywords({
  $target,
  initialState,
  onKeywordSelect,
}) {
  const $suggest = document.createElement("div");
  $suggest.classList.add("Keywords");
  $target.appendChild($suggest);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  this.render = () => {
    const { keywords, cursor } = this.state;

    $suggest.style.display = keywords.length > 0 ? "block" : "none";

    $suggest.innerHTML = `
    <ul>
      ${keywords
        .map(
          (keyword, i) => `
      <li class="${cursor === i ? "active" : ""}">${keyword}</li>
      `
        )
        .join("")}
    </ul>
        `;
  };

  this.render();

  $suggest.addEventListener("click", (event) => {
    const $li = event.target.closest("li");

    if ($li) {
      onKeywordSelect($li.textContent);
    }
  });
  window.addEventListener("keydown", (event) => {
    // 검색어 추천이 떴을 때
    if ($suggest.style.display !== "none") {
      const { key } = event;
      const { cursor, keywords } = this.state;
      // 아래 화살표 키
      if (key === "ArrowDown") {
        const nextCursor = cursor < keywords.length - 1 ? cursor + 1 : 0; // 마지막에서 처음으로
        this.setState({
          ...this.state,
          cursor: nextCursor,
        });
      }
      // 위 화살표 키
      else if (key === "ArrowUp") {
        const nextCursor = cursor > 0 ? cursor - 1 : keywords.length - 1; // 처음에서 마지막으로
        this.setState({
          ...this.state,
          cursor: nextCursor,
        });
      }
      // 엔터
      else if (key === "Enter") {
        onKeywordSelect(keywords[cursor]);
      }
    }
  });
}
