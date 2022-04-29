import Header from "./components/Header.js";
import SearchResults from "./components/SearchResults.js";
import SuggestKeywords from "./components/SuggestKeywords.js";
import { request } from "./utils/api.js";
import debounce from "./utils/debounce.js";
import storage from "./utils/storage.js";

export default function App({ $target }) {
  this.state = {
    keyword: "", // 선택한 keyword
    keywords: [], // API 요청해서 받은 keyword 배열
    catImages: [],
  };

  this.cache = storage.getItem("keyword_cache", {});

  this.setState = (nextState) => {
    this.state = nextState;

    header.setState({
      keyword: this.state.keyword,
    });

    suggestKeywords.setState({ keywords: this.state.keywords });

    if (this.state.catImages.length > 0) {
      searchResults.setState(this.state.catImages);
    }
  };

  const header = new Header({
    $target,
    initialState: {
      keyword: this.state.keyword,
    },
    onKeywordInput: debounce(async (keyword) => {
      // 공백 제거하고 2글자 이상에 대해
      if (keyword.trim().length > 1) {
        let keywords = null;

        if (this.cache[keyword]) {
          keywords = this.cache[keyword];
        } else {
          keywords = await request(`/keywords?q=${keyword}`);
          this.cache[keyword] = keywords;
          storage.setItem("keywords_cache", this.cache);
        }

        this.setState({
          ...this.state,
          keyword,
          keywords,
        });
      }
    }, 300),
    onEnter: () => {
      fetchCatsImage();
    },
  });

  const suggestKeywords = new SuggestKeywords({
    $target,
    initialState: { keywords: this.state.keywords, cursor: -1 },
    onKeywordSelect: (keyword) => {
      console.log(keyword);
      this.setState({
        ...this.state,
        keyword,
        keywords: [], // 추천 검색어 배열 날리기
      });

      fetchCatsImage();
    },
  });

  const searchResults = new SearchResults({
    $target,
    initialState: this.state.catImages,
  });

  const fetchCatsImage = async () => {
    const { data } = await request(`/search?q=${this.state.keyword}`);

    this.setState({
      ...this.state,
      catImages: data,
      keywords: [],
    });
  };
}
