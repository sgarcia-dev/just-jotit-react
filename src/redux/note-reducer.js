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
    },
    {
      id: 456,
      title: "How to learn CSS",
      content: "Step 1 - Learn CSS.",
      updateDate: new Date().toISOString(),
      user: {
        name: "Sergei Garcia"
      }
    },
    {
      id: 789,
      title: "How to Graduate",
      content:
        "Step 1 - Learn to code. Step 2 - Build Capstones. Step 3 - Graduate.",
      updateDate: new Date().toISOString(),
      user: {
        name: "Sergei Garcia"
      }
    }
  ],
  noteDetails: {
    id: 123,
    title: "Note Placeholder Title",
    content: "Note Placeholder Content",
    updateDate: new Date().toISOString(),
    user: {
      name: "Sergei Garcia"
    }
  }
};

export default function reducer(state = initialState, action) {
  return state;
}
