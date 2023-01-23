import { Container } from "react-bootstrap";
import "./languagesCard.css";

const LanguagesCard = () => {
  return (
    <div className="custom-card">
      <Container>
        <div className="header-card mb-2">Languages</div>
        <div className="d-flex flex-column">
          <div className="header-small">Turkish</div>
          <div className="text-light-grey">Native or bilingual proficiency</div>
        </div>
        <hr className="my-2" />
        <div className="d-flex flex-column">
          <div className="header-small">English</div>
          <div className="text-light-grey">Professional working profiency</div>
        </div>
        <hr className="my-2" />
        <div className="d-flex flex-column">
          <div className="header-small">Italian</div>
          <div className="text-light-grey">Professional working profiency</div>
        </div>
      </Container>
    </div>
  );
};

export default LanguagesCard;
