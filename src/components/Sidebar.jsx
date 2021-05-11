import React, { Component } from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import '../styles/sidebar.css';

class Sidebar extends Component {
  render() {
    console.log(this.props.listOfUsers);
    return (
      <div>
        <Card id="CardSidebar" style={{}}>
          <Card.Header className="mr-auto">People you may know</Card.Header>
          {this.props.listOfUsers.slice(15, 25).map((item) => (
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex my-1 px-auto">
                <img
                  className="my-1 userImg"
                  src={item.image}
                  width=" 40px"
                  height="40px"
                  alt=""
                />
                <div className="d-flex flex-column ml-auto mr-auto">
                  <h6 className=" text-center">
                    {item.name} {item.surname}
                  </h6>
                  <p className=" text-center ">{item.title}</p>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </Card>
      </div>
    );
  }
}

export default Sidebar;
