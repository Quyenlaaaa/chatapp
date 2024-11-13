import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import RoomList from "./pages/roomList/RoomList";
import Room from "./pages/room/room";
import NewRoom from "./pages/newRoom/NewRoom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/admin" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/newroom" element={<NewRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;