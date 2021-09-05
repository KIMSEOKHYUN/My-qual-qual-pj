import "./Footer.css";

function Footer() {
  return (
    <div className="footer_wrapper">
      <ul className="topBar">
        <li className="">로그인</li>
        <li className="">마이콸콸</li>
        <li className="">고객센터</li>
        <li className="">공지사항</li>
      </ul>

      <div className="bottomBar_wrapper">
        <div className="bottomBar">
          <div className="corporation_name">(주)이랜드시스템스</div>
          <div className="corporation_description">
            이랜드몰(상품판매처) 고객센터 : 1899-9500 <br />
            사업자등록번호 : 105-81-45524{" "}
            <a
              onClick={() => {
                alert("사업자정보확인");
              }}
            >
              사업자정보확인
            </a>{" "}
            <br />
            통신판매업 신고번호 : 제2007-서울금천-01793호 <br />
            서울시 금천구 가산동 IT프리미어타워 4층 ㈜이랜드시스템스
            <br /> 대표이사 : 문옥자
            <br /> 개인정보 보호책임자 : 민혁
            <br /> 입점문의 :{" "}
            <a
              onClick={() => {
                alert("이메일");
              }}
            >
              qualqual_md@eland.co.kr
            </a>
          </div>
          <div className="corporation_else">
            <a
              className="e-yong"
              onClick={() => {
                alert("사업자정보확인");
              }}
            >
              이용약관
            </a>
            <a
              className="gae-in"
              onClick={() => {
                alert("사업자정보확인");
              }}
            >
              개인정보처리방침
            </a>
            <a
              className="wun-young"
              onClick={() => {
                alert("사업자정보확인");
              }}
            >
              운영정책
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
