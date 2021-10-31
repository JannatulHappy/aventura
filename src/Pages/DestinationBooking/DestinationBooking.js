import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

import Menubar from "../Shared/Header/Menubar/Menubar";
import Rating from "react-rating";
import "./DestinationBooking.css";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
const DestinationBooking = () => {
  const { user } = useAuth();
  const { destinationId } = useParams();
  const [destination, setDestination] = useState({});
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    fetch(`https://secure-hamlet-63845.herokuapp.com/addBooking`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
            Swal.fire(
                'Good job!',
                'Your Booking has been added!',
               
              )
        } else {
          alert("Try again");
        }
      });
      
    reset()
  };

  useEffect(() => {
    fetch(`https://secure-hamlet-63845.herokuapp.com/singleDestination/${destinationId}`)
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, [destinationId]);
  const {
    countryName,
    destinationName,
    img,
    des,
    duration,
    discount,
    regularPrice,
    afterDiscount,
    rating,
    peopleReview,
    img2,
    img2Title,
    img3,
    img3Title,
    img4,
    img4Title,
    startingTitle,
    startingDes,
  } = destination;
  return (
    <div>
      <Menubar />
      <div className="booking-container">
        <div className="row top-part text-center ">
          <p className="fs-1 fw-bold mt-5">
            Welcome to Your Next Adventure Destination In {countryName}
          </p>

          <p className="fs-4 mt-3 fw-bold">{destinationName}</p>
          <hr className="hr text-center" />
        </div>
        <div className="row booking my-5 mx-auto">
           
          <div className="col-lg-7 col-md-12 col-12 d-flex booking-left border">
            <div className="row  left-container py-3 ">
              <div className="col-lg-6 col-md-6 col-12 p-2">
                <img src={img} className="img-fluid  mt-4 " alt="" />
              </div>
              <div className="col-lg-6 col-md-6 col-12 ">
                <div className="discount fw-bold ps-2  text-center my-3 py-2">
                  <p className="py-2">{discount}</p>
                </div>
                <h5 className="card-title mb-3 fw-bold">{destinationName}</h5>

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

                <p className="card-text">{des}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-12 booking-right">
         
            <div className="order-box p-4 border d-flex justify-content-center align-items-center">
              <div className="booking-form  ">
              <p className="fs-3 ps-3 fw-bold my-4">Book Your Destinations</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                 

                  <input
                    type="text"
                    className="p-2 m-2"
                    defaultValue={user.displayName}
                    {...register("userName", { required: true })}
                  />
                  <br />
                  <input
                    type="email"
                    className="p-2 m-2"
                    defaultValue={user.email}
                    {...register("userEmail", { required: true })}
                  />
                  <br />
                  <input
                    type="text"
                    className="p-2 m-2"
                    defaultValue={destinationName}
                    {...register("destinationName", { required: true })}
                  />
                  <br />

                  <input
                    type="text"
                    className="p-2 m-2"
                    defaultValue={afterDiscount}
                    {...register("price", { required: true })}
                  />
                  <br />
                  <input
                    className="p-2 m-2"
                    placeholder="Address"
                    {...register("address", { required: true })}
                  />
                  <br />
                  <input
                    className="p-2 m-2"
                    placeholder="City"
                    {...register("city", { required: true })}
                  />
                  <br />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <input className="w-50 mx-auto px-3 py3 bg-secondary fw-bold fs-5  text-white btn " type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row bottom-part container mx-auto">
          <p className="fs-3 fw-bold text-secondary">Places You’ll See</p>
          <div className="col-lg-7 col-md-12 col-12 d-flex middle-part">
            <div className="m-2 img">
              <img src={img2} alt="" />
              <p className="fs-6 fw-bold my-3">{img2Title}</p>
            </div>
            <div className="m-2 img">
              <img src={img3} alt="" />
              <p className="fs-6 fw-bold my-3">{img3Title}</p>
            </div>
            <div className="m-2 img">
              <img src={img4} alt="" />
              <p className="fs-6 my-3 fw-bold">{img4Title}</p>
            </div>
          </div>
        </div>
        <div className="row container mx-auto">
          <div className="col-12 py-5">
            <p className="fs-1   fw-bold">{startingTitle}</p>
            <p className="text-secondary mt-4 fw-bold">
              {startingDes} Happy Journey!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationBooking;
