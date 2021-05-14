import { Component } from "react";
import { withRouter } from "react-router-dom";
import { ListGroup, Card, Button } from "react-bootstrap";
import fetchUser from "../services/fetchUser";

class UserCard extends Component {
  handleGetAnotherUser = () => {
    this.props.history.push("/" + this.props.user._id);
  };
  render() {
    return (
      <ListGroup variant="flush" key={this.props.user._id}>
        <ListGroup.Item className="d-flex  ">
          <img
            className="my-1 userImg"
            src={this.props.user.image}
            width=" 40px"
            height="40px"
            alt="Profile picture"
          />
          <div className="d-flex flex-column mr-auto ml-1">
            <h6 className=" mr-auto">
              {this.props.user.name} {this.props.user.surname}
            </h6>
            <p className="mr-auto ">{this.props.user.title}</p>
            <Button
              value={this.props.user._id}
              onClick={this.handleGetAnotherUser}
              variant="outline-secondary"
              className="rounded-pill mr-auto"
            >
              <b>Connect</b>
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    );
  }
}
export default withRouter(UserCard);
