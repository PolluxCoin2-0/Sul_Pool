import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import ConfirmResetPassword from "./pages/Auth/ConfirmResetPassword";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import Details from "./pages/DetailPage/Details";

function App() {

  return (
    <div>
      <Router>
      <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="dark"
            newestOnTop={true}
            pauseOnFocusLoss
            toastClassName="custom-toast"
          />
        <Routes>
       
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/confirmpassword" element={<ConfirmResetPassword/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/details" element={<Details/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
