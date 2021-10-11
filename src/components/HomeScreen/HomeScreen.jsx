import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import { useGlobalContext } from "../../context";
import LoginGoogle from "../common/LoginGoogle/LoginGoogle";
import LogoutGoogle from "../common/LogoutGoogle/LogoutGoogle";
import {useHistory} from "react-router-dom";
import { useGoogleAuth } from "../common/authGoogle";

function HomeScreen() {

    const {userDetail} = useGlobalContext();
    const historyRouter = useHistory();

    const {isSignedIn, googleUser} = useGoogleAuth();

    if (isSignedIn) {
        return (
            <Container className="containerBody" fluid>
                <Row>
                    <Col style={{border: "2px solid black", padding: "20px"}}>
                        {
                            isSignedIn ? 
                                <>
                                    <h1>{googleUser.profileObj.name}</h1>
                                    <img src={googleUser.profileObj.imageUrl} alt="Avatar." />
                                    <LogoutGoogle/>
                                </>
                            :
                                historyRouter.push("/")
                        }
                        
                    </Col>
                </Row>
            </Container>
        );
    }
    return (
        <Container fluid>
            <Row>
                <Col style={{border: "2px solid black"}}>
                    {historyRouter.push("/")}
                </Col>
            </Row>
        </Container>
    );
    
  }

  export default HomeScreen;