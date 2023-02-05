import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mylogo from '../image/kdrama-logo.png';


const Footer = () => {
    return (
      <Container fluid className='text-center text-md-start bg-warning text-muted'>
        <Row>
          <Col xs={5}>
      <div>
        <div className='text-center'>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        </div>
        </Col>
            <Col className='text-center mt-4'>
            Useful Links
            <p>Home</p>
            <p>K-drama Series</p>
            <p>Upcoming K-drama</p>
            <p>Blog</p>
            <p>About Us</p>
            <Row>
            <Col className='text-center'>
        <div>
          
            <i class="bi bi-facebook m-2"></i>
            <i class="bi bi-pinterest m-2"></i>
            <i class="bi bi-youtube m-2"></i>
            <i class="bi bi-twitter m-2"></i>
            <i class="bi bi-dribbble m-2"></i>
            </div>
            </Col>
            </Row>
            </Col>
            
            <Col className='text-center mt-4'>
            <p>Sitemaps</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <Row className='m-5'>
            <Link to="/"><img src={mylogo} alt= "logo" className="mylogo"/>
            </Link>
            </Row>
            </Col>
            </Row>
        < div className='text-center py-3'>
          © 2023 Copyright: 
          <a className='footer-link fw-bold' href='https://accoder11.github.io/kdrama-blog/' target="_blank" rel="noopener noreferrer"> www.emcleto@kodegoPh.com
          </a>
        </div>
      </Container>
    );
  }

export default Footer;
