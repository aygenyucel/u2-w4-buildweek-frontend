import { useState } from "react";
import { Container } from "react-bootstrap";
import CreateNewPost from "../createNewPost/CreateNewPost";
import GetPosts from "../FetchPosts/GetPosts";
import GetMyPosts from "../GetMyPosts/GetMyPosts";
import "./feedMainPage.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProfileBar from "../profile_bar/profileBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAction } from "../../../redux/actions";
import RightSideBar from "../rightSideBar/RightSideBar";

const FeedMainPage = () => {
  const [myPosts, setMyPosts] = useState(false);
  const handleChange = () => {
    setMyPosts(!myPosts);
  };
  const profileMainData = useSelector((state) => state.profile.data);
  console.log(profileMainData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction());
  }, []);
  return (
    <>
      <Container className="main-container-feed-page">
        <div className="profileBar">
          <ProfileBar mainData={profileMainData} />
        </div>
        <div className="main-content">
          <CreateNewPost mainData={profileMainData} />
          <button onClick={handleChange}>
            {myPosts ? "See all posts" : "See my posts"}
            <MdKeyboardArrowDown size={25} />
          </button>
          {myPosts ? <GetMyPosts /> : <GetPosts />}
        </div>
        <div className="side-footer">
          <RightSideBar />
        </div>
      </Container>
    </>
  );
};

export default FeedMainPage;
