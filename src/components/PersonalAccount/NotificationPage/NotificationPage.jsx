import './NotificationPage.css'
import ticket from '../../../assets/images/ticket-img-gradient.png'
import HeartIcon from '../../Icons/HeartIcon';
import Button from '../../Buttons/Button/Button';

function NotificationPage() {
  return (
    <div className='notification-page'>
      <img className='notification-page__image' src={ticket} alt='Билет'/>

      <h3 className='notification-page__title'>Пока у вас нет избранных событий</h3>
      <div className='notification-page__wrapper'>
        <p className='notification-page__subtitle'>Сохраняйте понравившиеся события при помощи</p>
        <i className='notification-page__icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path d="M6.41919 13.451C6.41919 18.1659 10.3704 22.8032 16.6125 26.7876C16.845 26.9315 17.177 27.0864 17.4094 27.0864C17.6418 27.0864 17.9739 26.9315 18.2174 26.7876C24.4485 22.8032 28.3997 18.1659 28.3997 13.451C28.3997 9.53304 25.7102 6.76611 22.1243 6.76611C20.0767 6.76611 18.4166 7.74007 17.4094 9.23421C16.4244 7.75114 14.7421 6.76611 12.6946 6.76611C9.10864 6.76611 6.41919 9.53304 6.41919 13.451Z" fill="#EA3057"/>
          </svg>
        </i>
      </div>

      <Button type={'link'} url={'/'} additionalClass='notification-page__button' gradient={true}>Посмотреть события</Button>
    </div>
  );
}

export default NotificationPage;