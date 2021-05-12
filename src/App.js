import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import JumboProfile from './components/JumboProfile';
import Sidebar from './components/Sidebar';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import fetchUser from './services/fetchUser';
import getUsers from './services/getUsers';

class App extends React.Component {
  state = {
    user: {},
    listOfUsers: [],
  };
  componentDidMount = async () => {
    const getUser = await fetchUser();

    this.setState({ user: getUser });
    const getListOfUsers = await getUsers();
    this.setState({ listOfUsers: getListOfUsers });
    // getExp(this.state.user._id);
  };
  render() {
    return (
      <Router>
        <Nav user={this.state.user} />
        <Container>
          <Row>
            <Col md={8} className="py-4">
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

// <Router>
// 	<>
// 		<Nav />
// 		<Switch>
// 			<Route
// 				render={(routerProps) => (
// 					<SearchResults {...routerProps} title="home" />
// 				)}
// 				path="/"
// 				exact
// 			/>
// 			<Route
// 				render={(routerProps) => (
// 					<DetailsPage {...routerProps} title="Show Details" />
// 				)}
// 				path="/info/:id"
// 				exact
// 			/>
// 			<Route
// 				render={(routerProps) => (
// 					<Registration {...routerProps} title="Registration" />
// 				)}
// 				path="/registration"
// 				exact
// 			/>
// 			<Route path="/series">
// 				<h2 style={{ marginLeft: "50px" }}> Our Favourite Series</h2>
// 				<Carousel movie="Walking Dead" />
// 			</Route>
// 			<Route path="/film">
// 				<h1>FILMS PAGE TO BE ADDED</h1>
// 			</Route>
// 		</Switch>
// 		<Footer />
// 	</>
// </Router>
