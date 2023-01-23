import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getFeedPostsAction } from "../../../redux/actions";
import "./getPosts.css";

const GetPosts = () => {
  const dispatch = useDispatch();
  let feedPosts = useSelector((state) => state.feedPosts.feedPosts);

  useEffect(() => {
    dispatch(getFeedPostsAction());
  }, []);

  return (
    <>
      {feedPosts.map((element, index) => (
        <div className="post-div mb-2" key={element._id}>
          <div className="d-flex">
            <div className="profile-img-post-feed  mt-2">
              <img src={element.user.image} alt="img" />
            </div>
            <div>
              <div className=" p-2 d-flex  flex-column">
                <p className="ml-1 name-user-p">
                  <strong>{element.username}</strong>
                </p>
                <p className="ml-1 title-user-p">{element.user.title}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="p-1">{element.text}</div>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <img
              className="responsive-img"
              src={`https://picsum.photos/id/${index}/520/280`}
              alt=""
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default GetPosts;
