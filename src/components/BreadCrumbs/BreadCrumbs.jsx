import { Link } from "react-router-dom";
import './BreadCrumbs.css';

function BreadCrumbs({ crumbs }) {
  const isLast = (index) => {
    return index === crumbs.length - 1;
  }
  const isFirst = (index) => {
    return index !== 0 ? true : false
  }

  return (
    <nav className="bread-crumbs">
      <ol className="bread-crumbs__list">
        {
          crumbs.map((crumb, id) => {
            const disabled = isLast(id) ? 'disabled' : '';
            const isActive = isLast(id)
            return (
              <li
                key={id}
                className="bread-crumbs__crumb"
              >
                {isFirst(id) && <i className="bread-crumbs__svg"></i>}
                {isActive ? 
                  <span 
                    className={`bread-crumbs__link ${disabled ? 'bread-crumbs__link_disabled' : ''}`}>
                      {crumb.name}
                    </span> :
                  <Link 
                    className={`bread-crumbs__link ${disabled ? 'bread-crumbs__link_disabled' : ''}`}
                    to={crumb.location}>
                    {crumb.name}
                  </Link>
                }
              </li>
            )})
        }
      </ol>
    </nav>
  )


}

export default BreadCrumbs;