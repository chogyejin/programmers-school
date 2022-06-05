import { useState } from "react";
import EmojiList from "./components/EmojiList";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import emojiJson from "./data/emoji.json";

function App() {
  const [keyword, setKeyword] = useState(""); // setKeyword는 SearchBox의 onChange에 의해 변화

  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} keyword={keyword} />
    </div>
  );
}

export default App;
