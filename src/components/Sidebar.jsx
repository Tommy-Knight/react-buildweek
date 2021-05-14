import React, { Component } from "react";
import { ListGroup, Card, Button } from "react-bootstrap";
import fetchUser from "../services/fetchUser";
import getAnotherUser from "../services/getAnotherUser";
import "../styles/sidebar.css";
import { withRouter } from "react-router-dom";
import UserCard from "./UserCard";

class Sidebar extends Component {
  randomnumber = Math.floor(Math.random() * 100) + 1;

  render() {
    console.log(this.props.listOfUsers);
    return (
      <div className="py-4">
        <Card id="CardSidebar" style={{}}>
          <Card.Header className="mr-auto">People you may know</Card.Header>
          {this.props.listOfUsers
            .slice(this.randomnumber, this.randomnumber + 5)
            .map((user) => (
              <UserCard user={user} key={user._id} />
            ))}
        </Card>
      </div>
    );
  }
}

export default withRouter(Sidebar);
