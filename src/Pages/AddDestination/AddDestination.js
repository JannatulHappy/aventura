import React from "react";
import { useForm } from "react-hook-form";

import Menubar from "../Shared/Header/Menubar/Menubar";

import Swal from "sweetalert2";

const AddDestination = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://secure-hamlet-63845.herokuapp.com/addDestination`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Good job!", "Your Destination has been added!");
        } else {
          alert("Try again");
        }
      });

    reset();
  };
  return (
    <div>
      <Menubar></Menubar>

      <div className="row my-5 ">
        <div className="col-12 col-lg-3 col-md-2"></div>
        <div className="col-12 col-lg-6 col-md-8 ">
          <div className="order-box  p-4 border d-flex justify-content-center align-items-center">
            <div className="booking-form px-3 py-5 ">
              <p className="fs-3 ps-3 fw-bold my-4">
                Add Your Wanted Destination
              </p>
              <form className="px-1" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="p-2 m-2"
                  placeholder="Add Destination name"
                  {...register("destinationName", { required: true })}
                />
                <br />
                <input
                  type="text"
                  className="p-2 m-2"
                  placeholder="Enter Description"
                  {...register("des", { required: true })}
                />
                <br />
                <input
                  type="text"
                  className="p-2 m-2"
                  placeholder="Price"
                  {...register("afterDiscount", { required: true })}
                />
                <br />
                <input
                  className="p-2 m-2"
                  placeholder="Image URL"
                  {...register("img", { required: true })}
                />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  className="w-50 mx-auto mt-3 px-3 py3 bg-secondary fw-bold fs-5  text-white btn "
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-2"></div>
      </div>
    </div>
  );
};

export default AddDestination;
