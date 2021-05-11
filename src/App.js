import JumboProfile from "./components/JumboProfile";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import React from "react";
import fetchUser from "./services/fetchUser";

class App extends React.Component {
  state = {
    user: {},
  };
  componentDidMount = async () => {
    const getUser = await fetchUser();
    this.setState({ user: getUser });
  };
  render() {
    return (
      <Router>
        <Nav />
        <Container>
          <Row>
            <Col md={8}>
              <JumboProfile user={this.state.user} />
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
