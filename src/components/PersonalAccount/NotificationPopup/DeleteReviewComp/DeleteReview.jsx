import "./DeleteReview.css";
import image from '../../../../assets/images/attention.svg';
import ButtonCross from "../../../Buttons/ButtonCross/ButtonCross";
import Button from "../../../Buttons/Button/Button";

function DeleteReview({handleClose , handleDelete}) {
  
  return (
    <div className="delete-review">
      <ButtonCross
        onClick={handleClose}
        black={true}
        additionalClass={"delete-review__cross-button"}
      />
      <img className="delete-review__img" src={image} alt="Предупреждение" />
      <h3 className="delete-review__title">
        Вы уверены, что хотите удалить отзыв?
      </h3>
      <div className="delete-review__wrapper">
        <Button
          additionalClass={"delete-review__button"}
          type={"button"}
          gradient={true}
          onClick={() => {
            handleDelete()
          }}
        >
          Удалить
        </Button>
        <Button
          onClick={handleClose}
          additionalClass={"delete-review__button"}
          type={"button"}
          primary={true}
        >
          Отмена
        </Button>
      </div>
    </div>
  );
}

export default DeleteReview;
