const initialState = {
  images: null,
  error: null,
  sectionFilterValue: "hot",
  sortFilterValue: "viral",
  viralFilter: false,
  windowFilter: "day"
};

const imageFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WINDOW_FILTER":
      return {
        ...state,
        windowFilter: action.payload
      };
    case "SET_VIRAL_FILTER":
      return {
        ...state,
        viralFilter: !state.viralFilter
      };
    case "SET_SECTION_FILTER":
      return {
        ...state,
        sectionFilterValue: action.payload
      };
    case "SET_SORT_FILTER":
      return {
        ...state,
        sortFilterValue: action.payload
      };
    case "INITIAL_LOAD_IMAGES":
      return {
        ...state,
        images: action.payload
      };
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default imageFilterReducer;
