import PenIcon from '../../Icons/PenIcon';
import SuccessIcon from '../../Icons/SuccessIcon';
import TrashIcon from '../../Icons/TrashIcon';
import StarRating from '../StarRating/StarRating';
import Ticket from '../Ticket/Ticket';
import './Review.css';

function Review() {
  return (
    <article className="review">
      <Ticket/>
      <div className='review__info'>
        <div className='review__ui-group'>
          <div className='review__ui-group-wrapper'>
            <div className='review__ui-group-rating'>
              <StarRating/>
              <span className='review__ui-group-status'>Опубликован <SuccessIcon/></span>

            </div>
            <p className='review__date'>09 сентября 2023</p>
          </div>
          <div className='review__editing-wrapper'>
            <span className='review__icon'>
              <PenIcon/>
            </span>
            <span className='review__icon'>

              <TrashIcon/>
            </span>
          </div>

        </div>
        <p className='review__comment'>
          мропр оапрпрдлвоапжвалплоыа врмплоарвплоаврполаврплоаврпва лорпловапрловар пвалдыпрва лопиваолпитвалоитвадлиптаввпрпоглнгшлг шдшщдщшывлмаволпо рлаиртаполитаплоитапоиьт
          ттваломтаплидтпад
        </p>
      </div>
    </article>
  );
}

export default Review;