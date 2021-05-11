import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import getExp from "../services/getExp";

class Experiences extends Component {
  state = {
    myExp: null,
  };
  // componentDidMount = async () => {
  //   console.log("My user ID in mount:", this.props.userID);
  // };

  componentDidUpdate = async (prevState, prevProps) => {
    console.log("My user ID in update:", this.props.userID);
    if (prevProps.userID !== this.props.userID) {
      const listOfExp = await getExp(this.props.userID);
      this.setState({ myExp: listOfExp });
      console.log("myexp", listOfExp);
    } else {
    }
    // this.state.myExp ? {const myExp = await getExp(this.props.userID)}:
  };
  render() {
    return (
      <Container>
        <Row className="muted">
          <h3>Experience</h3>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={10}></Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    );
  }
}
export default Experiences;
