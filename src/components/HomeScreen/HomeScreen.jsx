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
import Lobby from "./Lobby/Lobby";

function HomeScreen() {

    const {userDetail} = useGlobalContext();
    const historyRouter = useHistory();

    const {isSignedIn, googleUser} = useGoogleAuth();

    return (
        <Container className="containerBody" fluid>
            {
                    <>
                        {/* <Row>
                            <Col style={{border: "2px solid black", padding: "20px"}}>
                                <h1>{googleUser.profileObj.name}</h1>
                                <img src={googleUser.profileObj.imageUrl} alt="Avatar." />
                                <LogoutGoogle/>
                            </Col>
                        </Row>
                        <br/> */}
                        <Row>
                            <Col className="d-grid">
                                <Button variant="primary" onClick={() => historyRouter.push("/newLobby")}>Crea un nuovo Lobby</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Lobby/>
                            </Col>
                        </Row>
                        

                    </>
            }
        </Container>
    );
    
  }

  export default HomeScreen;