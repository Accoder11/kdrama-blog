import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


const Carousels = () => {
  return (
    <Container fluid>
        <Carousel>
      <Carousel.Item>
        <img
          className="https://www.kworldnow.com/wp-content/uploads/2021/12/K-Dramas-from-2021-Featured-Image-905x613.jpg"
          alt=""
        />
        <Carousel.Caption>
        <Button className="shop-now">CLICK ME!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="https://i0.wp.com/annyeongoppa.com/wp-content/uploads/2021/09/PicsArt_09-24-04.59.45.jpg?fit=3464%2C1949"
          alt=""
        />

        <Carousel.Caption>
        <Button className="shop-now">SHOP NOW!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fluid"
          src="https://www.hellokpop.com/wp-content/uploads/2020/05/PhotoGrid_1589547795378-1024x731.jpg"
          alt=""
        />

        <Carousel.Caption>
        <Button className="shop-now">SHOP NOW!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 fluid"
          src="https://i.pinimg.com/736x/5e/91/9c/5e919cb34ae21e17c328097155309d96.jpg" alt=""
        />

        <Carousel.Caption>
        <Button className="shop-now">CLICK ME!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 fluid"
          src="https://www.allkpop.com/upload/2021/07/content/191650/1626727801-img-0401.png"
          alt=""
        />

        <Carousel.Caption>
        <Button className="shop-now">CLICK ME!</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Container>
  );
}

export default Carousels;