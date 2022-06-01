import './Nav.scss';
import { Link } from 'react-router-dom';
import NavItems from './NavItem';

function Nav() {
  return (
    <header className="nav">
      <div className="navInnerBox">
        <div className="leftBox">
          <h1 className="wesullocLogo">
            <Link to="/" className="whiteLogoImg">
              <img
                className="whiteLogoImg"
                src="/images/logoWhite.png"
                alt="오설록 로고"
              />
            </Link>
          </h1>
          <nav className="wesullocNav">
            <NavItems />
          </nav>
        </div>

        <div className="rightBox">
          <ul className="navUtility">
            <li className="item">
              <i className="fa-solid fa-magnifying-glass" />
            </li>
            <li className="item">
              <i className="fa-solid fa-cart-shopping" />
            </li>
            <li className="item itemMore">
              <i className="fa-solid fa-ellipsis-vertical" />
              <ul className="dropBox1">
                <li className="dropItems">
                  <Link to="/" className="csCenter">
                    고객센터
                  </Link>
                </li>
                <li className="dropItems">
                  <Link to="/" className="searchStore">
                    매장찾기
                  </Link>
                </li>
                <li className="dropItems">
                  <Link to="/" className="order">
                    주문배송조회
                  </Link>
                </li>
                <li className="dropItems">
                  <Link to="/" className="pointCollect">
                    뷰티포인트 추후적립
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navDrop">
            <li className="item">
              <Link to="/login" className="loginTitle">
                로그인
              </Link>
            </li>
            <li className="itemArr">KOREAN</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Nav;
