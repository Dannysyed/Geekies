import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom'
import Anime from './pages/Anime/Anime';
import Technology from './pages/Technology/Technology';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path={'/Homepage'}>
          <Homepage></Homepage>
        </Route>
        <Route path={'/Anime'}>
          <Anime></Anime>
        </Route>
        <Route path={'/Technology'}>
          <Technology></Technology>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
