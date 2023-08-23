import { Link, useMatch } from "react-router-dom";
import './NavTab.css'

function NavTab({ link, text, component: Component }) {
  const match = useMatch(link);

  return ( 
    <Link to={link} className={`nav-tab ${match ? 'nav-tab_active' : ''}`}>
      <Component disabled={!match} />
      <span className='nav-tab__text'>{text}</span>
    </Link>
  );
}

export default NavTab;