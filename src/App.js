import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import MyProfile from "./components/MyProfile";
import Footer from "./components/Footer";
import fetchUser from "./services/fetchUser";
import MakePost from "./components/MakePost";

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
            render={(routerProps) => <MyProfile {...routerProps} />}
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