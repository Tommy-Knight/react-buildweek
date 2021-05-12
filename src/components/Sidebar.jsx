import React, { Component } from "react";
import { ListGroup, Card, Button } from "react-bootstrap";
import "../styles/sidebar.css";

class Sidebar extends Component {

  randomnumber = Math.floor(Math.random() * 100) + 1

  render() {
    // console.log(this.props.listOfUsers);
    return (
			<div>
				<Card id="CardSidebar" style={{}}>
					<Card.Header className="mr-auto">People you may know</Card.Header>
					{this.props.listOfUsers
						.slice(this.randomnumber, this.randomnumber+5)
						.map((item) => (
							<ListGroup variant="flush">
								<ListGroup.Item className="d-flex  ">
									<img
										className="my-1 userImg"
										src={item.image}
										width=" 40px"
										height="40px"
										alt=""
									/>
									<div className="d-flex flex-column mr-auto ml-1">
										<h6 className=" mr-auto">
											{item.name} {item.surname}
										</h6>
										<p className="mr-auto ">{item.title}</p>
										<Button
											variant="outline-secondary"
											className="rounded-pill mr-auto"
										>
											<b>Connect</b>
										</Button>{" "}
									</div>
								</ListGroup.Item>
							</ListGroup>
						))}
				</Card>
			</div>
		)
  }
}

export default Sidebar;
