const INITIAL_LOAD_IMAGES = "INITIAL_LOAD_IMAGES";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_SECTION_FILTER = "SET_SECTION_FILTER";
const SET_SORT_FILTER = "SET_SORT_FILTER";
const SET_VIRAL_FILTER = "SET_VIRAL_FILTER";
const SET_WINDOW_FILTER = "SET_WINDOW_FILTER";

export const setWindowFilter = windowVal => {
  return {
    type: SET_WINDOW_FILTER,
    payload: windowVal
  };
};

export const setViralFilter = () => {
  return {
    type: SET_VIRAL_FILTER
  };
};

export const setSortFilter = sort => {
  return {
    type: SET_SORT_FILTER,
    payload: sort
  };
};

export const setSectionFilter = section => {
  console.log(section);
  return {
    type: SET_SECTION_FILTER,
    payload: section
  };
};

export const initialLoadImages = imageData => {
  console.log("initial lod");
  return {
    type: INITIAL_LOAD_IMAGES,
    payload: imageData
  };
};

export const setErrorOnLoad = errorMsg => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: errorMsg
  };
};

export const makeAPIcall = () => {
  return (dispatch, getState) => {
    const {
      sectionFilterValue,
      sortFilterValue,
      viralFilter,
      windowFilter
    } = getState();

    fetch(
      `https://api.imgur.com/3/gallery/${sectionFilterValue}/${sortFilterValue}/${windowFilter}?showViral=${viralFilter}&page=[0-99]`,
      {
        headers: {
          Authorization: "Client-ID 51cfc0a8c292269"
        }
      }
    )
      .then(response => response.json())
      .then(res => {
        dispatch(initialLoadImages(res.data));
      })
      .catch(err => {
        dispatch(setErrorOnLoad(err));
      });
  };
};
