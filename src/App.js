import React from "react";
// import { withRouter } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import JumboProfile from "./components/JumboProfile";
import Sidebar from "./components/Sidebar";
import Experiences from "./components/Experiences";
import MyProfile from "./components/MyProfile";
import Footer from "./components/Footer";
import fetchUser from "./services/fetchUser";
import getUsers from "./services/getUsers";
import MakePost from "./components/MakePost";
import UserPage from "./components/UserPage";

class App extends React.Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    const getUser = await fetchUser("/");
    this.setState({ user: getUser });
  };

  render() {
    return (
      <Router>
        <Nav user={this.state.user} />
        <Switch>
          <Route
            render={(routerProps) => (
              <MyProfile {...routerProps} user={this.state.user} />
            )}
            path={["/:userId", "/feed"]}
          />
          <Route
            render={(routerProps) => (
              <MakePost {...routerProps} user={this.state.user} />
            )}
            path="/"
            exact
          />
        </Switch>
        <Footer />
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
