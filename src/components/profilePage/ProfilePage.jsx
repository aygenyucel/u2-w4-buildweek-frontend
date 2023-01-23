import ProfileMainCard from "../profileMainCard/ProfileMainCard";
import SideBar from "../sidebar/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import "./profilePage.css";
import ExperienceCard from "../experienceCard/ExperienceCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getExperiencesAction,
  getProfileAction,
  getUserExperiencesAction,
  getUserProfileAction,
} from "../../redux/actions";
import AboutCard from "../aboutCard/AboutCard";
import { useLocation, useParams } from "react-router-dom";
import SuggestedCard from "../suggestedCard/SuggestedCard";
import ActivityCard from "../activityCard/ActvityCard";
import EducationCard from "../educationCard/EducationCard";
import LanguagesCard from "../languagesCard/LanguagesCard";
import Footer from "../footer/footer";
import ResourcesCard from "./../ResourcesCard/ResourcesCard";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const dynamicUrl = location.pathname.slice(
    location.pathname.lastIndexOf("/") + 1,
    location.pathname.length
  );

  //getting the datas for own profile
  const profileMainData = useSelector((state) => state.profile.data);
  const profileExperiencesData = useSelector(
    (state) => state.profile.experiencesData
  );

  //getting the datas for other users' profile
  const userMainData = useSelector((state) => state.usersProfile.userData);
  const userExperiencesData = useSelector(
    (state) => state.usersProfile.userExperiencesData
  );

  useEffect(() => {
    if (dynamicUrl === "me") {
      dispatch(getExperiencesAction());
      dispatch(getProfileAction());
    } else {
      dispatch(getUserProfileAction(params.id));
      dispatch(getUserExperiencesAction(params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dynamicUrl]);

  return (
    <>
      {dynamicUrl === "me" ? (
        <>
          <Container>
            <div className="d-flex mt-2">
              <div className="main-card-div">
                <ProfileMainCard
                  mainData={profileMainData}
                  isMyProfile={true}
                />
                {/* checking if there are any bio */}
                {profileMainData.bio && <AboutCard bio={profileMainData.bio} />}
                {/* checking if there are any experiences */}
                {profileExperiencesData.length !== 0 && (
                  <ExperienceCard experiences={profileExperiencesData} />
                )}
                <SuggestedCard />
                <ResourcesCard />
                <ActivityCard />
                <EducationCard />
                <LanguagesCard />
              </div>
              <div className="sidebar-div">
                <SideBar />
              </div>
            </div>
            <Footer />
          </Container>
        </>
      ) : (
        <>
          <Container className="d-flex mt-2">
            <div className="main-card-div">
              <ProfileMainCard mainData={userMainData} />
              {/* checking if there are any bio */}
              {userMainData.bio && <AboutCard bio={userMainData.bio} />}
              {/* checking if there are any experiences */}
              {userExperiencesData && userExperiencesData.length > 0 && (
                <ExperienceCard experiences={userExperiencesData} />
              )}
              <EducationCard />
              <LanguagesCard />
            </div>

            <div className="sidebar-div">
              <SideBar />
            </div>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default ProfilePage;
