import { Component } from 'react';
import '../styles/experiences.css';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import getExp from '../services/getExp';
import ModalExperience from '../components/ModalExperience';

class Experiences extends Component {
  state = {
    myExp: [],
    isModalVis: false,
  };
  handleAddExp = async () => {
    const visOn = await this.setState({ isModalVis: true });
    console.log(this.state);
  };
  handleEditExp = () => {
    alert('Edit');
  };
  handleRemoveExp = () => {
    alert('Remove');
  };
  // componentDidMount = async () => {
  //   console.log("My user ID in mount:", this.props.userID);
  // };

  componentDidUpdate = async (prevProps) => {
    console.log('My user ID in update:', this.props.userID);
    if (prevProps.userID !== this.props.userID) {
      const listOfExp = await getExp(this.props.userID);
      this.setState({ myExp: listOfExp });
      console.log('myexp', this.state.myExp);
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row className="muted">
              <h3>Experience</h3>
            </Row>
            {this.state.isModalVis && <ModalExperience />}

            <Row>
              <Col md={1}>
                <img
                  width="50px"
                  src={this.props.userImg || '../assets/user.svg'}
                  alt=""
                />
              </Col>
              <Col md={10}>
                <h4>
                  {this.state.myExp.length > 0
                    ? this.state.myExp[0].company
                    : 'Please, add an experience!'}
                </h4>
                <h5>
                  {this.state.myExp.length > 0
                    ? this.state.myExp[0].role
                    : 'Please, add a role!'}
                </h5>
                <p>
                  {this.state.myExp.length > 0
                    ? this.state.myExp[0].area
                    : 'Please, add an area!'}
                </p>
              </Col>
              <Col md={1}>
                <Button variant="success" onClick={this.handleAddExp}>
                  Add
                </Button>
                <Button variant="warning" onClick={this.handleEditExp}>
                  Edit
                </Button>
                <Button variant="danger" onClick={this.handleRemoveExp}>
                  Remove
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Experiences;
