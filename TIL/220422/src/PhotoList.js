export default function PhotoList({ $target, initialState, onScrollEnded }) {
  const $photoList = document.createElement("div");
  $target.appendChild($photoList);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, obs) => {
        // entry가 화면에 닿으면
        if (entry.isIntersecting && !this.state.isLoading) {
          console.log(entry, obs);
          if (this.state.totalCount > this.state.photos.length) onScrollEnded();
        }
      });
    },
    {
      threshold: 0, // threshold: 1.0 은 대상 요소가 root 에 지정된 요소 내에서 100% 보여질 때 콜백이 호출
    }
  );

  let $lastLi = null;

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

    const { photos } = this.state;
    // photo id를 통해 그 id가 null이라면 새로운 li 생성하고 append
    const $photos = $photoList.querySelector(".PhotoList__photos");

    photos.forEach((photo) => {
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement("li");
        $li.setAttribute("data-id", photo.id);
        // min-heigth는 li가 이미지보다 빨리 들어갔을 때 맨 끝에서 스크롤이 끝난 것으로 인식할 수 있기 떄문에 최소 height 지정
        $li.style = `list-style:none;min-height:500px;`;
        $li.innerHTML = `<img src="${photo.imagePath}" width="100%" />`;

        $photos.appendChild($li);
      }
    });

    const $nextLi = $photos.querySelector("li:last-child");

    if ($nextLi !== null) {
      if ($lastLi !== null) {
        observer.unobserve($lastLi); //  내렸다가 위로 다시 스크롤 했을 때 감지 안하도록 기존 lastLi observe 해제
      }

      $lastLi = $nextLi;
      observer.observe($lastLi);
    }
  };

  this.render();
}
