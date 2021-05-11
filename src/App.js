import JumboProfile from './components/JumboProfile';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import React from 'react';
import fetchUser from './services/fetchUser';

class App extends React.Component {
  state = {
    user: null,
  };
  componentDidMount = async () => {
    // const getUser = await fetchUser();
    // this.setState({user: getUser});
    const headers = {
      // "Content-Type": "application/json",
      Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
    };

    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
        {
          headers,
        }
      );
      console.log(response);
      const user = await response.json();
      console.log(user);
      this.setState({ user: user });
      return user;
    } catch (error) {
      alert('You have an error:', error);
    }
  };
  render() {
    console.log(process.env.REACT_APP_TOKEN);
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
