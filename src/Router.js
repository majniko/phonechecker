import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddPhone } from "./pages/addPhone/AddPhone";
import { Login } from "./pages/login/Login";
import { PhoneList } from "./pages/PhoneList";
import { Root } from "./pages/root/Root";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="login" element={<Login />} />
          <Route path="phone-list" element={<PhoneList />} />
          <Route path="add-phone" element={<AddPhone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
