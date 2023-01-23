import { Col, Container, Row } from "react-bootstrap";
import "./educationCard.css";

const EducationCard = () => {
  return (
    <div className="education-card custom-card">
      <Container>
        <div className="header-card mb-3">Education</div>

        <div className="d-flex ">
          <div className="mr-2">
            <div className="company-logo">
              <img src="/assets/company-logo-default.png" alt="company logo" />
            </div>
          </div>
          <div>
            <div className="d-flex flex-column">
              <div className="education-company header-small">EPICODE</div>
              <div className="text-small">Full Stack Web Development</div>
              <div className="text-light-grey">Sep 2022 - Mar 2023</div>
            </div>
          </div>
        </div>
        <hr />

        <div className="d-flex ">
          <div className="mr-2">
            <div className="company-logo">
              <img src="/assets/company-logo-default.png" alt="company logo" />
            </div>
          </div>
          <div>
            <div className="d-flex flex-column">
              <div className="education-company header-small">LOREM IPSUM</div>
              <div className="text-small">Full Stack Web Development</div>
              <div className="text-light-grey">Sep 2022 - Mar 2023</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default EducationCard;
