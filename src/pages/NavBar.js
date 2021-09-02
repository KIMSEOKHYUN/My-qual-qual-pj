import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav">
      <Link to="/recommend">
        <li>추천</li>
      </Link>

      <Link to="/ranking">
        <li>랭킹</li>
      </Link>

      <Link to="/experimentdeal">
        <li>체험딜</li>
      </Link>

      <Link to="/live">
        <li>라이브</li>
      </Link>

      <Link to="/togetherroom">
        <li>공구방</li>
      </Link>

      <Link to="/retailshop">
        <li>리테일샵</li>
      </Link>

      <Link to="/brand">
        <li>브랜드</li>
      </Link>
    </ul>
  );
}

export default NavBar;
