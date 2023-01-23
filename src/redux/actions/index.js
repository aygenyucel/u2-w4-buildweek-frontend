export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_ID = "GET_PROFILE_ID";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const GET_PROFILE_USER = "GET_PROFILE_USER";
export const GET_EXPERIENCES_USER = "GET_EXPERIENCES_USER";
export const GET_PROFILES_LIST = " GET_PROFILES_LIST";
export const GET_POSTS_LIST = "GET_POSTS_LIST";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE"
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE"

export const getProfileAction = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
    },
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        options
      );
      if (response.ok) {
        const profileData = await response.json();
        // console.log("Get user profile:", profileData);
        dispatch({
          type: GET_PROFILE,
          payload: profileData,
        });
        dispatch({
          type: GET_PROFILE_ID,
          payload: profileData._id,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getExperiencesAction = () => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
    },
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/5fc4baecb708c200175de89b/experiences`,
        options
      );
      if (response.ok) {
        const experiencesData = await response.json();
        // console.log("Get user profile", experiencesData);
        dispatch({
          type: GET_EXPERIENCES,
          payload: experiencesData,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getUserProfileAction = (userId) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
    },
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
        options
      );
      if (response.ok) {
        const userProfileData = await response.json();
        // console.log("Get another user profile", userProfileData);
        dispatch({
          type: GET_PROFILE_USER,
          payload: userProfileData,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getUserExperiencesAction = (userId) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
    },
  };
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        options
      );
      if (response.ok) {
        const userExperiencesData = await response.json();
        dispatch({
          type: GET_EXPERIENCES_USER,
          payload: userExperiencesData,
        });
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log("🚀 error", error);
    }
  };
};

export const getProfilesListAction = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
      },
    };
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        options
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: GET_PROFILES_LIST,
          payload: data,
        });
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFeedPostsAction = () => {
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
      },
    };
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts",
        options
      );
      if (response.ok) {
        let data = await response.json();

        const chunkOfPosts = data.reverse().splice(0, 20);
        dispatch({
          type: GET_POSTS_LIST,
          payload: chunkOfPosts,
        });
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateEditAction = (name, surname, bio, title, area) => {
  const changedDetails = {
    name: name,
    surname: surname,
    bio: bio,
    title: title,
    area: area,
  };

  return async (dispatch) => {
    const optionPut = {
      method: "PUT",
      body: JSON.stringify(changedDetails),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        optionPut
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: EDIT_PROFILE,
          payload: data,
        });
        alert("Profile was updated!");
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewPostAction = (textPost) => {
  return async () => {
    const newPost = { text: textPost };
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
      },
      body: JSON.stringify(newPost),
    };
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/ ",
        options
      );
      if (response.ok) {
        alert("Post was sent!");
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePostAction = (idPost) => {
  return async () => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
      },
    };
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${idPost}`,
        options
      );
      if (response.ok) {
        alert("Post was deleted!");
      } else {
        console.log("Comment NOT deleted!");
      }
    } catch (error) {
      console.log(error);
      console.log("Post NOT deleted!");
    }
  };
};

export const editPostAction = (idPost, textPost) => {
  const newPost = { text: textPost };

  return async () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhZTc1Y2U0OGY2MzAwMTUzYTUzMmIiLCJpYXQiOjE2NzEwOTYyMTMsImV4cCI6MTY3MjMwNTgxM30.7Rm2vX2T4244BipRvt_pccRXV7K35csrQyIsQsgfylE",
      },
      body: JSON.stringify(newPost),
    };
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${idPost}`,
        options
      );
      if (response.ok) {
        alert("Post was edited!");
      } else {
        console.log("Post NOT edited!");
      }
    } catch (error) {
      console.log(error);
      console.log("Post NOT edited!");
    }
  };
};

export const updateExperienceAction = ({role, company, startDate, endDate, description}, userId) => {
  const changedExperience = {
    role: role,
    company: company,
    startDate: startDate,
    endDate: endDate,
    description: description,
  };

  return async (dispatch) => {
    const optionPost = {
      method: "POST",
      body: JSON.stringify(changedExperience),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        optionPost
      );
      if (response.ok) {
        let data = await response.json();
        alert("Added experience!");
      } else {
        console.log(`something went wrong`);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteExperienceAction = (userId) => {
  return async () => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZjNmYmM5NmRmYjAwMTUyMWE1YmUiLCJpYXQiOjE2NzA4MzcyNDQsImV4cCI6MTY3MjA0Njg0NH0.lj6PsFRCQqFIpT6qYY681bm60-LvcXLTb-HKHJoptLI",
      },
    };
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/`,
        options
      );
      if (response.ok) {
        alert("Experience was deleted!");
      } else {
        console.log("Experience was NOT deleted!");
      }
    } catch (error) {
      console.log(error);
      console.log("Experience NOT deleted!");
    }
  };
};
