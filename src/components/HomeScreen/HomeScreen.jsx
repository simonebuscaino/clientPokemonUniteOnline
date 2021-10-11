import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import { useGlobalContext } from "../../context";
import LoginGoogle from "../common/LoginGoogle/LoginGoogle";
import LogoutGoogle from "../common/LogoutGoogle/LogoutGoogle";
import {useHistory} from "react-router-dom";

function HomeScreen() {

    const {userDetail} = useGlobalContext();
    const historyRouter = useHistory();


    if (!userDetail.logged) {
        historyRouter.push("/");
    }
    return (
        <Container fluid>
            <Row>
                <Col style={{border: "2px solid black"}}>
                    <img src="https://cdn2.bulbagarden.net/upload/0/0d/Pok%C3%A9mon_UNITE_logo.png" width="300px" height="auto" alt="" />
                </Col>
            </Row>
        </Container>
    );
  }

  export default HomeScreen;