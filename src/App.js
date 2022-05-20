import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Homepage></Homepage>
      <h1>Geekies</h1>
    </div>
  );
}

export default App;
