import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"

export default class Forms extends Component {
	state = {
		role: "",
		companyName: "",
		description: "",
		startDate: "",
		endDate: "",
		location: "",
	}

	getRole = (e) => {
		this.setState({ role: e.target.value })
		console.log(this.state)
	}
	getCompany = (e) => {
		this.setState({ companyName: e.target.value })
		console.log(this.state)
	}
	getDes = (e) => {
		this.setState({ description: e.target.value })
		console.log(this.state)
	}
	getSDate = (e) => {
		this.setState({ startDate: e.target.value })
		console.log(this.state)
	}
	getEDate = (e) => {
		this.setState({ endDate: e.target.value })
		console.log(this.state)
	}
	getLoc = (e) => {
		this.setState({ location: e.target.value })
		console.log(this.state)
	}

	handleSubmit = async () => {
		// CHANGE ROLE
		const postExp = {
			role: this.state.role,
			company: this.state.companyName,
			startDate: this.state.startDate,
			endDate: this.state.endDate,
			description: this.state.description,
			area: this.state.location,
		}
		console.log(JSON.stringify(postExp))
		const headers = {
			Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
			"Content-Type": "application/json",
		}
		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/profile/me/experiences",
				{
					method: "POST",
					body: JSON.stringify(postExp),
					headers,
				}
			)
			const post = await response.json()
			console.log("then here" + post)
		} catch (error) {
			console.log("You have an error posting:", error)
		}
		window.location.reload(true)
	}

	render() {
		return (
			<Form>
				<Form.Group controlId="formBasicCompany">
					<Form.Label>Job</Form.Label>
					<Form.Control
						type="text"
						name="companyName"
						placeholder="Job"
						onChange={this.getRole}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Company</Form.Label>
					<Form.Control
						type="text"
						name="companyName"
						placeholder="Company name"
						onChange={this.getCompany}
						required
					/>
				</Form.Group>
				<Form.Group>
						<Form.Group>
					<Form.Label>Location</Form.Label>
					<Form.Control
						type="text"
						placeholder="Location"
						onChange={this.getLoc}
						required
					/>
				</Form.Group>
				<Form.Group></Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control
						name="description"
						onChange={this.getDes}
						as="textarea"
						rows={4}
						placeholder="Description"
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Start date</Form.Label>
					<Form.Control
						type="date"
						label="Start date"
						onChange={this.getSDate}
						required
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>End date</Form.Label>
					<Form.Control onChange={this.getEDate} type="date" label="End date" />
				</Form.Group>
				<Button variant="primary" type="button" onClick={this.handleSubmit}>
					Submit
				</Button>
			</Form>
		)
	}
}
