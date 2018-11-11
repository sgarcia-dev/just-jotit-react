const initialState = {
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
};

export default function reducer(state = initialState, action) {
  return state;
}
