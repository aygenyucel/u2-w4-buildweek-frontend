import React from "react";
import "./sidebar.css";
import { Col, Container, Row } from "react-bootstrap";
import { QuestionCircleFill } from "react-bootstrap-icons";
import { SendFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
// import { getProfilesListAction } from "../../redux/actions/index";

const SideBar = () => {
  const [profiles, setProfiles] = useState([]);
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
    },
  };

  const fetchProfiles = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        options
      );
      if (response.ok) {
        let data = await response.json();
        setProfiles(data.slice(0, 5));
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfiles();
    console.log("xxx", profiles);
    // getProfilesListAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="sidebar-right ">
      <div className="content-div1 custom-card">
        <Col className="content-Col">
          <Row className="content-Row d-flex justify-content-between">
            <div className="header-small ml-4 ">
              <div className="text-light-grey" style={{ cursor: "pointer" }}>
                Edit public profile & URL
              </div>
            </div>
            <div className="mr-2" style={{ cursor: "pointer" }}>
              <QuestionCircleFill />
            </div>
          </Row>
          {/* <div className="trans-line"></div>
          <Row className="content-Row">
            <p className="mt-3">
              Add profile in another language <QuestionCircleFill />
            </p>
          </Row> */}
        </Col>
      </div>
      <div className="viewer-profiles">
        <Col className="py-3 px-4">
          <p className=" mb-4 header-card">People also viewed</p>
          {profiles.map((profile, index) => {
            return (
              <div key={profile._id}>
                <div className="viewers d-flex flex-column pt-0 mb-3">
                  <div className="d-flex ">
                    <div className="viewer-picture mr-2">
                      <img
                        className="linkedin-user-image pro-pic br-100"
                        src={profile.image}
                        alt="pro-pic"
                        width={55}
                        height={55}
                      />
                    </div>

                    <div className="viewer-job-description d-flex flex-column">
                      <a href={`/profile/${profile._id}`}>
                        <div className=" ml-2">
                          <p
                            className="align-top pt-0 mb-1 bigger-font header-small"
                            style={{ fontSize: "0.9rem" }}
                          >
                            {profile.name} {profile.surname}
                          </p>
                          <p
                            className="text-secondary text-light-grey"
                            style={{ fontWeight: "400" }}
                          >
                            {profile.title}
                          </p>
                          <p
                            className="text-secondary text-light-grey"
                            style={{ fontWeight: "400" }}
                          >
                            {" "}
                            {profile.area}
                          </p>
                        </div>
                      </a>
                      <div>
                        <div className="align-self-center">
                          <button className=" mt-3 message-btn">
                            <span className="mr-2">
                              <SendFill className="plus-icon opaque-much" />
                            </span>
                            Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index + 1 !== profiles.length && <hr />}
              </div>
            );
          })}
        </Col>
      </div>
    </Container>
  );
};
export default SideBar;
