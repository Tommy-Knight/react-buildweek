import React, { Component } from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';
import fetchUser from '../services/fetchUser';
import getAnotherUser from '../services/getAnotherUser';
import '../styles/sidebar.css';
import { withRouter } from 'react-router-dom';
import UserCard from './UserCard';
import Learning from './Learning';
class Sidebar extends Component {
  randomnumber = Math.floor(Math.random() * 100) + 1;

  render() {
    console.log(this.props.listOfUsers);
    return (
      <div className="">
        <Card id="CardSidebar" style={{}}>
          <Card.Header className="mr-auto">People you may know</Card.Header>
          {this.props.listOfUsers
            .slice(this.randomnumber, this.randomnumber + 5)
            .map((user) => (
              <UserCard user={user} />
            ))}
        </Card>
        <Learning />
      </div>
    );
  }
}

export default withRouter(Sidebar);
