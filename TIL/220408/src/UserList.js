export default function UserList({ $target, initialState, onSelect }) {
  const $userList = document.createElement("div");
  $target.appendChild($userList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $userList.innerHTML = `
      <h1>유저 목록</h1>
      <ul>
        ${this.state
          .map(
            (username) => `
          <li data-username=${username}>${username}</li>
        `
          )
          .join("")}
            <form>
              <input class="new-user"  placeholder="추가할 유저 이름 입력"/>
            </form>
      </ul>
    `;
  };

  this.render();

  $userList.addEventListener("click", (event) => {
    const $li = event.target.closest("li[data-username]"); // input 창에는 반응 안하게

    if ($li) {
      const { username } = $li.dataset;
      onSelect(username);
    }
  });

  $userList.addEventListener("submit", (event) => {
    const $newUser = $userList.querySelector(".new-user"); // input 태그 선택
    console.log($newUser);
    const newUserValue = $newUser.value;

    if (newUserValue.length > 0) {
      onSelect(newUserValue);
      $newUser.value = "";
    }
  });
}
