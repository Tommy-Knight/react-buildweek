import React from 'react';
import { Card, ListGroup, Button, Col, Row } from 'react-bootstrap';
import '../styles/discoverMore.css';

const DiscoverMore = () => {
  return (
    <Card id="DiscoverMore" style={{}} className="my-4 ">
      <ListGroup variant="flush">
        <ListGroup.Item>Groups</ListGroup.Item>
        <Row>
          <Col className="col-8">
            <ListGroup.Item>Events</ListGroup.Item>
          </Col>
          <Col className="col-4">
            <Button
              className="ml-2"
              style={{
                background: 'none',
                color: 'black',
                border: 'none',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </Button>
          </Col>
        </Row>

        <ListGroup.Item>Followed Hashtags</ListGroup.Item>

        <Card.Header className="text-center ">Discover more</Card.Header>
      </ListGroup>
    </Card>
  );
};

export default DiscoverMore;
