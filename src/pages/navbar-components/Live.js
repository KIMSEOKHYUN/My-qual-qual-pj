import "./Live.css";

function Live() {
  return (

   <div className="live__container">
     <div className="liveIntro__box">
       <div className="liveIntro__img">로고</div>
       <div className="liveIntro__title">
         <p>실시간 혜택이 쏟아지는</p>
         <b>콸콸 쇼핑 라이브를 즐겨보세요!</b>
       </div>
     </div>

     <div className="livePreview__box">
       <div className="livePreview__title">
         <b>라이브 예고</b>
         <i>예고 로고</i>
       </div>
       <div className="livePreview__contents">
         <div className="contents__img">이미지</div>
         <div className="contents__text">
           <b>더욱 알차고 즐거운 라이브를 준비중입니다.</b>
           <p>기대해주세요!</p>
         </div>
       </div>
     </div>

     <div className="liveReview__box">
      <div className="liveReview__title">
          <b>라이브 다시보기</b>
          <i>다시보기 로고</i>
        </div>
    
      <div className="liveReview__contents">
        <a className="videdo__link">
          <div className="contents__video">비디오</div>
          <div className="contents__info">
            <p>09월 07일 12시05분까지 구매 가능</p>
            <b>추석 선물세트 기획 초특가!</b>
            <p>브랜드</p>
          </div>
        </a>
        </div>
     </div>


     <div className="liveCalender__box">
        <div className="liveCalender__title">
          <b>라이브캘린더</b>
          <i>캘린더 로고</i>
          <p>판매 기간이 지난 라이브는 표시되지 않습니다.</p>
        </div>

        <div className="liveCalender">가로줄 달력</div>
        <div className="liveContents">
          <i>이미지</i>
          <b>라이브가 없는 날이네요!</b>
          <p>다른 날짜를 선택해주세요!</p>
        </div>
     </div>
     
     
     <div className="footer">
        <ul className="footer__contents">
          <li>
            <a>로그인</a>
          </li>
          <li>
            <a>마이콸콸</a>
          </li>
          <li>
            <a>고객센터</a>
          </li>
          <li>
            <a>공지사항</a>
          </li>
        </ul>

        <div className="footer__eland">
          <div>
            <b>(주)이랜드시스템스</b>
          </div>
          <div>
          <p>이랜드몰(상품판매처)고객센터: 1899-9500</p>
          <p>사업자등록번호: 010-8606-6102</p>
          <p>통신판매업 신고번호: 000-202-30</p>
          <p>서울시 금천구 가산동 IT프리미어타워 4층 (주)이랜드시스템스</p>
          <p>대표이사: 김석현</p>
          <p>개인정보 보호책임자</p>
          <p>입점문의: seubo6102@naver.com</p>
          </div>
          <ul className="footer_info">
          <li>
            <a>이용약관</a>
          </li>
          <li>
            <a>개인정보처리방침</a>
          </li>
          <li>
            <a>운영정책</a>
          </li>
          </ul>
        </div>
     </div>
   </div>

  )
}

export default Live;
