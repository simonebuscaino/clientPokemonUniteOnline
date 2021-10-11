import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import { useGlobalContext } from "../../../context";
import { useGoogleAuth } from "../authGoogle";

function LoginGoogle() {

    const {setUserDetail, userDetail} = useGlobalContext();

    const responseGoogleLoginSuccess = (response) => {
        setUserDetail([{
            logged: true,
            token: response.accessToken,
            firstname: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            fullname: response.profileObj.name,
            email: response.profileObj.email,
            image: response.profileObj.imageUrl,
        }]);
        sessionStorage.setItem("userDetail", userDetail);
        console.log("Loggato!");
        console.log(response);
    }

    const responseGoogleLoginFailure = (response) => {
        setUserDetail({
            logged: false,
            token: "",
            firstname: "",
            lastname: "",
            fullname: "",
            email: "",
            image: "",
        });
        console.log("Fallito!");
        console.log(response);
    }

    const {signIn} = useGoogleAuth();

    return (
        // <GoogleLogin
        //     clientId="440837109818-j1blm29hcorg605h8ji88iacdpphscts.apps.googleusercontent.com"
        //     buttonText="Login"
        //     onSuccess={responseGoogleLoginSuccess}
        //     onFailure={responseGoogleLoginFailure}
        //     cookiePolicy={'single_host_origin'}
        // />
        <Button variant="primary" onClick={signIn}>Accedi con Google</Button>
    );
  }

  export default LoginGoogle;