const initialState = {
  authError: null,
  authCompleted: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return { ...state, authCompleted: true, authError: null };
    case "AUTH_FAIL":
      return { ...state, authError: "auth failed", authCompleted: false };
    default:
      return state;
  }
};

export default authReducer;
