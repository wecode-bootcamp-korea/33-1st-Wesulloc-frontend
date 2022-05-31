import { useState } from 'react';
import { NAV_LIST } from './NavList';
import '../nav/NavList';

function NavItems() {
  const [currentMenuId, setCurrentId] = useState();

  return (
    <div className="navList">
      {NAV_LIST.map(({ id, title, category }) => (
        <div
          onMouseEnter={() => setCurrentId(id)}
          onMouseLeave={() => setCurrentId()}
          key={id}
          className="navItems"
        >
          {title}

          <div className="dropDownMenu">
            <div className="dropNavListWarp">
              {id === currentMenuId &&
                category.map(({ id, subtitle, subcategory }) => (
                  <div className="dropNavList" key={id}>
                    {subtitle}
                    <ul>
                      <li className="subNavList">{subcategory}</li>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavItems;
