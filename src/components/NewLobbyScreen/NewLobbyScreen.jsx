import axios from "axios";
import {useState} from "react";
import {Row, Col, Button, Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

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
        let json = {
            nome: nome,
            cognome: cognome,
        }
        axios.post("https://pokemonuniteonlinedb.herokuapp.com/create",{
            nome:nome, 
            cognome:cognome
        });
      }
  
      setValidated(true);
    };
  
    let nome;
    let cognome;

    return (
      <Container className="containerBody" fluid>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nome Lobby</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Inserisci un nome per il tuo Lobby"
                // defaultValue="Mark"
                onChange={(e)=>{
                    nome = e.target.value;
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Codice segreto di accesso Lobby</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Inserisci il codice segreto di accesso al tuo Lobby"
                // defaultValue="Otto"
                onChange={(e)=>{
                  cognome=e.target.value;
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formGridState">
              <Form.Label>Modalità di accesso </Form.Label>
              <Form.Select>
                <option value="a">Pubblico</option>
                <option value="b">Privato</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Parola segreta di accesso</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Inserisci la Parola segreta di accesso"
                // defaultValue="Mark"
                onChange={(e)=>{
                    nome = e.target.value;
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formGridState">
              <Form.Label>Range</Form.Label>
              <Form.Range min="1" max="4" step="1"/>
            </Form.Group>
          </Row>
          <Row>
            <Col className="d-grid">
              <Button type="submit">Submit form</Button>
            </Col>
            
          </Row>
          
        </Form>
      </Container>
      
    );
  }

  export default NewLobbyScreen;