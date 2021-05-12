import React, { Component } from "react";
import { ListGroup, Card, Button } from "react-bootstrap";
import "../styles/sidebar.css";

class Sidebar extends Component {
  render() {
    // console.log(this.props.listOfUsers);
    return (
      <div>
        {/* elements from site */}

        {/* element from site  */}
        <div id="ember1524" className="pv-profile-info-section mb4 ember-view">
          {/**/}
          <div
            id="ember1525"
            className="pv-view-public-profile-section pv-profile-info-section-button relative ember-view"
          >
            <a
              tabIndex={0}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              id="ember1526"
              className="pv-view-public-profile-section__button pv-profile-info-section-button__button ember-view"
            >
              <span className="t-16 t-black--light t-bold">
                Edit public profile &amp; URL
              </span>
            </a>
            <span
              tabIndex={-1}
              id="ember1527"
              className="artdeco-hoverable-trigger pv-view-public-profile-section__button-icon pv-profile-info-section-button__button-icon artdeco-hoverable-trigger--content-placed-bottom artdeco-hoverable-trigger--is-hoverable ember-view"
            >
              <span aria-describedby="artdeco-hoverable-artdeco-gen-65">
                <li-icon
                  type="question-pebble-icon"
                  size="small"
                  role="img"
                  aria-label="See and edit how you look to people who are not signed in, and find you through search engines (ex: Google, Bing)."
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width={16}
                    height={16}
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z" />
                  </svg>
                </li-icon>
              </span>
              <div
                id="artdeco-gen-65"
                className="ember-view"
                style={{ display: 'none' }}
              >
                <div id="ember1529" className="ember-view" />
              </div>
            </span>
          </div>
          <hr className="artdeco-divider mt4 mb4" />
          <div
            id="ember1530"
            className="mt2 pv-add-secondary-language-section pv-profile-info-section-button relative ember-view"
          >
            <a
              data-control-name="add_secondary_language"
              href="/in/artur-s-0653b4210/edit/secondary-language/"
              id="ember1531"
              className="pv-add-secondary-language-section__button pv-profile-info-section-button__button ember-view"
            >
              {' '}
              <span className="t-16 t-black--light t-bold">
                Add profile in another language
              </span>
            </a>
            <span
              tabIndex={-1}
              id="ember1532"
              className="artdeco-hoverable-trigger pv-add-secondary-language-section__button-icon pv-profile-info-section-button__button-icon artdeco-hoverable-trigger--content-placed-bottom artdeco-hoverable-trigger--is-hoverable ember-view"
            >
              <span aria-describedby="artdeco-hoverable-artdeco-gen-66">
                <li-icon
                  type="question-pebble-icon"
                  size="small"
                  role="img"
                  aria-label="Creating a profile in another language makes it easier for local business contacts and recruiters to find you on LinkedIn."
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width={16}
                    height={16}
                    focusable="false"
                  >
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z" />
                  </svg>
                </li-icon>
              </span>
              <div
                id="artdeco-gen-66"
                className="ember-view"
                style={{ display: 'none' }}
              >
                <div id="ember1534" className="ember-view" />
              </div>
            </span>
          </div>
        </div>

        {/* elements from site */}

        <Card id="CardSidebar" style={{}}>
          <Card.Header className="mr-auto">
            <b>People you may know</b>
          </Card.Header>
          {this.props.listOfUsers.slice(25, 35).map((item) => (
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
    );
  }
}

export default Sidebar;
