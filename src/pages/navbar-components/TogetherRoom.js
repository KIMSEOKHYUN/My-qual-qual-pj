import Footer from "../components/Footer";
import TogetherRoom_compo from "../components/TogetherRoom_compo";
import "./TogetherRoom.css";

function TogetherRoom() {
  return (
    <div className="wrapper">
      <div className="together_topbar">
        <div>공구방 특가</div>
        <div>공구방으로 더 특별한 혜택</div>
      </div>

      <TogetherRoom_compo />

      <Footer />
    </div>
  );
}

export default TogetherRoom;
