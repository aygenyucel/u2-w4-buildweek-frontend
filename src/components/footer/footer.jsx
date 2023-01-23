import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import linkedinlogo from "./assets/linkedinlogo.png";
import "./footer.css";
import { QuestionCircleFill } from "react-bootstrap-icons";
import { GearFill } from "react-bootstrap-icons";
import { ChevronCompactDown } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer-div text-white py-4">
      <Container>
        <div className="row">
          <Image
src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1024px-LinkedIn_2021.svg.png"
className="mr-2"
id="linkedin-logo"
alt="Linked img"
width={60}
height={60}
          />
        </div>
        <Row className="pt-2 pl-4">
          <Col xs={6} md={3}>
            <ul className=" list-unstyled">
              <li>
                <a href="" className="footer_link">
                  About
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Privacy &amp; Terms {<ChevronCompactDown />}
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Sales Solutions
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Safety Center
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul className=" list-unstyled">
              <li>
                <a href="" className="footer_link">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Careers
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Ad Choices
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Mobile
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul className=" list-unstyled">
              <li>
                <a href="" className="footer_link">
                  Talent Solutions
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Marketing Solutions
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Advertising
                </a>
              </li>
              <li>
                <a href="" className="footer_link">
                  Small bussiness
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={2}>
            <ul className="list-unstyled">
              <li>
                <QuestionCircleFill size={20} className="text-dark" />
                <a href="" className="pl-1 footer_link">
                  Questions?
                </a>
                <br />
                <span className="footer_label pl-4">Visit our help center</span>
              </li>
              <li>
                <GearFill size={20} className="text-dark" />
                <a href="" className="pl-1 footer_link">
                  Manage your account and privacy
                </a>
                <br />
                <span className="footer_label pl-4">Go to your Settings</span>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <label htmlFor="language" className="footer_label">
              Select Language
            </label>
            <DropdownButton
              name="language"
              id="dropdown-basic-button"
              title="English (English)"
              className="footer_dropdown text-black"
            >
              <Dropdown.Item href="#/action-1">Greek</Dropdown.Item>
              <Dropdown.Item href="#/action-2">French</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <p className="footer_label ml-4 mt-3">
          Linkedin Corporation @ {new Date().getFullYear()}
        </p>
      </Container>
    </div>
  );
};

export default Footer;
