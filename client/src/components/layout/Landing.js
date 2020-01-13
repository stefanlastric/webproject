import React from 'react';
import { Row, Image, Col } from 'react-bootstrap';
const Landing = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col sm={0}>
          <Image
            src="https://cdn.hipwallpaper.com/i/5/97/fcIupN.jpg"
            thumbnail
          />
        </Col>
      </Row>
    </>
  );
};

export default Landing;
