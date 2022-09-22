import React from 'react';
import './Jumbotron.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Jumbotron = () => {
  return (
    <>
         <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipe name"
          aria-label="Recipe name"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    </>
  )
}

export default Jumbotron;