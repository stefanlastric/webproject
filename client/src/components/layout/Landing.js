import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Landing = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg?text=First slide&bg=373940'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg?text=First slide&bg=373940'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Landing;
