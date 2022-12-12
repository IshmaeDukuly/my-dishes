import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RestaurantCards from './components/RestaurantCards';

function App() {
  return (
    <div className="App">
      <Navbar />

    <Home />
    <RestaurantCards />
      
      
    </div>
  );
}

export default App;
