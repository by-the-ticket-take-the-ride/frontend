import Button from '../../../Buttons/Button/Button';
import ButtonCross from '../../../Buttons/ButtonCross/ButtonCross';
import TicketReview from '../../TicketReview/TicketReview';
import './ModifiedReviewComp.css'

function ModifiedReviewComp({handleClose}) {
  return (
    <div className='modified-review'>
      <ButtonCross
        onClick={handleClose}
        black={true}
        additionalClass={"modified-review__cross-button"}
      />
      <h3 className='modified-review__title'>Отзыв о мероприятии</h3>
      <TicketReview typeModified={true}/>
      <form className='modified-review__from'>
        <span className='modified-review__span-comment'>Комментарий</span>
        <textarea className="modified-review__comment-input" name="" id="" >
        </textarea>

        <span className='modified-review__info-span'>
          Подпись под отзывом
        </span>

          <div className='modified-review__autograph-wrapper'>

            <h4 className='modified-review__autograph'>
              Иван И.
            </h4>
            <span>CHECKBOX</span>
          </div>

        <Button additionalClass={'modified-review__submit-button'} type={'submit'} gradient={true}>
          Оставить комментарий
        </Button>
      </form>
    </div>
  );
}

export default ModifiedReviewComp;