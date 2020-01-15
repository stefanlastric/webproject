import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './Category.css';

class Category extends Component {
  render() {
    return (
      <div className="categories">
        <Carousel className="categories-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hips.hearstapps.com/pop.h-cdn.co/assets/15/14/2560x1280/landscape-1428004383-blade-runner.jpg?resize=480:*"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Sciene Fiction movies</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.nairaland.com/attachments/5886491_filmgenreconventions2638_jpegd06dfcd56feea05219afdad43d803bb9"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Action movies</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.kupindoslike.com/DOMACI-FILMOVI-Kolekcija-od-6-originalnih-DVD-filmova_slika_O_31974345.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Domaci movies</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Category;
