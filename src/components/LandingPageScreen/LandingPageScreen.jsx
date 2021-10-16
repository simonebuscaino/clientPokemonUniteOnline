import React from "react";
import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
// import {GoogleLogin, GoogleLogout} from "react-google-login";
import { useGlobalContext } from "../../context";
import LoginGoogle from "../common/LoginGoogle/LoginGoogle";
import LogoutGoogle from "../common/LogoutGoogle/LogoutGoogle";
import {useHistory} from "react-router-dom";
import { useGoogleAuth } from "../common/authGoogle";

function LandingPageScreen() {

    const {userDetail} = useGlobalContext();
    const historyRouter = useHistory();
    console.log(userDetail);

    const {isSignedIn} = useGoogleAuth();

    
    return (
        <Container className="containerBody" style={{textAlign:"center"}} fluid>
            <Row>
                <Col>
                    <img src="https://cdn2.bulbagarden.net/upload/0/0d/Pok%C3%A9mon_UNITE_logo.png" width="300px" height="auto" alt="" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <LoginGoogle/>
                </Col>
            </Row>
        </Container>
    );
  }

  export default LandingPageScreen;