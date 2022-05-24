import './Nav.scss';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <header className="wesullocHead">
      <div className="navInnerBox">
        <div className="leftBox">
          <h1 className="wesullocLogo">
            <Link to="/" className="grayLogo">
              <img
                className="grayLogoImg"
                src="/images/logoGray.png"
                alt="오설록 로고"
              />
            </Link>
          </h1>
          <nav className="wesullocNav">
            <ul className="navList">
              <li className="navItems">
                <Link to="/" className="navTitle">
                  제품
                </Link>
              </li>
              <li className="navItems">
                <Link to="/" className="navTitle">
                  선물추천
                </Link>
              </li>
              <li className="navItems">
                <Link to="/" className="navTitle">
                  다다일상
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="rightBox">
          <ul className="navUtility">
            <li className="item">
              <i class="fa-solid fa-magnifying-glass" />
            </li>
            <li className="item">
              <i class="fa-solid fa-cart-shopping" />
            </li>
            <li className="item itemMore">
              <i class="fa-solid fa-ellipsis-vertical" />
            </li>
          </ul>
          <ul className="navDrop">
            <li className="item">
              <Link to="/" className="loginTitle">
                로그인
              </Link>
            </li>
            <li className="itemArr">
              KOREAN
              <span className="iconDrop" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
