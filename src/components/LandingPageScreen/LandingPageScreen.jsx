import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import GoogleLogin from "react-google-login";

function LandingPageScreen() {

    const [userDetail, setUserDetail] = useState({
        logged: false,
        firstname: "",
        lastname: "",
        fullname: "",
        email: "",
        image: "",
    });

    const responseGoogleSuccess = (response) => {
        setUserDetail({
            logged: true,
            firstname: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            fullname: response.profileObj.name,
            email: response.profileObj.email,
            image: response.profileObj.imageUrl,
        });
        console.log("Loggato!");
        console.log(response);
    }

    const responseGoogleFailure = (response) => {
        setUserDetail({
            logged: false,
            firstname: "",
            lastname: "",
            fullname: "",
            email: "",
            image: "",
        });
        console.log("Fallito!");
        console.log(response);
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
                    {
                        userDetail.logged === false ?
                        <GoogleLogin
                            clientId="440837109818-j1blm29hcorg605h8ji88iacdpphscts.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogleSuccess}
                            onFailure={responseGoogleFailure}
                            cookiePolicy={'single_host_origin'}
                            isLoggedIn={true}
                        />
                        :
                        <b>Benvenuto {userDetail.fullname}!</b>
                    }

                </Col>
            </Row>
        </Container>
    );
  }

  export default LandingPageScreen;