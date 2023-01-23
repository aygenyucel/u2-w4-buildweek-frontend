import { Button, Col, Container, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import "./profileMainCard.css";
import { BsBell } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdPersonAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProfileAction } from "../../redux/actions";
import { updateEditAction } from "../../redux/actions";
import { Form, Modal } from "react-bootstrap";

const ProfileMainCard = ({ mainData, isMyProfile }) => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState(``);
  const [surname, setSurname] = useState(``);
  const [email, setEmail] = useState(``);
  const [bio, setBio] = useState(``);
  const [title, setTitle] = useState(``);
  const [area, setArea] = useState(``);

  const updateAction = () => {
    dispatch(updateEditAction(name, surname, bio, title, area));
    setShow(false);
    dispatch(getProfileAction());
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeBio = (e) => {
    setBio(e.target.value);
  };

  const handleChangeArea = (e) => {
    setArea(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  return (
    <div className="profile-main-card custom-card pt-0">
      <div className="profile-main-card-background position-relative">
        <img
          src="/assets/profile-background-default.png"
          alt="profile background"
        />
        <div className="profile-img">
          <img src={mainData.image} alt="profile img" />
        </div>
      </div>
      <div className="profile-main-card-bottom">
        <Container className="profile-main-card-middle mb-4">
          <div className="d-flex justify-content-end align-items-end">
            {isMyProfile ? (
              <div className="edit-icon">
                <Button className="edit-icon" onClick={handleShow}>
                  <FiEdit2 />
                </Button>
                <Modal
                  dialogClassName="modal-100w"
                  aria-labelledby="example-custom-modal-styling-title"
                  show={show}
                  onHide={handleClose}
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      Edit intro
                    </Modal.Title>
                  </Modal.Header>
                  <p className="text-muted sm-txt">*Indicates required</p>
                  <Modal.Body>
                    <Form.Group>
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control
                        onChange={handleChangeName}
                        type="text"
                        placeholder="Enter first name"
                        value={name}
                      />
                      <Form.Label>Last name*</Form.Label>
                      <Form.Control
                        onChange={handleChangeSurname}
                        type="text"
                        placeholder="Enter surname"
                        value={surname}
                      />
                      <Form.Label>Additional name</Form.Label>
                      <Form.Control type="text" placeholder="Enter nickname" />
                      <hr />
                      <p className="text-muted">Name pronunciation</p>
                      <p>This can only be added using our mobile app</p>
                      <Form.Label className="d-block text-muted">
                        Headline*
                      </Form.Label>
                      <Form.Control
                        onChange={handleChangeTitle}
                        type="text"
                        placeholder="Enter title"
                        value={title}
                      />
                      <hr />
                      <Form.Label className="d-block text-muted">
                        Current position
                      </Form.Label>
                      <Form.Control
                        onChange={handleChangeBio}
                        type="text"
                        placeholder="Enter title"
                        value={bio}
                      />
                      <hr />
                      <Form.Label className="d-block text-muted">
                        Country/Region
                      </Form.Label>
                      <Form.Control
                        onChange={handleChangeArea}
                        type="text"
                        placeholder="Enter title"
                        value={area}
                      />
                      <Button
                        variant="primary"
                        className="stubborn-btn"
                        onClick={() => updateAction()}
                      >
                        Save
                      </Button>
                    </Form.Group>
                  </Modal.Body>
                </Modal>
              </div>
            ) : (
              <div className="bell-icon">
                <BsBell />
              </div>
            )}
          </div>
        </Container>

        <Container className="profile-main-card-info">
          <Row>
            <Col xs={8}>
              <div className="main-info d-flex flex-column">
                <div className="profile-name">
                  {mainData.name} {mainData.surname}
                </div>
                <div className="profile-about mb-2">{mainData.title}</div>
                <div className="profile-details d-flex align-items-center mb-2">
                  <div className="profile-location mr-2">{mainData.area}</div>
                  <div className="profile-contact-info-btn d-flex align-items-center">
                    <a href="/">Contact info</a>
                    {/* <a href="/">{mainData.email}</a> */}
                  </div>
                </div>
                <div className="profile-connections mb-2">
                  {isMyProfile ? (
                    <a href="/" className="connections-number">
                      <span>96</span> Connections{" "}
                    </a>
                  ) : (
                    <div className="connections-number">
                      <span>500+</span> Connections
                    </div>
                  )}
                </div>
                {isMyProfile ? (
                  <div className="profile-buttons d-flex">
                    <div className="mr-2">
                      <Button className="open-to-btn left-btn">Open to</Button>
                    </div>
                    <div className="mr-2">
                      <Button className="add-profile-section-btn middle-btn">
                        Add profile section
                      </Button>
                    </div>
                    <div className="mr-2">
                      <Button className="more-btn right-btn">More</Button>
                    </div>
                  </div>
                ) : (
                  <div className="profile-buttons d-flex">
                    <div className="mr-2">
                      <Button className="connect-btn left-btn d-flex align-items-center">
                        <MdPersonAdd />
                        <span className="ml-2"> Connect</span>
                      </Button>
                    </div>
                    <div className="mr-2">
                      <Button className="message-btn middle-btn d-flex align-items-center">
                        <RiSendPlaneFill />{" "}
                        <span className="ml-2">Message</span>
                      </Button>
                    </div>
                    <div className="mr-2">
                      <Button className="more-btn gray-btn right-btn">
                        More
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Col>
            <Col xs={4}>
              <div className="company-info d-flex align-items-center">
                <div className="company-logo mr-2">
                  <img
                    src="/assets/company-logo-default.png"
                    alt="company-logo"
                  />
                </div>
                <div className="company-name d-flex ">Dundler Mifflin</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default ProfileMainCard;
