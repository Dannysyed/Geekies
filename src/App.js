import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionPage from "./pages/sectionPage/SectionPage";
import BlogPage from "./pages/blogPage/BlogPage";
import sectionResources from "./resources/sectionPage/sectionResources";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/section/technology"
            element={
              <SectionPage
                imgSrc={sectionResources[0].img}
                title={sectionResources[0].title}
                subtitle={sectionResources[0].subtitle}
              />
            }
          />
          <Route
            path="/section/anime"
            element={
              <SectionPage
                imgSrc={sectionResources[1].img}
                title={sectionResources[1].title}
                subtitle={sectionResources[1].subtitle}
              />
            }
          />
          <Route
            path="/section/controversy"
            element={
              <SectionPage
                imgSrc={sectionResources[2].img}
                title={sectionResources[2].title}
                subtitle={sectionResources[2].subtitle}
              />
            }
          />
          <Route
            path="/section/celebs"
            element={
              <SectionPage
                imgSrc={sectionResources[3].img}
                title={sectionResources[3].title}
                subtitle={sectionResources[3].subtitle}
              />
            }
          />
          <Route
            path="/section/productivity"
            element={
              <SectionPage
                imgSrc={sectionResources[4].img}
                title={sectionResources[4].title}
                subtitle={sectionResources[4].subtitle}
              />
            }
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
