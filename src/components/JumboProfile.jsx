import React from "react";
import { Col, Dropdown, Jumbotron, Row } from "react-bootstrap";
import "../styles/JumboProfile.css";

class JumboProfile extends React.Component {
  render() {
    return (
      <Jumbotron id="jumbo">
        <img
          id="profile-img"
          className="hover"
          src={this.props.user.image}
          alt="profile"
        />

        <div id="background-img"></div>

        <div id="info-wrapper">
          <h3>
            {this.props.user.name} {this.props.user.surname}
          </h3>
          <p>{this.props.user.area}</p>
          <p>{this.props.user.title}</p>
          <Row>
            <Col id="dropdown-wrapper" md={2} className="d-flex">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-open">Open to</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <p>Finding a new job </p>
                    <p className="muted">
                      Show recruiters and others that you‘re Open to work
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <p>Hiring</p>
                    <p className="muted">
                      Share that you‘re hiring and attract qualified candidates
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-add">
                  Add profile section
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <p>Finding a new job </p>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <p>Hiring</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
      </Jumbotron>
    );
  }
}

export default JumboProfile;
