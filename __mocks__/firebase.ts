// __mocks__/firebase.js
const mockData = {
  val: () => ({
    breakfast: "Pancakes",
    lunch: "Sandwich",
    dinner: "Pizza",
  }),
  exists: () => true,
};

const get = jest.fn(() => Promise.resolve(mockData));

const child = jest.fn(() => ({
  get,
}));

const ref = jest.fn(() => ({
  child,
}));

const database = jest.fn(() => ({
  ref,
}));

const firebase = {
  database,
};

export default firebase;
