import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import './PersonalAccount.css';
import NavTab from '../NavTab/NavTab';
import LogoutIcon from '../Icons/LogoutIcon';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

import crumbs from './crumbs.json'
import { tabData } from '../../utils/tabsData';

function PersonalAccount() {
  const { pathname } = useLocation();
  
  if (pathname === '/personal-account' || pathname === '/personal-account/') {
    return <Navigate to='/personal-account/favourites' replace/>
  }

  return ( 
    <main className='account'>
      <div className='account__wrapper'>
        <BreadCrumbs crumbs={crumbs}/>
        <div className='account__title-container'>
          <h2 className='account__title'>Личный кабинет</h2>
          <Link to='/' className='button-link'>Выйти <LogoutIcon/></Link>
        </div>
        <div className='account__tabs'>
          <nav>
            <ul className='account__tabs-list'>
              {
                tabData.map((tabEl, index) => (
                  <li key={index}>
                    <NavTab link={tabEl.link} text={tabEl.text} component={tabEl.svg} />
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <div className='account__content'>
          <Outlet/>
        </div>
      </div>
    </main>
  );
}

export default PersonalAccount;