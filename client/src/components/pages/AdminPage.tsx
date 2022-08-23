import { useEffect, useState } from "react";
import axios from "axios";
// Byt till ex IBooking sen från models
interface IBackendData {
  bookings: string[];
}

export const AdminPage = () => {
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  useEffect(() => {
    if (backendData.bookings.length !== 0) {
      return;
    }
    fetchDataFromBackend();
  });

  //function that fetches the backend data using async await axios
  const fetchDataFromBackend = async () => {
    const response = await axios.get("/bookings");
    setBackendData(response.data);
    const bookings = response.data.bookings;
    return bookings;
  };

  return (
    <>
      {typeof backendData.bookings === "undefined" ? (
        <p>Loading...</p>
      ) : (
        //map through the backend data and display it
        backendData.bookings.map((booking, i) => <p key={i}>{booking}</p>)
      )}
      <div>Hello from AdminPage</div>;
    </>
  );
};
