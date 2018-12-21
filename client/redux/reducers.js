const initialState1 = {};

const dummyReducer = (state = initialState1, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState2 = {};

const dummyReducer2 = (state = initialState2, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { dummyReducer, dummyReducer2 };
