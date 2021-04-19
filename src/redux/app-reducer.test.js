import appReducer, { setNamesData, setEmail, setPassword } from "./app-reducer";

let state = {
  userName: "Jon",
  userSurname: "Snow",
  userMiddlename: "Targaryen",
  birthday: "01.01.1002",
  email: "wardenofthenorth@housestark.seven",
  password: "LordCommander998",
};

it("email should be changed", () => {
  // 1. test data
  let action = setEmail("JaimeLannister@kingslayer.lanister");

  // 2. action
  let newState = appReducer(state, action);

  // 3. expectation
  expect(newState.email).toBe("JaimeLannister@kingslayer.lanister");
});

it("password should be changed", () => {
  // 1. test data
  let action = setPassword("youknownothingjonsnow");

  // 2. action
  let newState = appReducer(state, action);

  // 3. expectation
  expect(newState.password).toBe("youknownothingjonsnow");
});

it("name should be changed", () => {
  // 1. test data
  let action = setNamesData("Tormund", "GiantsSlayer", "Orange", "04/04/2011");

  // 2. action
  let newState = appReducer(state, action);

  // 3. expectation
  expect(newState.userName).toBe("Tormund");
});

it("userSurname should be changed", () => {
  // 1. test data
  let action = setNamesData("Tormund", "GiantsSlayer", "Orange", "04/04/2011");

  // 2. action
  let newState = appReducer(state, action);

  // 3. expectation
  expect(newState.userSurname).toBe("GiantsSlayer");
});

it("userMiddlename should be changed", () => {
  // 1. test data
  let action = setNamesData("Tormund", "GiantsSlayer", "Orange", "04/04/2011");

  // 2. action
  let newState = appReducer(state, action);

  // 3. expectation
  expect(newState.userMiddlename).toBe("Orange");
});

it("birthday should be changed", () => {
  // 1. test data
  let action = setNamesData("Tormund", "GiantsSlayer", "Orange", "04/04/2011");

  // 2. action
  let newState = appReducer(state, action);

  // 3. expectation
  expect(newState.birthday).toBe("04/04/2011");
});


