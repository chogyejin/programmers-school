export default function PhotoList({ $target, initialState, onScrollEnded }) {
  const $photoList = document.createElement("div");
  $target.appendChild($photoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  let isInit = false;
  this.render = () => {
    if (!isInit) {
      $photoList.innerHTML = `
        <ul class="PhotoList__photos"></ul>
      `;
      isInit = true;
    }

    const { isLoading, photos } = this.state;
    // photo id를 통해 그 id가 null이라면 새로운 li 생성하고 append
    const $photos = $photoList.querySelector(".PhotoList__photos");

    photos.forEach((photo) => {
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement("li");
        $li.setAttribute("data-id", photo.id);
        $li.style = `list-style:none;`;
        $li.innerHTML = `<img src="${photo.imagePath}" width="100%" />`;

        $photos.appendChild($li);
      }
    });
  };

  this.render();

  window.addEventListener("scroll", (event) => {
    const { isLoading, photos, totalCount } = this.state;
    console.log(totalCount);
    const isScrollEnded =
      window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight;

    // 다 불러왔으면 더 이상 부르지 않음
    if (isScrollEnded && !isLoading && photos.length < totalCount) {
      onScrollEnded();
    }
  });
}
