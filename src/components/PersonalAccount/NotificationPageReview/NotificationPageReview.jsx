import Button from "../../Buttons/Button/Button";
import './NotificationPageReview.css'

function NotificationPageReview() {
  return (
    <div className="notification-page-review">
      <h3 className="notification-page-review__title">Пока вы не оставили отзывов</h3>
      <p className="notification-page-review__subtitle">Найдите интересные события, чтобы иметь возможность оставлять отзывы</p>
      <Button type='link' url='/' gradient={true} additionalClass={'notification-page-review__button'}>
        Посмотреть события
      </Button>
    </div>
  );
}

export default NotificationPageReview;