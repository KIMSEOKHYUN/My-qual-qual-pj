import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <ul className="menu">
      <Link to="/category">
        <li>
          <a>카테고리</a>
        </li>
      </Link>

      <Link to="/showwindow">
        <li>
          <a>쇼윈도</a>
        </li>
      </Link>

      <Link to="/home">
        <li>
          <a>홈</a>
        </li>
      </Link>

      <Link to="/qupidshop">
        <li>
          <a>큐피드 샵</a>
        </li>
      </Link>

      <Link to="/myqualqual">
        <li>
          <a>마이콸콸</a>
        </li>
      </Link>
    </ul>
  );
}

export default MenuBar;
