import { request } from "./api.js";
import PhotoList from "./PhotoList.js";

export default function App({ $target }) {
  const $h1 = document.createElement("h1");
  $h1.innerHTML = "Cat photos";
  $h1.style.textAlign = "center";
  $target.appendChild($h1);

  this.state = {
    limit: 5,
    nextStart: 0, // 다음 불러오는 photo 중 첫 번째 숫자는 앞에서 부른 limit + nextStart
    photos: [],
    totalCount: 0,
    isLoading: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;

    photoListComponent.setState({
      photos: nextState.photos,
      isLoading: this.state.isLoading,
      totalCount: this.state.totalCount,
    });
  };

  const photoListComponent = new PhotoList({
    $target,
    initialState: {
      photos: this.state.photos,
      isLoading: this.state.isLoading,
      totalCount: this.state.totalCount,
    },
    onScrollEnded: async () => {
      await fetchPhotos();
    },
  });

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const { limit, nextStart } = this.state;
    const photos = await request(
      `/cat-photos?_limit=${limit}&_start=${nextStart}`
    );
    this.setState({
      ...this.state,
      nextStart: nextStart + limit,
      photos: [...this.state.photos, ...photos], // 지금까지의 photos와 fetch한 photos 합침
      isLoading: false,
    });
  };

  // app 초기화 시 totalCount 부르고 setState, 사진 데이터 fetch
  const initialize = async () => {
    const totalCount = await request(`/cat-photos/count`);

    this.setState({
      ...this.state,
      totalCount,
    });

    await fetchPhotos();
  };

  initialize();
}
