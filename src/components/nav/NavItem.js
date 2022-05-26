import './NavItem.scss';
import { Link } from 'react-router-dom';

function NavItems() {
  return (
    <nav className="wesullocNav">
      <ul className="navList">
        {NAV_LIST.map(({ id, link, title, catergory }) => (
          <li key={id} className="navItems">
            <Link to={link} className="navTitle">
              {title}
            </Link>
            {catergory.map(e => {})}
          </li>
        ))}
      </ul>
    </nav>
  );
}
const NAV_LIST = [
  {
    id: 1,
    link: '/',
    title: '제품',
    catergory: ['베스트', '위클리베스트', '티푸드'],
  },
  {
    id: 2,
    link: '/',
    title: '선물추천',
    catergory: [
      '티세트',
      '명차',
      '녹차/말차',
      '발효차/말차',
      '블렌지드티',
      '허브티',
    ],
  },
  {
    id: 3,
    link: '/',
    title: '다다일상',
    catergory: ['베스트', '티제품', '티푸드', '티웨어', '라이프스타일'],
  },
];
export default NavItems;
