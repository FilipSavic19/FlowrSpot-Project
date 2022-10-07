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
  const [openLogin, setOpenLogin] = useState(false);
  const [openProfile, setIsLogin] = useState(false);
  const [isLogged, setLogin] = useState(false);
  const setOpenModal = (boolean) => {
    setOpen(boolean);
  };
  const setOpenModalLogin = (boolean) => {
    setOpenLogin(boolean);
  };
  const setisLogin = (boolean) => {
    setIsLogin(boolean);
  };
  const setLogged = (boolean) => {
    setLogin(boolean);
  };
  return (
    <Router>
      <Navbar
        funct={setOpenModalLogin}
        func={setOpenModal}
        log={isLogged}
        openProfile={setIsLogin}
      />
      {open && (
        <Modal>
          <HomeCreateAccount func={setOpenModal} />
        </Modal>
      )}
      {openLogin && (
        <Modal>
          <HomeLogIn funct={setOpenModalLogin} funcLog={setLogged} />
        </Modal>
      )}
      {openProfile && (
        <Modal>
          <Profile funct={setisLogin} funcLog={setLogged} />
        </Modal>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
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
