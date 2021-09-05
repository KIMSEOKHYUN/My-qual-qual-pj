import dummyData from "../../dummyData";
import "./Recommend.css";
import Reco_Comp from "../components/Reco_Comp";

function Recommend() {
  return (
    <div className="recommend_wrapper">
      {dummyData.map((el) => {
        return <Reco_Comp source={el} />;
      })}
    </div>
  );
}

export default Recommend;
