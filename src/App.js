import logo from './logo.svg';
import './App.css';
import FormExample from './components/Form/Form';
import LandingPageScreen from './components/LandingPageScreen/LandingPageScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from './components/HomeScreen/HomeScreen';
// import { Navbar } from 'react-bootstrap';
import NavbarScreen from './components/NavbarScreen/NavbarScreen';

function App() {
  return (
    <div className="App">
      <Router>

          <NavbarScreen/>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/" component={LandingPageScreen}/>
            <Route exact path="/home" component={HomeScreen}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
