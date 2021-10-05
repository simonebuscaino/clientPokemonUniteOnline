import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import GoogleLogin from "react-google-login";

function LandingPageScreen() {

    const responseGoogleSuccess = () => {
        console.log("Loggato!");
    }

    const responseGoogleFailure = () => {
        console.log("Fallito!");
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>LogIn in Pokemon Unite Online</h1>
                </Col>
            </Row>
            <Row>
                <Col style={{backgroundColor:"red"}}>
                    <GoogleLogin
                        clientId="440837109818-j1blm29hcorg605h8ji88iacdpphscts.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogleSuccess}
                        onFailure={responseGoogleFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </Col>
            </Row>
        </Container>
    );
  }

  export default LandingPageScreen;