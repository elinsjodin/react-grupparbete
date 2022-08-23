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
    //if data is not found, fetch data from backend
    axios;
    if (backendData.bookings.length === 0) {
      axios.get("/bookings").then((res) => {
        setBackendData(res.data);
      });
    }
    // set data to backend
    else {
      setBackendData(backendData);
    }
  }),
    [backendData.bookings.length];

  return (
    <>
      {typeof backendData.bookings === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.bookings.map((booking, i) => <p key={i}>{booking}</p>)
      )}
      <div>Hello from AdminPage</div>;
    </>
  );
};
