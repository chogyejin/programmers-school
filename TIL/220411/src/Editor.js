export default function Editor({ $target, initialState, onEditing }) {
  const $editor = document.createElement("div"); // textarea or div + content editable
  $target.appendChild($editor);

  $editor.innerHTML = `
  <input type="text" name="title" style="width:600px;" />
  <div contentEditable="true" name="content" style="width:600px;height:400px;border:1px solid black;"></textarea>
`;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    // 줄 단위로 쪼갬
    const richContent = this.state.content
      .split("\n")
      .map((line) => {
        // "#"만 하면 "#"" 한 개 이상 모두 들어가기 때문에 공백으로 구분됨
        if (line.indexOf("# ") === 0) {
          return `<h1>${line.substring(2)}</h1>`;
        } else if (line.indexOf("## ") === 0) {
          return `<h2>${line.substring(3)}</h2>`;
        } else if (line.indexOf("### ") === 0) {
          return `<h3>${line.substring(4)}</h3>`;
        }
        return line;
      })
      .join("<br>"); // 서버의 \n은 textarea만 개행 처리 됨, div는 <br>로 치환

    $editor.querySelector("[name=title]").value = this.state.title;
    $editor.querySelector("[name=content]").innerHTML = richContent; // value가 아닌 innterHTML 이용
  };

  this.render();

  $editor.querySelector("[name=title]").addEventListener("keyup", (event) => {
    const nextState = {
      ...this.state,
      title: event.target,
    };

    this.setState(nextState);
    onEditing(this.state);
  });

  $editor.querySelector("[name=content]").addEventListener("input", (event) => {
    const nextState = {
      ...this.state,
      title: event.target,
    };

    this.setState(nextState);
    onEditing(this.state);
  });
}
