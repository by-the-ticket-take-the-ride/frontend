import { useContext, useEffect, useState } from "react";
import useFormValid from "../../../../hooks/useFormValid";
import Button from "../../../Buttons/Button/Button";
import ButtonCross from "../../../Buttons/ButtonCross/ButtonCross";
import FilterCheckbox from "../../../FilterCheckbox/FilterCheckbox";
import TicketReview from "../../TicketReview/TicketReview";
import "./ModifiedReviewComp.css";
import { EventsContext } from "../../../../constext/EventsContext";
import useUserContext from "../../../../hooks/useUserContext";
import StarRating from "../../StarRating/StarRating";

function ModifiedReviewComp({ handleClose }) {
  const { checkboxValues, handleToggleChange, inputValues, handleInputChange, handleRating } = useFormValid();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const {currentReviewData, reviewData, setReviewData} = useContext(EventsContext);
  const {currentUser} = useUserContext();
  const handleCheckbox = (evt) => {
    handleToggleChange(evt);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setReviewData(() => [
      ...reviewData,
      {
        id: Date.now(),
        nameEvent: currentReviewData.nameEvent,
        dateEvent: currentReviewData.dateEvent,
        image: currentReviewData.image,
        rating: inputValues.rating,
        comment: inputValues.commentReview
      }
    ])
    setIsSubmitSuccess(true);
  };

  useEffect(() => {
    localStorage.setItem('reviewData', JSON.stringify(reviewData));
  },[reviewData]);

  return (
    <div className="modified-review">
      <ButtonCross
        onClick={handleClose}
        black={true}
        additionalClass={"modified-review__cross-button"}
      />
      {!isSubmitSuccess ? (
        <>
          <h3 className="modified-review__title">Отзыв о мероприятии</h3>
          <div className="modified-review__wrapper">
            <TicketReview typeModified={true} ticketData={currentReviewData}/>
              <div>
                <p className="modified-review__rating-title">Ваша оценка</p>
                <StarRating handleRating={handleRating}/>
              </div>
          </div>
          <form onSubmit={handleSubmit} className="modified-review__from">
            <span className="modified-review__span-comment">Комментарий</span>
            <textarea
              className="modified-review__comment-input"
              name="commentReview"
              id="commentReview"
              value={inputValues.commentReview}
              onChange={handleInputChange}
            ></textarea>

            <span className="modified-review__info-span">
              Подпись под отзывом
            </span>

            <div className="modified-review__autograph-wrapper">
              <h4 className="modified-review__autograph">{currentUser?.username}</h4>
              <FilterCheckbox
                handleChange={handleCheckbox}
                checked={checkboxValues.autograph}
              />
            </div>

            <Button
              additionalClass={"modified-review__submit-button"}
              type={"submit"}
              gradient={true}
            >
              Оставить комментарий
            </Button>
          </form>
        </>
      ) : (
        <div className="modified-review__notification">
          <h3 className="modified-review__title modified-review__title_type_notification">
            Отзыв отправлен!
          </h3>
          <p className="modified-review__subtitle">
            Отзыв станет доступен, когда пройдет модерацию. Обычно это занимает
            до 2х рабочих дней
          </p>
        </div>
      )}
    </div>
  );
}

export default ModifiedReviewComp;
