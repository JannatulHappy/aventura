import React, { useEffect, useState } from "react";
import "./ManageAllBooking.css";
import Menubar from "../Shared/Header/Menubar/Menubar";
import { Table,Button } from "react-bootstrap";
import axios from "axios";

const ManageAllBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch("https://secure-hamlet-63845.herokuapp.com/allBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [control]);

  //Handle Status
  const handleApprove = (id) => {
    setControl(false);
    const proceed = window.confirm(
      "Want to Status shipped the collection from Status Pending??"
    );
    if (proceed) {
      axios
        .put(`https://secure-hamlet-63845.herokuapp.com/approveBooking/${id}`)
        .then((result) => {
          if (result.data.modifiedCount) {
            setControl(true);
          }
        });
    }
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, u want to delete it?");
    if (proceed) {
      fetch(`https://secure-hamlet-63845.herokuapp.com/Managebooking/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(true);
            alert("Deleted successfully");
          }
        });
    }
  };
  return (
    <div>
      <Menubar></Menubar>

      <div className="my-booking">
        <div className="text-center my-4 fw-bold fs-2">
          All Booking : {bookings.length} Destinations
        </div>
        <div className="row text-center my-5">
          {bookings?.map((pd, index) => (
            <div className="col-12 ">
              <Table className="w-75  mx-auto" striped bordered hover>
                <thead className="fw-bold fs-5">
                  <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Destination</th>

                    <th>status</th>
                    <th>City</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody className="fw-bold">
                  <tr>
                    <td>{index}</td>
                    <td>{pd?.userName}</td>
                    <td>{pd.destinationName}</td>
                    <td>{pd.status}</td>
                    <td>{pd?.city}</td>
                    <td>{pd.address}</td>
                    <td>
                    <Button
                      variant="success"
                      className="text-black w-50 fw-bold"
                      onClick={() => handleApprove(pd._id)}
                    >
                      {pd?.status}
                    </Button>
                  </td>
                    <button
                      onClick={() => handleDelete(pd?._id)}
                      className="btn my-1 fw-bold fs-6 w-75 mx-auto bg-danger px-4"
                    >
                      Delete
                    </button>
                  </tr>
                </tbody>
              </Table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAllBooking;
