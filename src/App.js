import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionPage from "./pages/sectionPage/SectionPage";
import BlogPage from "./pages/blogPage/BlogPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/section" element={<SectionPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
