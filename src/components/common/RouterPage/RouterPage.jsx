import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useGoogleAuth } from "../authGoogle";
import {useHistory} from "react-router-dom";
import LandingPageScreen from "../../LandingPageScreen/LandingPageScreen";
import HomeScreen from "../../HomeScreen/HomeScreen";
import NewLobbyScreen from "../../NewLobbyScreen/NewLobbyScreen";
import NavbarScreen from "../../NavbarScreen/NavbarScreen";



function RouterPage() {

  const {isSignedIn, googleUser} = useGoogleAuth();
  const historyRouter = useHistory();

  return (
    <>
    <NavbarScreen/>
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPageScreen}/>
            <Route exact path="/home" component={HomeScreen}/>
            <Route exact path="/newLobby" component={NewLobbyScreen}/>
        </Switch>
    </Router>
    </>
  );
}

export default RouterPage;
