import './MyReview.css'
import Review from "../Review/Review";

function MyReview() {
  return (
    <div className="my-review">
      <div className="my-review__wrapper">
        <Review/>
      </div>
    </div>
  );
}

export default MyReview;