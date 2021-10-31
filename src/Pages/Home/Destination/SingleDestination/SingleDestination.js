import React from "react";
import "./SingleDestination.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const SingleDestination = (props) => {
  const {
    img,
    _id,
    destinationName,
    des,
    duration,
    rating,
    peopleReview,
    regularPrice,
    afterDiscount,
    discount,
  } = props.destination;

  return (
    <div className="col-lg-3 col-md-6 col-12 my-4">
      <div className=" singleDes">
        <div className="card  ">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title mb-3 fw-bold">{destinationName}</h5>
            <p className="card-text">{des.slice(0, 60)}</p>
            <div className="rating d-flex">
              {duration}
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              ></Rating>
              ({peopleReview})
            </div>
            <div>
              <p>
                from <del>{regularPrice} </del>
                <span className="discount-price"> {afterDiscount}</span>
              </p>
            </div>
            <div className="discount d-flex mb-1">
              <p>{discount}</p>
              <i className="fas fa-heart"></i>
            </div>
          </div>
          <Link to={`/destination/${_id}`}>
            <button className="book-now-btn">BOOK NOW </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleDestination;
