import { useContext, useEffect, useState } from "react";
import PenIcon from "../../Icons/PenIcon";
import SuccessIcon from "../../Icons/SuccessIcon";
import TrashIcon from "../../Icons/TrashIcon";
import TicketReview from "../TicketReview/TicketReview";
import "./Review.css";
import NotificationPopup from "../NotificationPopup/NotificationPopup";
import usePopupContext from "../../../hooks/usePopupContext";
import Button from "../../Buttons/Button/Button";
import DeleteReview from "../NotificationPopup/DeleteReviewComp/DeleteReview";
import { renderDate } from "../../../utils/supportFunction";
import StarRatingDisabled from "../StarRatingDisabled/StarRatingDisabled";
import useFormValid from "../../../hooks/useFormValid";
import { EventsContext } from "../../../constext/EventsContext";

function Review({ setСurrentId, data , handleDelete, setcloseNotif}) {
  const {isPopupNotificationOpen, setIsPopupNotificationOpen} = usePopupContext();
  const {inputValues, handleInputChange, resetFormValues} = useFormValid();
  const [isReviewModified, setIsReviewModified] = useState(false);
  const {reviewData, setReviewData} = useContext(EventsContext);
  const [isDeleteReview, setIsDeleteReview] = useState(false);

  const handleClose = () => {
    setIsPopupNotificationOpen(false)
    setIsDeleteReview(true);
  }
  
  const handleModified = () => {
    setIsReviewModified(!isReviewModified);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const currentReview = reviewData.find(review => {
      return review.id === data.id
    })
    currentReview.comment = inputValues?.comment
    
    setReviewData((reviewData) => {
      return reviewData.filter(review => {
        return review.id !== data.id;
      })
    })

    setReviewData((reviewData) => [
      ...reviewData,
      currentReview
    ])

    localStorage.setItem('reviewData', JSON.stringify(
      reviewData
    ));

    setIsReviewModified(!isReviewModified)
  }

  useEffect(() => {
    resetFormValues({
      comment: data.comment
    })
  }, [data]);


  return <>
    <article className="review">
      <TicketReview ticketData={data} />
      <div className="review__info">
        <div className="review__ui-group">
          <div className="review__ui-group-wrapper">
            <div className="review__ui-group-rating">
              <StarRatingDisabled rating={data?.rating} />
              <span className="review__ui-group-status">
                Опубликован <SuccessIcon />
              </span>
            </div>
            <p className="review__date">{`${renderDate(data?.dateEvent)} ${data?.dateEvent.slice(0,4)}`}</p>
          </div>
          <div className="review__editing-wrapper">
            <span onClick={handleModified} className="review__icon">
              <PenIcon />
            </span>
            <span onClick={() => {
                setСurrentId(data.id)
                setIsPopupNotificationOpen(true)
              }} className="review__icon">
              <TrashIcon />
            </span>
          </div>
        </div>
        {
          isReviewModified ? 
        <form onSubmit={handleSubmit} className="form-review">
          <textarea value={inputValues?.comment || ''} onChange={handleInputChange} className="form-review__comment-input" name="comment" id="comment" >
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
          {data?.comment}
        </p>
        }

      </div>
    </article>
    {isPopupNotificationOpen && <NotificationPopup>
      <DeleteReview handleClose={handleClose} handleDelete={handleDelete}/>
    </NotificationPopup>}
  </>
}

export default Review;
