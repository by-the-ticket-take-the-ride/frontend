import { useState } from "react";
import PenIcon from "../../Icons/PenIcon";
import SuccessIcon from "../../Icons/SuccessIcon";
import TrashIcon from "../../Icons/TrashIcon";
import NotificationPageReview from "../NotificationPageReview/NotificationPageReview";
import StarRating from "../StarRating/StarRating";
import Ticket from "../Ticket/Ticket";
import TicketReview from "../TicketReview/TicketReview";
import "./Review.css";
import NotificationPopup from "../NotificationPopup/NotificationPopup";
import usePopupContext from "../../../hooks/usePopupContext";
import Button from "../../Buttons/Button/Button";
import DeleteReview from "../NotificationPopup/DeleteReviewComp/DeleteReview";

function Review() {
  const [state, setState] = useState(false);
  const {isPopupNotificationOpen, setIsPopupNotificationOpen} = usePopupContext();
  const [isReviewModified, setIsReviewModified] = useState(false);
  // const {setIsPopupNotificationOpen} = usePopupContext();
  const handleClose = () => {
    setIsPopupNotificationOpen(false)
  }

  
  const handleModified = () => {
    setIsReviewModified(!isReviewModified);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return <>
  {isPopupNotificationOpen && <NotificationPopup>
      <DeleteReview handleClose={handleClose}/>
    </NotificationPopup>}
  {state ? 
    <NotificationPageReview />
  : 
    <article className="review">
      <TicketReview />
      <div className="review__info">
        <div className="review__ui-group">
          <div className="review__ui-group-wrapper">
            <div className="review__ui-group-rating">
              <StarRating />
              <span className="review__ui-group-status">
                Опубликован <SuccessIcon />
              </span>
            </div>
            <p className="review__date">09 сентября 2023</p>
          </div>
          <div className="review__editing-wrapper">
            <span onClick={handleModified} className="review__icon">
              <PenIcon />
            </span>
            <span onClick={() => setIsPopupNotificationOpen(true)} className="review__icon">
              <TrashIcon />
            </span>
          </div>
        </div>
        {
          isReviewModified ? 
        <form onSubmit={handleSubmit} className="form-review">
          <textarea className="form-review__comment-input" name="" id="" >
          </textarea>
          <div className="form-review__wrapper">
            <Button additionalClass={'form-review__button'} type={'submit'} gradient={true}>
              Сохранить
            </Button>
            <Button onClick={handleModified} additionalClass={'form-review__button'} type={'button'} grayOutlined={true}>
              Отмена
            </Button>
          </div>
        </form> :
        <p className="review__comment">
          мропр оапрпрдлвоапжвалплоыа врмплоарвплоаврполаврплоаврпва
          лорпловапрловар пвалдыпрва лопиваолпитвалоитвадлиптаввпрпоглнгшлг
          шдшщдщшывлмаволпо рлаиртаполитаплоитапоиьт ттваломтаплидтпад
        </p>
        }

      </div>
    </article>
    }
  </>
}

export default Review;
