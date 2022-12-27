import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Navbar from "./Pages/Auth/Share/Navbar";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route> 
        <Route path="/login" element={<Login></Login>}></Route> 
        <Route path="/signup" element={<Signup></Signup>}></Route> 
        <Route path="/profile" element={<Profile></Profile>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
