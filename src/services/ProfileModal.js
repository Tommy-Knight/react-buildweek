import { Button, Modal } from "react-bootstrap"
import React, { useState } from "react"
import ProfileForms from "../components/ProfileForms"

export default function ProfileModal() {
	const [lgShow, setLgShow] = useState(false)

	return (
		<>
			<Button
				style={{
					background: "none",
				}}
				title="Edit your profile"
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
					<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
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
						Edit your profile here!
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ProfileForms />
				</Modal.Body>
			</Modal>
		</>
	)
}
