import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PurchaseOnline from './components/PurchaseOnline';
import RestaurantCards from './components/RestaurantCards';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    <div className='content'>
      <switch>
        <Route exact path={"/"}>
        <Home />
        <Route path='/Online'>
        <PurchaseOnline />
        </Route>
        <Route path='/Restaurants'>
        <RestaurantCards />
        </Route>
        </Route>
      </switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
