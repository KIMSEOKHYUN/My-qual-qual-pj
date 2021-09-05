import "./Rank_Comp.css";
import React, { useState } from 'react';


function Rank_Comp( {source} ) {
    const [showWindow, setShowWindow] = useState(0)
    const price = source.org_price - (source.org_price * (source.discount_rate * 0.01))
    const cur_price = Math.round(price / 100)*100
    const tap_money = cur_price * 0.05

    const showWindowClick = () => {
        setShowWindow(showWindow + 1)
    }

      
    return (
        <li className = "ranking_prod">
          <p className="ranking">{source.id}</p>
          <div className="prod__box">
            <div className="img__box">
              <a> 
                <img src = {source.prod_img} />
                <p className="tapmoney">
                  <span>탭머니{tap_money}원</span>
                </p>
              </a>
              <button className="drawer__btn">{source.show_window}</button>
            </div>
            <div className="info__box">
              <a>
                <p className="tit">{source.brand}</p>
                <p className="sub__tit">
                  <span>{source.ship_type}</span>
                  <span>{source.prod_name}</span>
                </p>
                <span className="per">
                  <b>
                    <em>{source.discount_rate}</em>
                    %
                  </b>
                </span>
                
                <span className="org__price">
                  <b>
                    <em>{source.org_price}</em>
                  </b>
                  <i>원</i>
                </span>
                
                <span className="price">
                <b>
                    <em>{cur_price}</em>
                  </b>
                  <i>원</i>
                </span>
              </a>
              <button onClick = {showWindowClick} className="share__btn">{source.share_img}</button>
              <div className="share__count">
                <div className="profile__list">{source.profile_img}</div>
                <p className="count">{showWindow}명 공유중</p>
              </div>
            </div>
          </div>
        </li>
    )
};

export default Rank_Comp;