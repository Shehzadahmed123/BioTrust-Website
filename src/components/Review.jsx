import React from "react";

const Review = () => {
  const starCount = 5;

  // Star SVG icon
  const starSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="36"
      fill="currentColor"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
  return (
    <>
      <div className="container-fluid review-bg-color ">
        <div className="row  text-white">
          <div className="col-lg-4 col-md-4 border-right border-buttom d-flex flex-column">
            <h3 className="review-heading-text">FEATURED CUSTOMER REVIEW</h3>
            <p className="review-paragraph-text">Read more reviews</p>
          </div>
          
          <div className="col-lg-8 col-md-8 text-center">
            <p className="review-stars">
              {[...Array(starCount)].map((_, index) => (
                <span className="" key={index}>
                  {starSvg}
                </span>
              ))}
            </p>
            <p className="review-description">
            "I love it! No taste or smell. I put it in my coffee first thing. Cuts my hunger and gives me energy."
            <br/>Jacqueline T.<br/><strong style={{color:'#209a0d'}}> Verified Buyer</strong>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
