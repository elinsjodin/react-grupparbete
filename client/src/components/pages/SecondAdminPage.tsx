import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBooking } from "../../models/IBooking";
import { AdminForm } from "./AdminForm";

export const SecondAdminPage = () => {
  //state for all bookings in the database
  const [backendData, setBackendData] = useState<IBooking[]>([]);

  //id
  // get id from useParams
  const { id } = useParams<{ id: string }>();

  //get all booking with id from url params
  useEffect(() => {
    axios
      .get(`http://localhost:3000/admin/${id}`)
      .then((response) => {
        setBackendData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //fetches all bookings from the database
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/bookings")
  //     .then((response) => {
  //       setBackendData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return <AdminForm results={backendData} />;
};
