import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import ConfirmResetPassword from "./pages/Auth/ConfirmResetPassword";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/confirmpassword" element={<ConfirmResetPassword/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
