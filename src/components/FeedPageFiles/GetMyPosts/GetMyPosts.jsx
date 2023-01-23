import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getFeedPostsAction,
  deletePostAction,
  editPostAction,
} from "../../../redux/actions";
import { FiEdit2 } from "react-icons/fi";
import { Button, Modal, Form, Row } from "react-bootstrap";

const GetMyPosts = () => {
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //modal

  const [editedPost, setEditedPost] = useState("");

  const dispatch = useDispatch();
  const feedPosts = useSelector((state) => state.feedPosts.feedPosts);

  useEffect(() => {
    dispatch(getFeedPostsAction());
  }, []);
  const myPostsList = feedPosts.filter(
    (element) => element.username === "aygenyucel"
  );
  console.log(myPostsList);

  const handleChange = (e) => {
    setEditedPost(e.target.value);
  };
  return (
    <>
      {myPostsList.map((element, index) => (
        <div className="mb-2" key={element._id}>
          <div className="post-div " key={element._id}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="profile-img-post-feed mt-2">
                  <img src={element.user.image} alt="img" />
                </div>
                <div>
                  <div className=" p-2 d-flex  flex-column">
                    <p className="ml-1 name-user-p ">
                      <strong>{element.username}</strong>
                    </p>
                    <p className="ml-1 title-user-p">{element.user.title}</p>
                  </div>
                </div>
              </div>
              <div onClick={handleShow}>
                <FiEdit2 size={20} />
              </div>
            </div>
            <div>
              <div>
                <div className="p-1">{element.text}</div>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <img
                  className="responsive-img"
                  src={`https://picsum.photos/id/${index}/510/280`}
                  alt=""
                />
              </div>
            </div>
          </div>

          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit or Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    value={editedPost}
                    placeholder={element.text}
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={
                    (handleClose, editPostAction(element._id, editedPost))
                  }
                >
                  Save Changes
                </Button>

                <Button
                  variant="danger"
                  className="mr-2"
                  onClick={deletePostAction(element._id)}
                >
                  DELETE POST
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      ))}
    </>
  );
};

export default GetMyPosts;
