import { useState, useContext } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import NavItems from './NavItem';
import AuthContext from '../../Context/authContext';

function Nav() {
  const [currentMenuId, setCurrentId] = useState();
  const authContext = useContext(AuthContext);

  return (
    <header className="nav" onMouseLeave={() => setCurrentId()}>
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
            <NavItems
              currentMenuId={currentMenuId}
              setCurrentId={setCurrentId}
            />
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
                <li className="dropItems">고객센터</li>
                <li className="dropItems">매장찾기</li>
                <li className="dropItems">주문배송조회</li>
                <li className="dropItems">뷰티포인트 추후적립</li>
              </ul>
            </li>
          </ul>
          <ul className="navDrop">
            {!authContext.isLoggedIn && (
              <li className="item">
                <Link to="/login" className="loginTitle">
                  로그인
                </Link>
              </li>
            )}
            {!authContext.isLoggedIn && (
              <li className="dropItems">
                <Link to="/signup" className="loginTitle2">
                  회원가입
                </Link>
              </li>
            )}
            {authContext.isLoggedIn && (
              <li className="item">
                <button
                  className="logOut"
                  onClick={() => {
                    authContext.logout();
                  }}
                >
                  로그아웃
                </button>
              </li>
            )}
          </ul>
          <ul className="lang">
            <li className="itemArr">KOREAN</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Nav;
