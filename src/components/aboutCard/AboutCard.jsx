import { Container, Row } from "react-bootstrap";
import "./aboutCard.css";

const AboutCard = ({ bio }) => {
  return (
    <div className="about-card custom-card">
      <Container>
        <div className="header-card mb-2">About</div>
        <Container>
          <Row className="about-row">{bio}</Row>
        </Container>
      </Container>
    </div>
  );
};
export default AboutCard;
