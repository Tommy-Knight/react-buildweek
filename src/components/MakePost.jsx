
import React, { Component } from "react"
import { Button, Card, Container, Col, Row } from "react-bootstrap"

export default class MakePost extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col className="col-3">
						<Card>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="130"
								height="50"
								id="person-default"
							>
								<path fill="none" d="M0 0h2048v512H0z" />
								<path fill="#dbe7e9" d="M0 0h2048v512H0z" />
								<path fill="#bfd3d6" d="M1408 0h640v512h-640z" />
								<path
									d="M1236.29 0H0v512h1236.29a771.52 771.52 0 000-512z"
									fill="#a0b4b7"
								/>
							</svg>
							<Card.Body>
								<Card.Title>
									{this.props.user.name} {this.props.user.surname}
								</Card.Title>
								<Card.Text>{this.props.user.bio}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<small className="text-muted">Last updated 3 mins ago</small>
							</Card.Footer>
						</Card>
					</Col>
					<Col className="col-7">
						<Card>
							<Card.Body>
								<Card.Text>
									<img src={this.props.user.image} width="50px" alt="profile" />
									<input type="text" placeholder="Start a post"></input>
								</Card.Text>
								<Button variant="primary">Photo</Button>
								<Button variant="primary">Video</Button>
								<Button variant="primary">Event</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-2"></Col>
				</Row>
			</Container>
		)
	}
}
