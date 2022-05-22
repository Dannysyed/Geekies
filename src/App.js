import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path={'/Homepage'}>

          <Homepage></Homepage>
        </Route>
      </Switch>
      {/* <h1>Geekies</h1> */}

    </div>
  );
}

export default App;
