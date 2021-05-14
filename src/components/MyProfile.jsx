import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JumboProfile from "./JumboProfile";
import Sidebar from "./Sidebar";
import Experiences from "./Experiences";
import fetchUser from "../services/fetchUser";
import getUsers from "../services/getUsers";

class MyProfile extends Component {
  state = {
    user: {},
    listOfUsers: [],
  };

  componentDidMount = async () => {
    const getUser = await fetchUser(this.props.location.pathname);
    this.setState({ user: getUser });
    const getListOfUsers = await getUsers();
    this.setState({ listOfUsers: getListOfUsers });
  };

  componentDidUpdate = async (prevProps) => {
    const id = this.props.match.params.userId;
    const prevId = prevProps.match.params.userId;
    if (id !== prevId) {
      const user = await fetchUser(id);
      this.setState({ user });
    }
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <JumboProfile user={this.state.user} />
            <Experiences userID={this.state.user._id} user={this.props.user} />
          </Col>
          <Col md={4}>
            <Sidebar listOfUsers={this.state.listOfUsers} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyProfile;
