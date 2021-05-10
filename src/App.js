import JumboProfile from "./components/JumboProfile";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Container id="main">
        <Row>
          <Col md={8}>
            <JumboProfile />
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
