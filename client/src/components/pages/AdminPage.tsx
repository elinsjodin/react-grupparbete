import { useEffect, useState } from "react";
import axios from "axios";
import { AdminForm } from "../pages/AdminForm";
import { IBooking } from "../../models/IBooking";
import { IGuest } from "../../models/IBooking";

export const AdminPage = () => {
  //state for all bookings in the database
  const [backendData, setBackendData] = useState<IBooking[]>([]);
  const [backendGuestData, setBackendGuestData] = useState<IGuest[]>([]);

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

  //fetches all guests from the database
  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/guests")
      .then((response) => {
        setBackendGuestData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AdminForm results={backendData} guestResults={backendGuestData} />
    </>
  );
};
