import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JumboProfile from "./JumboProfile";
import Sidebar from "./Sidebar";
import Experiences from "./Experiences";
import fetchUser from "../services/fetchUser";
import getUsers from "../services/getUsers";

class UserPage extends Component {
  //   state = {
  //     userId: this.props.location.pathname,
  //     user: {},
  //     listOfUsers: [],
  //   };

  //   componentDidMount = async () => {
  //     const getUser = await fetchUser(this.props.location.pathname);
  //     this.setState({ user: getUser });
  //     const getListOfUsers = await getUsers();
  //     this.setState({ listOfUsers: getListOfUsers });
  //   };

  //   componentDidUpdate = async (prevProps, prevState) => {
  //     console.log("MY STATE IN UPDATE", this.state.userId);
  //     if (prevState.userID !== this.props.location.pathname) {
  //       this.setState({ userId: this.props.location.pathname });
  //       await fetchUser(this.props.location.pathname);
  //     }
  //   };

  render = () => {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <JumboProfile user={this.props.user} />
            <Experiences userID={this.props.user._id} />
          </Col>
          <Col md={4}>
            <Sidebar listOfUsers={this.props.listOfUsers} />
          </Col>
        </Row>
      </Container>
    );
  };
}

export default UserPage;
