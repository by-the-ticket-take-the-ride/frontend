import { Link, useMatch } from "react-router-dom";
import './NavTab.css'

function NavTab({ link, text, component: Component }) {
  const match = useMatch(link);
  const isTabActive = match ? false : true;

  return ( 
    <Link to={link} className={`nav-tab ${isTabActive ? '' : 'nav-tab_active'}`}>
      <Component disabled={isTabActive} />
      <span className='nav-tab__text'>{text}</span>
    </Link>
  );
}

export default NavTab;