import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBooking } from "../../models/IBooking";

import { SecondAdminForm } from "./SecondAdminForm";

export const SecondAdminPage = () => {
  const [backendData, setBackendData] = useState<IBooking[]>([]);

  // get id from useParams
  const { id } = useParams<{ id: string }>();

  //get all booking with id from url params
  useEffect(() => {
    axios
      .get(`http://localhost:3000/admin/edit/${id}`)
      .then((response) => {
        setBackendData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <SecondAdminForm results={backendData} />;
};
