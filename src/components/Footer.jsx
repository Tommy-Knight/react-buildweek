import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Footer = (props) => {
	return (
		<Container
			style={{ marginTop: "60px", bottom: "0px", position: "relative", fontSize: "10px", lineHeight: "20px"}}
			id="footer"
		>
				<hr/>
			<Row>
				<div className="col-md-3">
					<nav>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="34"
							height="34"
							viewBox="0 0 34 34"
						>
							<g>
								<path
									d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
									fill="currentColor"
								></path>
							</g>
						</svg>
						<br />
						<a class="text-muted" href="home">
							About
						</a>
						<br />

						<a class="text-muted" href="home">
							Community Guidelines
						</a>
						<br />
						<a class="text-muted" href="home">
							Privacy & Terms
						</a>
						<br />
						<a class="text-muted" href="home">
							Sales Solutions
						</a>
						<br />
						<br />
						<button class="btn btn-outline-secondary">Service Code</button>
						<br />
						<br />
						<a class="text-muted" href="home">
							LinkedIn Corporation © 2021
						</a>
					</nav>
				</div>
				<Col className="col-md-3">
					<nav>
						<br />
						<br />
						<a class="text-muted" href="home">
							Accessibility
						</a>
						<br />
						<a class="text-muted" href="home">
							Careers
						</a>
						<br />
						<a class="text-muted" href="home">
							Ad Choices
						</a>
					</nav>
				</Col>
				<Col className="col-md-3">
					<nav>
						<br />
						<br />
						<a class="text-muted" href="home">
							Talent Solutions
						</a>
						<br />
						<a class="text-muted" href="home">
							Marketing Solutions
						</a>
						<br />
						<a class="text-muted" href="home">
							Advertising
						</a>
					</nav>
				</Col>
				<Col className="col-md-3">
					<nav>
						<br />
						<br />
						<a class="text-muted" href="home">
							Safety Center 
						</a>
						<br />
						<a class="text-muted" href="home">
							Settings
						</a>
						<br />
						<a class="text-muted" href="home">
							Corporate Information
						</a>
					</nav>
				</Col>
			</Row>
		</Container>
	)
}

export default Footer
