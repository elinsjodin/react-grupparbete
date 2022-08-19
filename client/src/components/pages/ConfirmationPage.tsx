import { useEffect, useState } from "react";

interface IBackendData {
  bookings: string[];
}

export const ConfirmationPage = () => {
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  //Behöver hämta in specifik bokning med id
  // const { id } = useParams<{ id: string }>();

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
      <div>Hello from ConfirmationPage</div>;
    </>
  );
};
