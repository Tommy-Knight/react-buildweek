import React, { Component } from 'react';
import { ListGroup, Card } from 'react-bootstrap';

class sidebar extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Header>People you may know</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex my-1 px-auto">
              <img
                className="my-1"
                src="https://www.pngkey.com/png/detail/157-1579943_no-profile-picture-round.png"
                width=" 40px"
                height="40px"
                alt=""
              />
              <div className="d-flex flex-column ml-auto mr-auto">
                <h6 className=" text-center">Namey Surnamey</h6>
                <p className=" text-center">the job he do </p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default sidebar;