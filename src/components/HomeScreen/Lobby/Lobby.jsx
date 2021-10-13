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
        <Card className="mb-3">
            <Card.Body as={Row}>
                <Col md="10" lg="9">
                    <Card.Title>Nome Lobby</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Pubblico</Card.Subtitle>
                    <Card.Text>4 posti disponibili</Card.Text>
                </Col>
                <Col md="4" lg="3" className="d-grid">
                    <Button variant="primary">Accedi</Button>
                </Col>
            </Card.Body>
        </Card>
    );
    
  }

  export default HomeScreen;