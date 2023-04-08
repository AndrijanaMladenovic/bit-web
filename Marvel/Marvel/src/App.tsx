import { FetchApi } from "./api/FetchApi";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Comics from "./components/Comics";
import Info from "./components/Info";

import "./index.css";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FetchApi />} />
        <Route path="/:id" element={<Info />} />
        <Route path="/:id/comics/:idComic" element={<Comics />} />
      </Routes>
    </>
  );
}
