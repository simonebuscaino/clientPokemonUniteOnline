import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import GoogleLogin from "react-google-login";

function LandingPageScreen() {

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
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Login"
                        // onSuccess={responseGoogle}
                        // onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </Col>
            </Row>
        </Container>
    );
  }

  export default LandingPageScreen;