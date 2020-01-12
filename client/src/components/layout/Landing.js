import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
class Landing extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_608/fl_lossy,q_auto/v1492199122/cheats/2014/06/03/jonah-hill-sorry-i-called-photog-faggot/140603-jonah-hill-tease_asnlls"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/png;base64,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"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default () => (
  <div>
    <Landing />
  </div>
);
