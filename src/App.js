import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import JumboProfile from "./components/JumboProfile";
import Sidebar from "./components/Sidebar";
import fetchUser from "./services/fetchUser";
import getUsers from "./services/getUsers";

class App extends React.Component {
  state = {
    user: {},
    listOfUsers: [],
  };
  componentDidMount = async () => {
    const getUser = await fetchUser();
    const listOfUsers = await getUsers();
    this.setState({ user: getUser });
    const listOfUsers = await getUsers();
    this.setState({ listOfUsers });
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
            <Col md={4}>
              <Sidebar listOfUsers={this.state.listOfUsers} />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
