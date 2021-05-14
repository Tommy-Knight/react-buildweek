import { Component } from "react"
import "../styles/experiences.css"
import { Button, Card, Col, Row } from "react-bootstrap"
import getExp from "../services/getExp"
import Example from "./Example"

class Experiences extends Component {
	state = {
		myExp: [],
		isModalVis: false,
		count: 0,
	}

	componentDidUpdate = async (prevProps) => {
		console.log("My user ID in update:", this.props.userID)
		if (prevProps.userID !== this.props.userID) {
			const listOfExp = await getExp(this.props.userID)
			this.setState({ myExp: listOfExp })
			console.log("myexp", this.state.myExp)
		}
	}

	handleDelete = async (e) => {
		console.log(e)
		const headers = {
			Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
			"Content-Type": "application/json",
		}
		try {
			await fetch(
				"https://striveschool-api.herokuapp.com/api/profile/me/experiences/" +
					e,
				{
					method: "DELETE",
					headers,
				}
			)
		} catch (error) {
			console.log("You have an error posting:", error)
		}
		this.render()
	}

	render() {
		return (
			<Card>
				<br />
				<Row>
					<Col className="col-9">
						<h5 style={{ marginLeft: "30px", marginTop: "10px" }}>
							Experiences
						</h5>
					</Col>
					<Col className="col-2">
						<Example />
					</Col>
				</Row>
				<br />
				{this.state.myExp.map((experience) => (
					<Row>
						<Col md={1}></Col>
						<Col md={8}>
							<div>
								<a style={{ color: "black" }} href="/">
									<b>{experience.role}</b>
								</a>
								<a style={{ color: "black" }} href="/">
									<h6>{experience.company}</h6>
								</a>
								<a style={{ color: "black" }} href="/">
									<p>{experience.area}</p>
								</a>
								<hr />
							</div>
						</Col>
						<Col md={2}>
							<Button
								value={experience._id}
								style={{
									background: "none",
								}}
								type="button"
								title="Remove Experience"
								variant="white"
								onClick={() => this.handleDelete(experience._id)}
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
									value={experience._id}
								>
									<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
								</svg>
							</Button>
						</Col>
					</Row>
				))}
			</Card>
		)
	}
}
export default Experiences
