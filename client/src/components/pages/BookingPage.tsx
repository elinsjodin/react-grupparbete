import axios from "axios";
import { useEffect, useState } from "react";
import { IBooking } from "../../models/IBooking";
import { BookingForm } from "./BookingForm";

export const BookingPage = () => {
  //state for all bookings in the database
  const [backendData, setBackendData] = useState<IBooking[]>([]);

  //fetches all bookings from the database
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

  return (
    <div>
      {/* props backendData down to BookingForm */}
      <BookingForm results={backendData} />
    </div>
  );
};
