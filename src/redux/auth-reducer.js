const initialState = {
  isLoggedIn: false,
  username: null,
  jwt: null
};

export default function reducer(state = initialState, action) {
  if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      isLoggedIn: true,
      username: action.username,
      jwt: action.jwt
    };
  } else if (action.type === "LOGOUT_SUCCESS") {
    return { ...state, isLoggedIn: false };
  }
  return state;
}
