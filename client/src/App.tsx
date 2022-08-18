import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/NotFound";
import { AdminPage } from "./components/pages/AdminPage";
import { BookingPage } from "./components/pages/BookingPage";
import { ConfirmationPage } from "./components/pages/ConfirmationPage";
import { ContactPage } from "./components/pages/ContactPage";
import { Layout } from "./components/pages/Layout";
import { MainPage } from "./components/pages/MainPage";
import { SecondAdminPage } from "./components/pages/SecondAdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route index element={<BookingPage />}></Route>
          <Route index element={<ContactPage />}></Route>
          <Route index element={<AdminPage />}></Route>
          <Route element={<SecondAdminPage />}></Route>
          <Route element={<ConfirmationPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
