import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FavoriteFlowers from "./Pages/FavoriteFlowers";
import FlowerDetail from "./Pages/FlowerDetail";
import FlowerList from "./Pages/FlowerList";
import HomeCreateAccount from "./Pages/HomeCreateAccount";
import HomeLogIn from "./Pages/HomeLogIn";
import HomePage from "./Pages/HomePage";
import NewSighting from "./Pages/NewSighting";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import SightingDetail from "./Pages/SightingDetail";
import SightingList from "./Pages/SightingList";
import User from "./Pages/User";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

const App = () => {
  const [open, setOpen] = useState(false);
  const setOpenModal = (boolean) => {
    setOpen(boolean);
  };
  return (
    <Router>
      <Navbar func={setOpenModal} />
      {open && (
        <Modal>
          <HomeCreateAccount func={setOpenModal} />
        </Modal>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homelogin" element={<HomeLogIn />} />
        <Route path="/homecreateaccount" element={<HomeCreateAccount />} />
        <Route path="/flowerlist" element={<FlowerList />} />
        <Route path="/flowerdetail" element={<FlowerDetail />} />
        <Route path="/favoriteflowers" element={<FavoriteFlowers />} />
        <Route path="/newsighting" element={<NewSighting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sightingdetail" element={<SightingDetail />} />
        <Route path="/sightinglist" element={<SightingList />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
