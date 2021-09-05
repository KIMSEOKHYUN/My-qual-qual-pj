import "./Reco_Comp.css";
import Sub_reco from "./Sub_reco";

function Reco_Comp({ source }) {
  return (
    <div className="reco_Comp_wrapper">
      <h3 className="title">{source.title}</h3>
      <div className="md_logo">
        <img className="md_img" src={source.md_logo} />
        {source.md_name}
      </div>

      <div className="main_img_wrapper">
        <img className="main_img" src={source.main_image} />
      </div>

      <div className="description_wrapper">
        <h2 className="description_title">{source.description_title}</h2>
        <p className="description_sub">{source.description_sub}</p>
        <a className="description_link" onClick={source.link}>
          더보러 가기
        </a>
      </div>

      <ul className="sub_reco_wrapper">
        {source.subRecommend.map((el) => {
          return <Sub_reco source={el} />;
        })}
      </ul>
    </div>
  );
}

export default Reco_Comp;
