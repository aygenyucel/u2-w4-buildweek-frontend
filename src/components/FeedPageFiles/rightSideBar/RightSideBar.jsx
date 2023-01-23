import React from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { getProfilesListAction } from "../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import "./rightSideBar.css";
// import { BsInfoLg } from "react-icons/bs";

export default function RightSideBar() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.listOfProfiles.profilesList);

  useEffect(() => {
    dispatch(getProfilesListAction());
  }, []);

  console.log(users);
  return (
    <>
      <div className=" mb-2 d-flex flex-column main-div-profile-sidebar">
        <div>
          <h6 className="title-bar">People also wiewed</h6>
        </div>

        <div className="user-info-feed-side mt-3">
          <div className="profile-img-feed-side d-flex justify-content-center">
            <img src={users[61]?.image} alt="..." />
          </div>

          <div className="user-info-feed-side">
            <h6 className="">{users[61]?.name}</h6>
            <p className="user-title-p">{users[61]?.title}</p>
          </div>
          <div>
            <div className="rounded-button">
              <AiOutlinePlus className="mr-1 p-0" />
              Follow
            </div>
          </div>
        </div>
        <div className="user-info-feed-side mt-3">
          <div className="profile-img-feed-side d-flex justify-content-center">
            <img src={users[62]?.image} alt="..." />
          </div>

          <div className="user-info-feed-side">
            <h6 className="">{users[62]?.name}</h6>
            <p className="user-title-p">{users[62]?.title}</p>
          </div>
          <div>
            <div className="rounded-button">
              <AiOutlinePlus className="mr-1 p-0" />
              Follow
            </div>
          </div>
        </div>

        <div className="user-info-feed-side mt-3">
          <div className="profile-img-feed-side d-flex justify-content-center">
            <img src={users[79]?.image} alt="..." />
          </div>

          <div className="user-info-feed-side">
            <h6 className="">{users[79]?.name}</h6>
            <p className="user-title-p">{users[79]?.title}</p>
          </div>
          <div>
            <div className="rounded-button">
              <AiOutlinePlus className="mr-1 p-0" />
              Follow
            </div>
          </div>
        </div>

        <div className="user-info-feed-side mt-3">
          <div className="profile-img-feed-side d-flex justify-content-center">
            <img src={users[77]?.image} alt="..." />
          </div>

          <div className="user-info-feed-side">
            <h6 className="">{users[77]?.name}</h6>
            <p className="user-title-p">{users[77]?.title}</p>
          </div>
          <div>
            <div className="rounded-button">
              <AiOutlinePlus className="mr-1 p-0" />
              Follow
            </div>
          </div>
        </div>
        <div id="recommend" className="ml-3 mt-4 pb-1">
          <a href="/#">
            <p>
              View all recommendations <FiArrowRight />
            </p>
          </a>
        </div>
        <div className="right__side__footer p-2">
          <div className="d-flex justify-content-center">
            <p className="footer-itens-p">about</p>
            <p className="footer-itens-p">acessibility</p>
            <p className="footer-itens-p"> help center </p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="footer-itens-p"> privacy & terms</p>
            <p className="footer-itens-p">ad choises</p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="footer-itens-p"> advertising </p>
            <p className="footer-itens-p">business services</p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="footer-itens-p"> get the linkedin app </p>
            <p className="footer-itens-p">more</p>
          </div>
          <div className="d-flex  mt-5 justify-content-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1024px-LinkedIn_2021.svg.png"
              className="logo-footer-side"
              alt="Linked img"
            />

            <p className="footer-itens-p-footer">
              linkedin corporation &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
