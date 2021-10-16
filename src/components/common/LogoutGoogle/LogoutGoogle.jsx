import React from "react";
import axios from "axios";
import {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
// import {GoogleLogin, GoogleLogout} from "react-google-login";
import { useGoogleAuth } from "../authGoogle";

function LogoutGoogle() {

    const responseGoogleLogoutSuccess = () => {
        sessionStorage.removeItem("userDetail");
        console.log("Disconnesso");
        
    }

    const {signOut} = useGoogleAuth();

    return (
        // <GoogleLogout
        //     clientId="440837109818-j1blm29hcorg605h8ji88iacdpphscts.apps.googleusercontent.com"
        //     buttonText="Logout"
        //     onLogoutSuccess={responseGoogleLogoutSuccess}
        // />

        <Button variant="primary" onClick={signOut}>Disconnetti</Button>
    );
  }

  export default LogoutGoogle;