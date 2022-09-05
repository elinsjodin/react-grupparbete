import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IBooking } from "../../models/IBooking";
import { BookingForm } from "./BookingForm";

//INTERFACES

//STATES

// props: { match: { params: { date: string; time: string }

export const BookingPage = () => {
  // state for backend data
  const [backendData, setBackendData] = useState<IBooking[]>([]);

  //FETCHES
  // fetches all bookings from backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/bookings")
      .then((response) => {
        setBackendData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const { id } = useParams<{ id: string }>();

  // const handleCancelBooking = () => {
  //   axios
  //     .delete("http://localhost:3000/bookings/cancel/" + id)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //fetch booking by date from backend

  //FUNCTIONS in order you see them on screen

  return (
    <div>
      <BookingForm results={backendData} />
    </div>
  );
};
