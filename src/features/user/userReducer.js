const inistialState = {
  user: [],
  loading: true,
};

const userReducer = (state = inistialState, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return {
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
