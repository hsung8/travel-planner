import { SET_ACTIVITIES, SELECTED, SAVED_ACTIVITIES } from "./types";

// const yelp = `Bearer 1PLVyi4fmTRLknS5zUS29KZGV5BDDh3e6WCWv5ds7SnaHvk1rFDKHmW90CFeTMogcDGUhK_qEXWtsuSGZ9k6HaXk7aeWEPIfx-yCCg2Z_ftSvShgumpl9MIf3UarX3Yx`

export const addActivitiesToMongo = (activity) => (dispatch) => {
  const key = activity.key;
  fetch(`/api/users/activities`, {
    method: "PUT",
    body: JSON.stringify(activity),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((savedActivities) => {
      console.log(
        "this come from line 18 of activitiesAction, this is a success response from the backend after it added the activities to the user database",
        key
      );
      dispatch({
        type: SAVED_ACTIVITIES,
        payload: savedActivities,
      });
      dispatch({
        type: SELECTED,
        payload: key,
      });
    })
    .catch((err) => console.log(err));
};

// get activities from YELP API, the fulladdress comes from user input
export const getActivitiesByAddress = (searchParams) => (dispatch) => {
  const searchCondition = {
    address: searchParams.searchTerm,
    startDate: searchParams.startDate,
    endDate: searchParams.endDate
  };
  fetch(`/api/users/getActivities`, {
    method: "POST",
    body: JSON.stringify(searchCondition),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => {
        console.log(res);
        if( !res.ok ){
            throw Error(res.statusText);
        }     
        else return res.json();
    })
    .then((activities) => {
      console.log(
        "this comes from activities Action.js, console.log the activities from YELP API called by our backend",
        activities
      );
      dispatch({
        type: SET_ACTIVITIES,
        payload: activities,
      });
    })
    .catch((error) => {
      console.log(" i encounter an erorr");
      dispatch({
          type: SET_ACTIVITIES,
          payload: []
      })

    });
};

export const getSavedActivities = (id) => (dispatch) => {
  fetch(`/api/users/getSavedActivities/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((res) => res.json())
    .then((activities) => {
      console.log(
        "this comes from activities Action.js, console.log all the saved activities in our mongo database",
        activities
      );
      dispatch({
        type: SAVED_ACTIVITIES,
        payload: activities,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
