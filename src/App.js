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
          <Route path="/section/technology" element={<SectionPage />} />
          <Route path="/section/anime" element={<SectionPage />} />
          <Route path="/section/controversy" element={<SectionPage />} />
          <Route path="/section/celebs" element={<SectionPage />} />
          <Route path="/section/productivity" element={<SectionPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
