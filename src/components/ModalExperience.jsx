import { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

class ModalExperience extends Component {
  state = {
    experience: {
      role: "",
      company: "",
      startDate: "",
      endDate: null,
      description: "",
      area: "",
    },
  };
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>My experience</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Company name" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Description"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <Form.Control type="date" label="Start date" required />
            </Form.Group>

            <Form.Group>
              <Form.Label>End date</Form.Label>
              <Form.Control type="date" label="End date" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Check type="text" label="Location" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default ModalExperience;

// EXPERIENCE Model:
// {
//     "_id": "5d925e677360c41e0046d1f5",  //server generated
//     "role": "CTO",
//     "company": "Strive School",
//     "startDate": "2019-06-16",
//     "endDate": "2019-06-16", //could be null
//     "description": "Doing stuff here and there",
//     "area": "Berlin",
//     "username": "admin",  //server generated
//     "createdAt": "2019-09-30T19:58:31.019Z",  //server generated
//     "updatedAt": "2019-09-30T19:58:31.019Z",  //server generated
//     "__v": 0  //server generated
//     "image": ... //server generated on upload
// }
