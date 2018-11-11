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
    isLoggedIn: true,
    username: null,
    jwt: null
  }
};

export default function reducer(state = initialState, action) {
  return state;
}
