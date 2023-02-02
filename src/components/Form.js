import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Form = () => {
    return(

<Container className="m-5 p-5 form">
  <Row>
  <Col class="col-12">
    <h3>Chingus! Flex your favorite K-Drama here.</h3>
    </Col>
  </Row>
  
  <Row className="my-5 mx-auto">
    <Col>
    <img src="https://media1.giphy.com/media/jphG7WtplnQMBMqvvY/giphy.gif" alt="giphy"/>
    </Col>
    <Col class="col-12" >
    
    <form class="row g-3 survey-form">
    <h4 className="text-center">Survey Form</h4>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" placeholder="Em" required />
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" placeholder="Cleto" required />
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="validationDefault03" required />
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">Gender</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Male</option>
      <option>Female</option>
      <option>Rather not say</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Country</label>
    <input type="text" class="form-control" id="validationDefault05" required />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <label for="validationDefault05" class="form-label">Tell us more about your favorite K-Drama</label>
    <textarea name="message" class="form-control" id="validationDefault05" rows={5} cols={100} required></textarea>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
    <button type="reset" className="btn btn-primary">Reset edits</button>
  </div>
</form>
    </Col>
  </Row>
  </Container>
);
}

export default Form;