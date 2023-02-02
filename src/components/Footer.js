import React from 'react';
import Container from 'react-bootstrap/Container';



const Footer = () => {
    return (
      <Container fluid className='text-center text-lg-start bg-warning text-muted'>
        <div>
          © 2023 Copyright: 
          <a className='footer-link fw-bold' href='https://accoder11.github.io/kdrama-blog/' target="_blank" rel="noopener noreferrer"> www.emcleto@kodegoPh.com
          </a>
        </div>
      </Container>
    );
  }

export default Footer;