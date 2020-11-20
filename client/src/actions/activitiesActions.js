import { SET_ACTIVITIES, SELECTED_ACTIVITIES, SAVED_ACTIVITIES } from "./types";

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
      savedActivities
      );
      dispatch({
        type: SAVED_ACTIVITIES,
        payload: savedActivities,
      });
      dispatch({
        type: SELECTED_ACTIVITIES,
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
      dispatch({
        type: SAVED_ACTIVITIES,
        payload: activities,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
