import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import ResetPassword from "./components/Auth/ResetPassword";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Login from "./components/Auth/Login";
import MainLayout from "./components/Common/MainLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/reset-password' element={ <ResetPassword /> } />
          <Route path='/forgot-password' element={ <ForgotPassword /> } />
          <Route path="/admin" element={ <MainLayout /> }>
            <Route index element= {<DashBoard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
