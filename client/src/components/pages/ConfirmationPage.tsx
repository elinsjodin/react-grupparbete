import { useEffect, useState } from "react";
import { Loader } from "../Loader";

interface IBackendData {
  bookings: string[];
}

export const ConfirmationPage = () => {
  const [backendData, setBackendData] = useState<IBackendData>({
    bookings: [],
  });

  const [loading, setLoading] = useState(true);

  //Behöver hämta in specifik bokning med id
  // const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <>
      {typeof backendData.bookings === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.bookings.map((booking, i) => <p key={i}>{booking}</p>)
      )}
      <div>Hello from ConfirmationPage</div>
      {loading ? <Loader loading={loading} /> : null}
    </>
  );
};
