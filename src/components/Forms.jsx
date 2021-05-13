import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Forms extends Component {
  state = {
    companyName: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
  };
  getCompany = (e) => {
    this.setState({ companyName: e.target.value });
    console.log(this.state);
  };
  getDes = (e) => {
    this.setState({ description: e.target.value });
    console.log(this.state);
  };
  getSDate = (e) => {
    this.setState({ startDate: e.target.value });
    console.log(this.state);
  };
  getEDate = (e) => {
    this.setState({ endDate: e.target.value });
    console.log(this.state);
  };
  getLoc = (e) => {
    this.setState({ location: e.target.value });
    console.log(this.state);
  };

  handleSubmit = async () => {
    // CHANGE ROLE
    const postExp = {
      role: this.state.company,
      company: this.state.company,
      startDate: this.state.startDate,
      description: this.state.description,
      area: this.state.location,
      endDate: this.state.endDate,
    };

    const headers = {
      Authorization: 'Bearer ' + process.env.REACT_APP_TOKEN,
      'Content-Type': 'application/json',
    };
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/609a4cffdfccc50015a6bbb2/experiences',

        {
          method: 'POST',
          body: JSON.stringify(postExp),
          headers,
        }
      );
      const post = await response.json();
      console.log(post);
    } catch (error) {
      console.log('You have an error posting:', error);
    }
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicCompany">
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

        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Check
            type="text"
            label="Location"
            onChange={this.getLoc}
            required
          />
        </Form.Group>
        {/* prevent default here
        !! */}
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
