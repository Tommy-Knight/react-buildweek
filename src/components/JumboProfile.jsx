import React from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import "../styles/JumboProfile.css";
import ProfileModal from "../services/ProfileModal"

class JumboProfile extends React.Component {
state={user: this.props.user}

  componentDidMount() {}
  render() {
    return (
      <Card style={{ marginBottom: "50px" }} id="jumbo" className="">
        <img
          id="profile-img"
          className="hover"
          src={this.props.user.image}
          alt="profile"
        />

        <div id="background-img"></div>

            <div style={{ marginLeft: "30px" }} id="info-wrapper">
        <Row>
        <Col className="col-9">
              <h3>
                {this.props.user.name} {this.props.user.surname}
              </h3>
              <p>{this.props.user.area}</p>
              <p>{this.props.user.title}</p>
        </Col>
          <Col className="col-2"><ProfileModal/></Col>
        </Row>
          <Row>
            <br />
            <Dropdown>
              <Dropdown.Toggle style={{ lineHeight: "20%" }} id="dropdown-open">
                Open to
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <b>Finding a new job </b>
                  <p className="muted">
                    Show recruiters and others that you‘re Open to work
                  </p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <b>Hiring</b>
                  <p className="muted">
                    Share that you‘re hiring and attract qualified candidates
                  </p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle style={{ lineHeight: "20%" }} id="dropdown-add">
                Add profile section
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <b>
                    Intro{" "}
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
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </b>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <b>
                    About{" "}
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
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </b>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <b>
                    Profile{" "}
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
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </b>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        </div>
      </Card>
    );
  }
}

export default JumboProfile;
