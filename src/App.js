import logo from './logo.svg';
import './App.css';
// import FormExample from './components/Form/Form';
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
import NewLobbyScreen from './components/NewLobbyScreen/NewLobbyScreen';
import { useGoogleAuth } from "./components/common/authGoogle";
import {useHistory} from "react-router-dom";
import RouterPage from './components/common/RouterPage/RouterPage';



function App() {

  const {isSignedIn, googleUser} = useGoogleAuth();
  const historyRouter = useHistory();

  return (
    <div className="App">
      {
        !isSignedIn ? 
          <LandingPageScreen/>
        :
          <RouterPage/>
      }
    </div>
  );
}

export default App;
