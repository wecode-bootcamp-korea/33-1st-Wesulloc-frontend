import './Nav.scss';
import { Link } from 'react-router-dom';

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
              <i className="fa-solid fa-magnifying-glass" />
            </li>
            <li className="item">
              <i className="fa-solid fa-cart-shopping" />
            </li>
            <li className="item itemMore">
              <i className="fa-solid fa-ellipsis-vertical" />
            </li>
          </ul>
          <ul className="navDrop">
            <li className="item">
              <Link to="/" className="loginTitle">
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
