import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/NotFound";
import { AdminPage } from "./components/pages/AdminPage";
import { BookingCanceled } from "./components/pages/BookingCanceled";
import { BookingPage } from "./components/pages/BookingPage";
import { CancelBooking } from "./components/pages/CancelBooking";
import { ConfirmationPage } from "./components/pages/ConfirmationPage";
import { ContactPage } from "./components/pages/ContactPage";
import { GuestPage } from "./components/pages/GuestPage";
import { Layout } from "./components/pages/Layout";
import { MainPage } from "./components/pages/MainPage";
import { SecondAdminPage } from "./components/pages/SecondAdminPage";

// Lägg till en admin/edit/:id här istället för secondadminpage?

//function for bookings

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="/bookings" element={<BookingPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/admin/edit/:id" element={<SecondAdminPage />}></Route>
          <Route path="/guest/edit/:id" element={<GuestPage />}></Route>
          <Route path="/confirm" element={<ConfirmationPage />}></Route>
          <Route
            path="/bookings/cancel/:id"
            element={<CancelBooking />}
          ></Route>
          <Route path="/booking-canceled" element={<BookingCanceled />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
