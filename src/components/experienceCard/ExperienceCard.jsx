// import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./experienceCard.css";
import { format } from "date-fns";
import { Button } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  updateExperienceAction,
  deleteExperienceAction,
} from "../../redux/actions";
import { useParams } from "react-router";

const ExperienceCard = ({ experiences }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const [show, setShow] = useState(false);

  const [role, setRole] = useState(``);
  const [company, setCompany] = useState(``);
  const [startDate, setStartDate] = useState(``);
  const [endDate, setEndDate] = useState(``);
  const [description, setDescription] = useState(``);

  console.log(role, company, startDate, endDate, description);

  const updateAction = () => {
    dispatch(updateExperienceAction(experiences, params.id));
    setShow(false);
  };

  const deleteAction = () => {
    dispatch(deleteExperienceAction(params.id));
    setShow(false);
  };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="experience-card custom-card">
      <Container>
        <div className="header-card mb-2"> Experience</div>
        {experiences.map((experience, index) => {
          return (
            <Container key={experience._id}>
              <div>
                <div className="d-flex justify-content-end align-items-end">
                  <Button className="edit-icon" onClick={() => setShow(true)}>
                    <FiEdit2 />
                  </Button>
                  <Modal
                    dialogClassName="modal-100w"
                    aria-labelledby="example-custom-modal-styling-title"
                    show={show}
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        Edit Experiences
                      </Modal.Title>
                    </Modal.Header>
                    <p className="text-muted sm-txt">*Indicates required</p>
                    <Modal.Body>
                      <Form.Group>
                        <Form.Label>Role*</Form.Label>
                        <Form.Control
                          onChange={handleChangeRole}
                          type="text"
                          placeholder="Enter role"
                          value={role}
                          required
                        ></Form.Control>
                        <Form.Label>Company*</Form.Label>
                        <Form.Control
                          onChange={handleChangeCompany}
                          type="text"
                          placeholder="Enter company name"
                          value={company}
                          required
                        ></Form.Control>
                        <Form.Label>Start Date*</Form.Label>
                        <Form.Control
                          onChange={handleChangeStartDate}
                          type="date"
                          placeholder="Start Date"
                          value={startDate}
                          required
                        ></Form.Control>
                        <Form.Label>End date</Form.Label>
                        <Form.Control
                          onChange={handleChangeEndDate}
                          type="date"
                          placeholder="Enter End Date"
                          value={endDate}
                        ></Form.Control>
                        <Form.Label>Description*</Form.Label>
                        <Form.Control
                          onChange={handleChangeDescription}
                          type="text"
                          placeholder="Enter description"
                          value={description}
                          required
                        ></Form.Control>
                        <Button
                          variant="primary"
                          className="stubborn-btn"
                          onClick={() => updateAction()}
                        >
                          Save
                        </Button>
                        <Button
                          variant="danger"
                          className="stubborn-btn"
                          onClick={() => deleteAction()}
                        >
                          Delete
                        </Button>
                      </Form.Group>
                    </Modal.Body>
                    .
                  </Modal>
                </div>
                <Row className="experience-row">
                  <div className="mr-2">
                    <div className="company-logo">
                      <img
                        src="/assets/company-logo-default.png"
                        alt="company logo"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-column">
                      <div className="experience-info d-flex flex-column mb-2">
                        <div className="experience-role">{experience.role}</div>
                        <div className="experience-company">
                          {experience.company}
                        </div>
                        <div className="experience-date d-flex justify-content-center align-items-center">
                          <div className="experience-start-date">
                            {/* {format(
                              Date.parse(experience.startDate),
                              "MMM yyyy"
                            )} */}
                            Dec 2020
                          </div>
                          <div className="mx-2">-</div>
                          <div className="experience-end-date">
                            {/* {format(Date.parse(experience.endDate), "MMM yyyy")} */}
                            Mar 2021
                          </div>
                        </div>
                      </div>
                      <div className="experience-description">
                        {experience.description}
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
              {index + 1 !== experiences.length && <hr />}
            </Container>
          );
        })}
      </Container>
    </div>
  );
};

export default ExperienceCard;
