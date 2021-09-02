import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./pages/NavBar";
import MenuBar from "./pages/MenuBar";
import Page from "./pages/Page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <div className="logo-wrapper">
            <span> 콸콸로고 </span>
          </div>

          <div className="else-wrapper">
            <span> 검색</span>
            <span> 장바구니</span>
          </div>
        </div>

        <NavBar />

        <Page />

        <MenuBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
