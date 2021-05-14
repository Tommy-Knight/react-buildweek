import React, { Component } from "react"
import { Col, Form, Button } from "react-bootstrap"

export default class ProfileForms extends Component {
	state = {
		user: this.props.user,
		name: "",
		surname: "",
		email: "",
		username: "",
		title: "",
		bio: "",
		area: "",
		image: "",
	}
	
	getName = (e) => {
		this.setState({ name: e.target.value })
		console.log(this.state)
	}
	getSurname = (e) => {
		this.setState({ surname: e.target.value })
		console.log(this.state)
	}
	getEmail = (e) => {
		this.setState({ email: e.target.value })
		console.log(this.state)
	}
	getUsername = (e) => {
		this.setState({ username: e.target.value })
		console.log(this.state)
	}
	getTitle = (e) => {
		this.setState({ title: e.target.value })
		console.log(this.state)
	}
	getArea = (e) => {
		this.setState({ area: e.target.value })
		console.log(this.state)
	}
	getImage = (e) => {
		this.setState({ image: e.target.value })
		console.log(this.state)
	}

	handleSubmit = async () => {
		const putProfile = {
			name: this.state.name,
			surname: this.state.surname,
			email: this.state.email,
			username: this.state.username,
			title: this.state.title,
			bio: this.state.bio,
			area: this.state.area,
			image: this.state.image,
		}
		console.log(JSON.stringify(putProfile))
		const headers = {
			Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
			"Content-Type": "application/json",
		}
		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/profile/",
				{
					method: "PUT",
					body: JSON.stringify(putProfile),
					headers,
				}
			)
			const post = await response.json()
			console.log("success!" + post)
		} catch (error) {
			console.log("You have an error posting:", error)
		}
		window.location.reload(true)
	}

	render() {
		return (
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formBasicCompany">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Your Name"
							onChange={this.getName}
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Surname</Form.Label>
						<Form.Control
							type="text"
							placeholder="Your Surname"
							onChange={this.getSurname}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>E-mail</Form.Label>
						<Form.Control
							type="email"
							placeholder="Your Email"
							onChange={this.getEmail}
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Your Username"
							onChange={this.getUsername}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						label="Job Title"
						placeholder="Job Title"
						onChange={this.getTitle}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Bio</Form.Label>
					<Form.Control
						type="text"
						label="Bio"
						placeholder="A little about yourself"
						onChange={this.getBio}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Area</Form.Label>
					<Form.Control
						type="text"
						label="Area"
						placeholder="Where are you?"
						onChange={this.getArea}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Image</Form.Label>
					<Form.Control
						type="text"
						label="Image"
						placeholder="Share a link to your profile image here!"
						onChange={this.getImage}
					/>
				</Form.Group>
				<Button
					variant="outline-dark"
					type="button"
					onClick={this.handleSubmit}
				>
					Submit
				</Button>
			</Form>
		)
	}
}
