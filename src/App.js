import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Navbar from "./components/navbar2/Navbar";
import Homepage from "./pages/homepage/HomePage";
import { Switch, Route } from "react-router-dom";
import Anime from "./pages/Anime/Anime";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      <Homepage />
      <Switch>
        <Route path={"/Anime"}>
          <Anime />
        </Route>
        <Route path={"/Technology"}>
          <Technology />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
