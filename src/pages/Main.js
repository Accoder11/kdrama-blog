import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import KDrama from "./KDrama";
import UpcomingKDrama from "./UpcomingKDrama";
import Rankings from "../components/Rankings";
import Blogs from "./Blog";
import Form from "../components/Form";

const Main = () => {
    return(
        <div>
        <Container fluid className="my-5 mx-auto">
            <KDrama></KDrama>
        </Container>

        <Container fluid className="my-5 mx-auto">
            <UpcomingKDrama></UpcomingKDrama>
        </Container>

        <Container fluid className="my-5 mx-auto">
            <Blogs></Blogs>
        </Container>
        
            <Container fluid>  
            <h1>K-Drama Rankings</h1>
                <Row className="my-3 mx-auto">
                    <Rankings></Rankings>
                <Form></Form>
            </Row>
      </Container>
      
        </div>
    )
}

export default Main;