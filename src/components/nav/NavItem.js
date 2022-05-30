import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from './NavList';
import '../nav/NavItem.scss';

function NavItems() {
  const [currentMenuId, setCurrentId] = useState();

  return (
    <nav className="wesullocNav">
      <ul className="navList">
        {NAV_LIST.map(({ id, link, title, category }) => (
          <li
            onMouseEnter={() => setCurrentId(id)}
            onMouseLeave={() => setCurrentId()}
            key={id}
            className="navItems"
          >
            <Link to={link} className="navTitle">
              {title}
            </Link>
            <div className="dropDownMenu">
              {id === currentMenuId &&
                category.map(({ id, link, subcategory }) => (
                  <ul className="dropNavList" key={id}>
                    <Link to={link} className="navLink">
                      <li className="hghi">
                        {subcategory.map(text => {
                          return <li key={text}>{text}</li>;
                        })}
                      </li>
                    </Link>
                  </ul>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavItems;
