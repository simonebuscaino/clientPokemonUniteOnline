import axios from "axios";
import {useState} from "react";
import {Form, Row, Col, Button} from "react-bootstrap";

function FormExample() {
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
        axios.post("http://localhost:3001/create",{
            nome:nome, 
            cognome:cognome
        });
      }
  
      setValidated(true);
    };
  
    let nome;
    let cognome;

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
              onChange={(e)=>{
                  nome = e.target.value;
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
              onChange={(e)=>{
                cognome=e.target.value;
              }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        <Button type="submit">Submit form</Button>
        </Row>
      </Form>
    );
  }

  export default FormExample;