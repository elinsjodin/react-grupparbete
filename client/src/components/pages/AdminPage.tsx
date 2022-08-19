import { useEffect, useState } from "react";

// Byt till ex IBooking sen från models
interface IBackendData {
  bookings: string[];
}

export const AdminPage = () => {
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

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
