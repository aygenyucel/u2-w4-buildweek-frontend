import "./profileBar.css";

const ProfileBar = ({ mainData }) => {
  return (
    <div className="main-container-profile-bar">
      <div className="main-div-profilebar mb-2 d-flex flex-column ">
        <div className="main-div-profilebar-background">
          <img
            src="/assets/profile-background-default.png"
            alt="profile background"
          />
        </div>
        <div className="profile-img-feed d-flex justify-content-center">
          <img src={mainData.image} alt="profile img" />
        </div>

        <div className="mt-1">
          <div className="d-flex justify-content-center nameAndSurname">
            {mainData.name} {mainData.surname}
          </div>
          <div className="d-flex justify-content-center myTitle">
            {mainData.title}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3 myArea">
          {mainData.area}
        </div>
        <div className="d-flex justify-content-center myEmail">
          {mainData.email}
        </div>
      </div>
      {/* /////secondcard */}
      <div className="second-card-main">
        <div className="main-div-profilebar mb-2 d-flex flex-column">
          <div className="mt-1">
            <div className="second-card">
              <h6 className="pt-2">Recents</h6>
              <p>#Javascript</p>
              <p>#React</p>
              <p>#Epicode</p>

              <h6 className="pt-2 mt-4 events">Events</h6>
              <p className="bolder">Guest Lecture</p>
              <h6 className="pt-2 mt-4 events">Groups</h6>
              <p className="bolder">Epicoders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
