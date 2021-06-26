import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import './page.css';

function ReactBoot() {
    return(
        <Container >
                  <Row>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>
  </Container>
        
    )
}

export default ReactBoot