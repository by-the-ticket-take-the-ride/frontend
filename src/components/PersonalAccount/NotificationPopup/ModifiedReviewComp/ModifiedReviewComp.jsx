import { useState } from "react";
import useFormValid from "../../../../hooks/useFormValid";
import Button from "../../../Buttons/Button/Button";
import ButtonCross from "../../../Buttons/ButtonCross/ButtonCross";
import FilterCheckbox from "../../../FilterCheckbox/FilterCheckbox";
import TicketReview from "../../TicketReview/TicketReview";
import "./ModifiedReviewComp.css";

function ModifiedReviewComp({ handleClose }) {
  const { checkboxValues, handleToggleChange } = useFormValid();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const handleCheckbox = (evt) => {
    handleToggleChange(evt);
    console.log("click");
    const { name, checked } = evt.target;
    // handleCheckboxShortmovies(checked);
    // handleValuesCache({ [name] : checked});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setIsSubmitSuccess(true);
  };
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
          <TicketReview typeModified={true} />
          <form onSubmit={handleSubmit} className="modified-review__from">
            <span className="modified-review__span-comment">Комментарий</span>
            <textarea
              className="modified-review__comment-input"
              name=""
              id=""
            ></textarea>

            <span className="modified-review__info-span">
              Подпись под отзывом
            </span>

            <div className="modified-review__autograph-wrapper">
              <h4 className="modified-review__autograph">Иван И.</h4>
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
