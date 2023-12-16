import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import AddIdeas from "./coomponent/AddIdeas";
import IdeasList from "./coomponent/IdeasList";
import ViewIdeas from "./coomponent/ViewIdeas";
import CardsIdeas from "./coomponent/CardsIdeas";
import Students from "./pages/Students";
import MyIdeas from "./coomponent/MyIdeas";
import EditIdeas from "./coomponent/EditIdeas";
import AcceptsIdeas from "./coomponent/AcceptsIdeas";
import ShowStudents from "./coomponent/ShowStudents";
import SignUp from "./coomponent/SignUp";
import Login from "./coomponent/Login";
import Admin from "./pages/Admin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddIdeas" element={<AddIdeas />} />
        <Route path="/IdeasList" element={<IdeasList />} />
        <Route path="/ViewIdeas/:id" element={<ViewIdeas />} />
        <Route path="/CardsIdeas" element={<CardsIdeas />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/MyIdeas" element={<MyIdeas />} />
        <Route path="/EditIdeas/:id" element={<EditIdeas />} />
        <Route path="/AcceptsIdeas" element={<AcceptsIdeas />} />
        <Route path="/ShowStudents" element={<ShowStudents />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
