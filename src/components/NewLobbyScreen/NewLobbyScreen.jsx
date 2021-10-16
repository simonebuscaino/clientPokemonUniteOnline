import React from "react";
import axios from "axios";
import {useState} from "react";
import {Row, Col, Button, Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import RangeSlider from 'react-bootstrap-range-slider';
// import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function NewLobbyScreen() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        event.stopPropagation();
        console.log("Riuscito");
        // let json = {
        //     nome: nome,
        //     cognome: cognome,
        // }
        // axios.post("https://pokemonuniteonlinedb.herokuapp.com/create",{
        //     nome:nome, 
        //     cognome:cognome
        // });
      }
  
      setValidated(true);
    };
  
    const [codiceSegretoLobby, setCodiceSegretoLobby] = useState();
    const [parolaSegretaAccesso, setParolaSegretaAccesso] = useState("");
    const [modalitaAccesso, setModalitaAccesso] = useState("");
    const [nomeLobby, setNomeLobby] = useState("");
    const [numGiocatori, setNumGiocatori] = useState();

    return (
      <Container className="containerBody" fluid>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01" className="mt-3">
              <Form.Label>Nome Lobby *</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Inserisci un nome per il tuo Lobby"
                // defaultValue="Mark"
                onChange={(e)=>{
                    setNomeLobby(e.target.value);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02" className="mt-3">
              <Form.Label>Codice segreto di accesso Lobby *</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Inserisci il codice segreto di accesso al tuo Lobby"
                // defaultValue="Otto"
                onChange={(e)=>{
                  setCodiceSegretoLobby(e.target.value);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formGridState" className="mt-3">
              <Form.Label>Modalità di accesso *</Form.Label>
              <Form.Select
                required
                onChange={(e) => {
                  setModalitaAccesso(e.target.value);
                }}
              >
                <option></option>
                <option value="Pubblico">Pubblico</option>
                <option value="Privato">Privato</option>
                </Form.Select>
            </Form.Group>

            {
              modalitaAccesso !== "" ?
                <Form.Group as={Col} md="4" controlId="validationCustom01" className="mt-3">
                  <Form.Label>Parola segreta di accesso *</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Inserisci la Parola segreta di accesso"
                    // defaultValue="Mark"
                    onChange={(e)=>{
                        setParolaSegretaAccesso(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              :
              ""
            }
            <Form.Group as={Col} md="4" controlId="formGridState" className="mt-3">
              <Form.Label>Quanti giocatore cerchi? *</Form.Label>
              <Form.Range
                required
                tooltip={numGiocatori} 
                min="1" 
                max="4" 
                step="1"
                defaultValue="4"
                onChange={(e) => {
                  setNumGiocatori(e.target.value);
                  // console.log(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col className="d-grid">
              <Button type="submit">Crea Lobby</Button>
            </Col>
            
          </Row>
          
        </Form>
      </Container>
      
    );
  }

  export default NewLobbyScreen;