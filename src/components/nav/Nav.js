import './Nav.scss';
import { Link } from 'react-router-dom';

//지울내용
import { useContext } from 'react';
import AuthContext from '../../Context/authContext';
//

function Nav() {
  //지울내용
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const ClickHandler = () => {
    authContext.logout();
    console.log('로그아웃');
  };
  //

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
            <ul className="navList">
              {NAV_LIST.map(({ id, link, title }) => (
                <li key={id} className="navItems">
                  <Link to={link} className="navTitle">
                    {title}
                  </Link>
                </li>
              ))}
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
              {/* 수정 필요 내용 */}
              {!authContext.isLoggedIn && (
                <Link to="/login" className="loginTitle">
                  로그인
                </Link>
              )}
              {authContext.isLoggedIn && (
                <button onClick={ClickHandler} className="loginTitle">
                  로그아웃
                </button>
              )}
            </li>
            <li className="itemArr">KOREAN</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
const NAV_LIST = [
  {
    id: 1,
    link: '/',
    title: '제품',
  },
  {
    id: 2,
    link: '/',
    title: '선물추천',
  },
  {
    id: 3,
    link: '/',
    title: '다다일상',
  },
];
export default Nav;
