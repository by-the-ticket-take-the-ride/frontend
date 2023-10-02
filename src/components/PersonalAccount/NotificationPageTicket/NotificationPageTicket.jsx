import Button from '../../Buttons/Button/Button';
import './NotificationPageTicket.css'

function NotificationPageTicket() {
  return (
    <div className="notification-page-ticket">
      <h3 className="notification-page-ticket__title">Список билетов пуст</h3>
      <p className="notification-page-ticket__subtitle">Вы можете найти интересующие вас мероприятия на главной странице</p>
      <Button type='link' url='/' gradient={true} additionalClass={'notification-page-ticket__button'}>
        Посмотреть события
      </Button>
    </div>
  );
}

export default NotificationPageTicket;