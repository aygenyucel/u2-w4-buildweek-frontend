import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./suggestedCard.css";
import { AiFillEye } from "react-icons/ai";
const SuggestedCard = () => {
  return (
    <div className="suggested-card custom-card">
      <Container>
        <div className="header-card">Suggested For You</div>
        <Row className="mb-3">
          <Col>
            <div className="d-flex text-light-grey align-items-center">
              <span className="mr-1 d-flex align-items-center">
                <AiFillEye />
              </span>
              Private to you
            </div>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <div className="d-flex flex-column">
              <div className="header-small">Intermediate</div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="suggestion-progress-bar mr-2">
                  <div className="suggestion-progress"></div>
                </div>
                <div className="text-small">6/7</div>
              </div>

              <div className="text-small">
                Complete 1 step tp achieve{" "}
                <span>
                  <a href="/#"> All-star</a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Col>
          <div className="suggested-text-area">
            <Row className="mb-2">
              <Col className="d-flex ">
                <img
                  src="/assets/symbolic-profile-img.png"
                  alt="profile symbol"
                />
                <div className="header-small ml-2">
                  Write a summary to highlight your personality or work
                  experience
                </div>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <div className="text-small">
                  Members who include a summary receive up to 3.9 times as many
                  profile views.
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="suggested-buttons">
                  <Button className="gray-btn">Add a summary</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default SuggestedCard;
