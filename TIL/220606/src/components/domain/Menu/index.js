import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          <Link to="/posts">포스트로</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
