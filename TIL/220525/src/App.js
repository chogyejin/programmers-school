import { useState } from "react";
import Board from "./components/Board";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(0);
  const limit = 10;
  const offset = page * limit;
  const articles = new Array(77).fill().map((_, i) => ({
    id: i,
    title: `${i}번째 게시물`,
  }));

  return (
    <>
      <Board articles={articles.slice(offset, offset + limit)} />
      <Pagination
        defaultPage={0}
        limit={limit}
        total={articles.length}
        onChange={setPage}
      />
    </>
  );
}

export default App;
