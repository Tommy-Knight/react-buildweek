import React from "react";
import { Card, Col, Dropdown, Jumbotron, Row } from "react-bootstrap";
import "../styles/JumboProfile.css";

class JumboProfile extends React.Component {
  render() {
    return (
			<Card
				style={{ marginBottom:"50px" }}
				id="jumbo"
				className=""
			>
				<img
					id="profile-img"
					className="hover"
					src={this.props.user.image}
					alt="profile"
				/>

				<div id="background-img"></div>

				<div style={{ marginLeft: "30px" }} id="info-wrapper">
					<h3>
						{this.props.user.name} {this.props.user.surname}
					</h3>
					<p>{this.props.user.area}</p>
					<p>{this.props.user.title}</p>

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
									<b>Finding a new job </b>
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item>
									<b>Hiring</b>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Row>
				</div>
			</Card>
		)
  }
}

export default JumboProfile;
