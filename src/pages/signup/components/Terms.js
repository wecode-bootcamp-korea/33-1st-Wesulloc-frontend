import AgreementList from './AgreementList';
import './Terms.scss';

const Terms = () => {
  const checkAllHandler = () => {};

  const linkClickHandler = event => {
    event.preventDefault();
  };

  return (
    <div className="terms">
      <section>
        <div className="title">
          <div className="iconWrapper">
            <i className="fa-solid fa-clipboard-check" />
          </div>
          <div className="textWrapper">
            <p>이용약관</p>
            <p>위설록</p>
          </div>
        </div>
        <div className="content">
          <div className="agreeAll">
            <input id="checkAll" type="checkbox" onChange={checkAllHandler} />
            <label htmlFor="checkAll">
              <div>
                <img src="/images/iconCheckWhite.png" alt="check" />
              </div>
              전체 동의하기
            </label>
          </div>
          <div className="scrollSection">
            <div className="description">
              <p>
                전체동의는 위설록의 서비스 동의를 포함하고 있습니다. 전체동의는
                선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한 동의를
                거부해도 서비스 이용이 가능합니다.
              </p>
            </div>
            <div className="description">
              <div className="account">
                <div>
                  <i className="fa-solid fa-user" />
                  <p>wesulloc@wecode.co.kr</p>
                </div>
                <a href="/" onClick={linkClickHandler}>
                  계정변경
                </a>
              </div>
              <p>
                위설록 서비스 제공을 위해 회원번호와 함께 개인정보가 제공됩니다.
                보다 자세한 개인정보 제공항목은 동의 내용에서 확인하실 수
                있습니다. 정보는 서비스 탈퇴 시 또는 제공목적 달성 후
                파기됩니다.
              </p>
            </div>
            <div>
              <p>위설록 서비스 동의</p>
              <AgreementList />
            </div>
          </div>
        </div>
        <div className="buttonWrapper">
          <button>동의하고 계속하기</button>
        </div>
      </section>
    </div>
  );
};

export default Terms;
