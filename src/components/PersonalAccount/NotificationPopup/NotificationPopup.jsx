import './NotificationPopup.css'
import image from '../../../assets/images/attention.svg';
import Button from '../../Buttons/Button/Button';
import ButtonCross from '../../Buttons/ButtonCross/ButtonCross';
import usePopupContext from '../../../hooks/usePopupContext';

function NotificationPopup({children}) {

  return (
    <div className='notification-popup'>
      {children}
    </div>
  );
}

export default NotificationPopup;