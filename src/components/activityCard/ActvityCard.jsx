import { Button, Col, Container, Row } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import "./activityCard.css";

const ActivityCard = () => {
  return (
    <div className="custom-card pb-0">
      <Container>
        <div className="header-card">Activity</div>
        <div className="text-small">
          <a href="/#" className="follower-number">
            97 followers
          </a>
        </div>
        <div className="mt-2 activity-button">
          <Button className="start-a-post-btn secondary-blue-btn">
            Start a Post
          </Button>
        </div>
        <div className="d-flex flex-column mt-3">
          <div className="header-small">You haven't posted lately</div>
          <div className="text-small">
            Recent posts you share or comment on will be displayed here
          </div>
        </div>
      </Container>
      <hr className="mb-0" />
      <div className="show-all-resources show-all-btn header-small-gray d-flex justify-content-center">
        Show all activity{" "}
        <span className="ml-1">
          <BiRightArrowAlt className="card-icon" />
        </span>
      </div>
    </div>
  );
};

export default ActivityCard;
