import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Navbar from "./Pages/Share/Navbar";
import Signup from "./Pages/Auth/Signup";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import RequireAuth from "./Pages/Auth/RequireAuth";
import Info from "./Pages/Info/Info";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<RequireAuth>
          <Home></Home>
        </RequireAuth>}></Route>
        <Route path="/" element={<Info></Info>}></Route>
        {/* <Route path="/info" element={<Info></Info>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/profile" element={<RequireAuth>
          <Profile></Profile>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
