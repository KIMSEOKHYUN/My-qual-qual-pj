import Rank_Comp from "../components/Rank_Comp";
import Footer from "../components/Footer";
import rankDummy from "../../rankDummy";
import "./Ranking.css";
import React, { useState } from 'react';

function Ranking() {
  const [choice, setChoice] = useState("전체")
  const category = ["전체", "패션", "푸드", "IT&전자제품", "건강&치료", "키즈&베이비"]
  const options = category.map(cate => {
    return <option value={cate}>{cate}</option>
  })

  const filterd = rankDummy.filter((value) => {
    if(choice === "전체") {
      return rankDummy;
    }

    if(choice === "패션") {
      return value.category === "fashion"}

    if(choice === "푸드") {
      return value.category === "food"
    }

    if(choice === "건강&치료") {
      return value.category === "health"
    }

    if(choice === "키즈&베이비") {
      return value.category === "kids"
    }
  })

  
  return (
  
    <div className = "coner_container">
      <div className="selectCategory">
        <p>{choice}</p>
        <div className="ranking__category">
        <i>옷이모티콘</i>
        <select onChange={(event)=>setChoice(event.target.value)}>{options}</select>
        </div>
      </div>
      <div className="filterdCategory">
        <button>전체</button>
        <button>잡화</button>
        <button>스포츠/아웃도어</button>
      </div>

      <ul className="showingProduct">
        {filterd.map((value) => {
          return <Rank_Comp source = { value } />
        })}
      
      </ul>

      <Footer />
    </div>


    )
}

export default Ranking;
