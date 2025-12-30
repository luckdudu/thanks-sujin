import React from 'react'
import Main from "./pages/Main";
import Detalie from "./pages/Detalie";
import EventBanner from './pages/EventBanner';
import Thumbnail from './pages/Thumbnail';
import Resume from './pages/Resume';
import MadePage from './pages/MadePage';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detalie" element={<Detalie />} />
      <Route path="/banner" element={<EventBanner />} />
      <Route path="/thum" element={<Thumbnail />} />
      <Route path="/sujin" element={<Resume />} />
      <Route path="/made" element={<MadePage />} />
    </Routes>
   </>
  );
}

export default App;
