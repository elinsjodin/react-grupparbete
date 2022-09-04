import axios from "axios";
import { useEffect, useState } from "react";

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
      .get("http://localhost:3000/bookings/${date}")
      .then((response) => {
        setBackendData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //fetch booking by date from backend

  //FUNCTIONS in order you see them on screen

  return (
    <div>
      <BookingForm results={backendData} />
    </div>
  );
};
