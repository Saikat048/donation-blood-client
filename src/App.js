import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Navbar from "./Pages/Share/Navbar";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home/Home"; 
import RequireAuth from "./Pages/Auth/RequireAuth";
import Info from "./Pages/Info/Info";
import UpdateProfile from "./Pages/Profile/UpdateProfile";
import MyProfile from "./Pages/Profile/MyProfile";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<RequireAuth>
          <Home></Home>
        </RequireAuth>}></Route>
        <Route path="/" element={<Info></Info>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/updateprofile" element={<RequireAuth>
          <UpdateProfile></UpdateProfile>
        </RequireAuth>}></Route>
        <Route path="/myprofile" element={<RequireAuth>
          <MyProfile></MyProfile>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
