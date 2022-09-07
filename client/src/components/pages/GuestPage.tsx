import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IGuest } from "../../models/IBooking";
import { GuestForm } from "./GuestForm";

export const GuestPage = () => {
  //state for all bookings in the database
  const [backendData, setBackendData] = useState<IGuest[]>([]);

  //id
  // get id from useParams
  const { id } = useParams<{ id: string }>();

  //get all booking with id from url params
  useEffect(() => {
    axios
      .get(`http://localhost:3000/admin/edit/guest/${id}`)
      .then((response) => {
        setBackendData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <GuestForm results={backendData} />;
};
