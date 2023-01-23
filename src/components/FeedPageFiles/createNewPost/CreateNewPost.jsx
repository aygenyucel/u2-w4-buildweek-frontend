import { Row, Form, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createNewPostAction } from "../../../redux/actions";
import "./createNewPost.css";
import { AiFillPicture } from "react-icons/ai";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { BsCalendarEventFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";

const CreateNewPost = ({ mainData }) => {
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ///end of modal

  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState("");

  const handleChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createNewPostAction(newPost));
    setNewPost(" ");
  };

  return (
    <>
      <div className="create-post-div">
        <div className="d-flex justify-content-center fake-input-container">
          <div className="profile-img-post-top p-2 mt-2">
            <img src={mainData.image} alt="profile img" />
          </div>
          <div className="p-2 mt-2 ">
            <div
              className="fake-input p-2 d-flex align-items-center"
              onClick={handleShow}
            >
              <p className="ml-1">Start a post</p>
            </div>
          </div>
        </div>
        <div className="main-div-icons">
          <div className="d-flex justify-content-around mt-4">
            <div className="div-icons-post d-flex justify-content-around align-items-center">
              <div>
                <AiFillPicture size={22} color="#378FE9" />
              </div>
              <div>
                <p className="div-icons-p">Photo</p>
              </div>
            </div>
            <div className="div-icons-post d-flex justify-content-around align-items-center">
              <div>
                <BsFillPlayBtnFill size={22} color="#5F9B41" />
              </div>
              <div>
                <p className="div-icons-p">Video</p>
              </div>
            </div>
            <div className="div-icons-post d-flex justify-content-around align-items-center">
              <div>
                <BsCalendarEventFill size={22} color="#CD994B" />
              </div>
              <div>
                <p className="div-icons-p">Event</p>
              </div>
            </div>
            <div className="div-icons-post d-flex justify-content-around align-items-center">
              <div>
                <MdArticle size={22} color="#E16745" />
              </div>
              <div>
                <p className="div-icons-p">Write article</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-itens-center">
            <div className="profile-img-post-modal">
              <img src={mainData.image} alt="profile img" />
            </div>
            <div className="mt-2">
              <div className="d-flex ml-2 nameAndSurname">
                {mainData.name} {mainData.surname}
              </div>
            </div>
          </div>
          <div>
            <Form onSubmit={handleSubmit}>
              <Form.Control
                className="mt-4 form-create-post"
                as="textarea"
                value={newPost}
                onChange={handleChange}
                placeholder="What do you want to talk about?"
              />
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(handleClose, handleSubmit)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateNewPost;
