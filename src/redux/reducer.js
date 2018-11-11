const initialState = {
  note: {
    noteList: [
      {
        id: 123,
        title: "How to learn ReactJS",
        content: "Step 1 - Learn JavaScript. Step 2 - Learn React.",
        updateDate: new Date().toISOString(),
        user: {
          name: "Sergei Garcia"
        }
      }
    ],
    noteDetails: {}
  },
  auth: {
    isLoggedIn: false,
    username: null,
    jwt: null
  }
};

export default function reducer(state = initialState, action) {
  if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      auth: { isLoggedIn: true, username: action.username, jwt: action.jwt }
    };
  } else if (action.type === "LOGOUT_SUCCESS") {
    return { ...state, auth: { isLoggedIn: false } };
  }
  return state;
}
