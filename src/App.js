import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionPage from "./pages/sectionPage/SectionPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/section" element={<SectionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
