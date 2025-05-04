import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Feed from "./pages/feed/Feed";
import LogIn from "./pages/Auth/logIn/LogIn";
import SignUp from "./pages/Auth/signUp/SignUp";
import ResetPassword from "./pages/Auth/resetPassword/resetPassword";
import ForgotPassword from "./pages/Auth/forgotPassword/ForgotPassword";
import LoginWithEmail from "./pages/Auth/loginWithEmail/LoginWithEmail";
import VerifyOTP from "./pages/Auth/verifyOTP/VerifyOTP";
import CheckInbox from "./pages/Auth/checkInbox/CheckInbox";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout as the parent route */}
          <Route path="/" element={<Layout />}>
            {/* Nested pages */}
            <Route index element={<Feed />} /> {/* "/" */}
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="resetPassword" element={<ResetPassword />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="loginWithEmail" element={<LoginWithEmail />} />
            <Route path="verifyOTP" element={<VerifyOTP />} />
            <Route path="checkInbox" element={<CheckInbox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
