import { NAV_LIST } from './NavList';
import './NavItem.scss';
import { useNavigate } from 'react-router-dom';
import '../nav/NavList';

function NavItems({ currentMenuId, setCurrentId }) {
  const navigate = useNavigate();
  //경로설정
  const moveToProduct = id => {
    const queryString = `?main_category=${id}`;
    navigate(`products${queryString}`);
  };

  const goToSubCategory = (id, subtitle) => {
    if (subtitle === '베스트') {
      const queryString = `?category=${id}`;
      navigate(`/products${queryString}`);
    } else if (subtitle === '티제품') {
      const subQueryString = `?category=${id + 2}`;
      navigate(`/products${subQueryString}`);
    }
    //티제품은 3부터시작
  };
  return (
    <div className="navList">
      {NAV_LIST.map(({ id, title, category }) => (
        <div
          key={id}
          onMouseEnter={() => setCurrentId(id)}
          className="navItems"
        >
          {title}

          <div className="dropDownMenu">
            <div className="dropNavListWarp">
              {id === currentMenuId &&
                category.map(({ id, subtitle, subcategory }) => (
                  <div
                    className="dropNavList"
                    key={id}
                    onClick={() => {
                      setCurrentId(id);
                      moveToProduct(id);
                    }}
                  >
                    {subtitle}
                    <ul>
                      {subcategory.map((subcategory, idx) => (
                        <li
                          key={id}
                          className="subNavList"
                          onClick={e => {
                            e.stopPropagation();
                            goToSubCategory(idx + 1, subtitle);
                          }}
                        >
                          {subcategory}
                        </li>
                      ))}
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
