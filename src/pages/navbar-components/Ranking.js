import "./Ranking.css";

function Ranking() {
  return (
    <container className="showingBox"> 
      <div className="selectCategory">여기는 Select 컴포넌트</div>
      <div className="filterdCategory">
        <button>전체</button>
        <button>잡화</button>
        <button>스포츠/아웃도어</button>
      </div>
      <ul className="showingProduct">
        <li>
          <p className="ranking">01</p>
          <div className="prod__box">
            <div className="img__box">
              <a> 
                사진
                <p className="tapmoney">
                  <span>탭머니 645원</span>
                </p>
              </a>
              <button className="drawer__btn">내쇼윈도</button>
            </div>
            <div className="info__box">
              <a>
                <p className="tit">슈펜</p>
                <p className="sub__tit">
                  <span>무료배송</span>
                  <span>슈탠다드 스니커즈 AFHC79A01(제휴셀러)</span>
                </p>
                <span className="per">
                  <b>
                    <em>35</em>
                    %
                  </b>
                </span>
                
                <span className="org-price">
                  <b>
                    <em>19900</em>
                  </b>
                  <i>원</i>
                </span>
                
                <span className="price">
                <b>
                    <em>12900</em>
                  </b>
                  <i>원</i>
                </span>
              </a>
              <button className="share__btn">공유하기</button>
              <div className="share__count">
                <div className="profile__list">이미지</div>
                <p className="count">7명 공유중</p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <p className="ranking">01</p>
          <div className="prod__box">
            <div className="img__box">
              <a> 
                사진
                <p className="tapmoney">
                  <span>탭머니 645원</span>
                </p>
              </a>
              <button className="drawer__btn">내쇼윈도</button>
            </div>
            <div className="info__box">
              <a>
                <p className="tit">슈펜</p>
                <p className="sub__tit">
                  <span>무료배송</span>
                  <span>슈탠다드 스니커즈 AFHC79A01(제휴셀러)</span>
                </p>
                <span className="per">
                  <b>
                    <em>35</em>
                    %
                  </b>
                </span>
                
                <span className="org-price">
                  <b>
                    <em>19900</em>
                  </b>
                  <i>원</i>
                </span>
                
                <span className="price">
                <b>
                    <em>12900</em>
                  </b>
                  <i>원</i>
                </span>
              </a>
              <button className="share__btn">공유하기</button>
              <div className="share__count">
                <div className="profile__list">이미지</div>
                <p className="count">7명 공유중</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </container>
    
    
    )
}

export default Ranking;
