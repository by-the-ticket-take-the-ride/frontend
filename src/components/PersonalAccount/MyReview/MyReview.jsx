import './MyReview.css'
import Review from "../Review/Review";
import { useContext, useState } from 'react';
import NotificationPageReview from '../NotificationPageReview/NotificationPageReview';
import { EventsContext } from '../../../constext/EventsContext';
import usePopupContext from '../../../hooks/usePopupContext';

function MyReview() {
  const {reviewData, setReviewData } = useContext(EventsContext);
  const {isPopupNotificationOpen, setIsPopupNotificationOpen} = usePopupContext();
  const [currentId, setСurrentId] = useState(null);

  return (
    <div className="my-review">
      <div className="my-review__wrapper">
      {
        reviewData?.length > 0 ? 
        reviewData?.map((review, id) => {
          function handleDelete ()  {
            const newReviewList = reviewData.filter(currentRev => {
              return currentRev.id !== currentId
            })
              localStorage.setItem('reviewData', JSON.stringify(
              newReviewList
            ));
            setReviewData((reviewData) => {
              return reviewData.filter(currentR => {
                return currentR.id !== currentId;
              })
            })
            setIsPopupNotificationOpen(!isPopupNotificationOpen)
          }
            return (
              <span key={id}>
                <Review currentId={currentId} setСurrentId={setСurrentId}  data={review} handleDelete={handleDelete}/>
              </span>
            )
          }) :
          <NotificationPageReview />
      }
      </div>
    </div>
  );
}

export default MyReview;