import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import Forms from "./Forms";

export default function ExperienceModal() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button
        style={{
          background: "none",
        }}
        title="Post new Experience"
        variant="white"
        onClick={() => setLgShow(true)}
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

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add a new Experience!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Forms />
        </Modal.Body>
      </Modal>
    </>
  );
}
