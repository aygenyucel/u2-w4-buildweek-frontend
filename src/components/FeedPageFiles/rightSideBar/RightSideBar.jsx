import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import "./rightSideBar.css";
// import { BsInfoLg } from "react-icons/bs";
import { Link } from "react-router-dom";

const RightSideBar = ({ users }) => {
  return (
    <>
      <div className=" mb-2 d-flex flex-column main-div-profile-sidebar">
        <div>
          <h6 className="title-bar">People also wiewed</h6>
        </div>
        <Link to={`/profile/${users[8]?._id}`}>
          <div className="user-info-feed-side mt-3">
            <div className="profile-img-feed-side d-flex justify-content-center">
              <img src={users[8]?.image} alt="..." />
            </div>

            <div className="user-info-feed-side">
              <h6 className="">{users[8]?.name}</h6>
              <p className="user-title-p">{users[8]?.title}</p>
            </div>
            <div>
              <div className="rounded-button">
                <AiOutlinePlus className="mr-1 p-0" />
                Follow
              </div>
            </div>
          </div>
        </Link>
        <Link to={`/profile/${users[15]?._id}`}>
          <div className="user-info-feed-side mt-3">
            <div className="profile-img-feed-side d-flex justify-content-center">
              <img src={users[15]?.image} alt="..." />
            </div>

            <div className="user-info-feed-side">
              <h6 className="">{users[15]?.name}</h6>
              <p className="user-title-p">{users[15]?.title}</p>
            </div>
            <div>
              <div className="rounded-button">
                <AiOutlinePlus className="mr-1 p-0" />
                Follow
              </div>
            </div>
          </div>
        </Link>

        <div className="user-info-feed-side mt-3">
          <div className="profile-img-feed-side d-flex justify-content-center">
            <img src={users[9]?.image} alt="..." />
          </div>

          <div className="user-info-feed-side">
            <h6 className="">{users[9]?.name}</h6>
            <p className="user-title-p">{users[9]?.title}</p>
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
            <img src={users[17]?.image} alt="..." />
          </div>

          <div className="user-info-feed-side">
            <h6 className="">{users[17]?.name}</h6>
            <p className="user-title-p">{users[17]?.title}</p>
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
};

export default RightSideBar;
