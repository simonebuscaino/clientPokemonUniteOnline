import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import { useGlobalContext } from "../../../context";
// import LoginGoogle from "../../common/LoginGoogle/LoginGoogle";
// import LogoutGoogle from "../../common/LogoutGoogle/LogoutGoogle";
import {useHistory} from "react-router-dom";
// import { useGoogleAuth } from "../common/authGoogle";

function HomeScreen() {

    const {userDetail} = useGlobalContext();
    const historyRouter = useHistory();

    // const {isSignedIn, googleUser} = useGoogleAuth();


    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
    
  }

  export default HomeScreen;