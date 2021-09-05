import "./Sub_reco.css";
import { useState } from "react";

function Sub_reco({ source }) {
  const [shareCount, setSharecount] = useState(0);

  const handleClick = () => {
    setSharecount(shareCount + 1);
  };

  return (
    <li className="subRecommend">
      <div className="sub_img_wrapper">
        <img className="sub_img" src={source.image} />
      </div>

      <div className="sub_description_wrapper">
        <div className="sub_brand">{source.brand}</div>

        <div className="sub_title">{source.title}</div>

        <div className="sub_cost_wrapper">
          <span className="sub_saleRate">{source.saleRate}</span>
          <span className="sub_beforeSale"> {source.beforeSale}</span>
          <span className="sub_cost"> {source.cost}</span>
        </div>
        <div className="share">{shareCount}명</div>
      </div>

      <div className="sub_button_wrapper">
        <button
          className="share"
          onClick={() => {
            handleClick();
          }}
        >
          공유
        </button>
      </div>
    </li>
  );
}

export default Sub_reco;
