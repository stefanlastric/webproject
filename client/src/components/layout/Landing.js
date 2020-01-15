import React from 'react';
import { Row, Image, Col } from 'react-bootstrap';
const Landing = () => {
  return (
    <>
      <Row className="budinasredini">
        <Col sm={0}>
          <Image src="https://miro.medium.com/max/970/0*AB_I3rxxmNRsBL43.jpg" />
          <div className="budinasredini"> Welcome</div>
        </Col>
      </Row>
    </>
  );
};

export default Landing;
