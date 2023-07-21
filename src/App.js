import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Courses } from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
