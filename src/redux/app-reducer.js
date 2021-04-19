import { dateAPI } from "../api/api";

const SET_PERSONAL_DATA = "SET_PERSONAL_DATA";
const SET_EMAIL = "SET_EMAIL";
const SET_PASSWORD = "SET_PASSWORD";

// Начальные поля заполнены данными

// let initialState = {
//   userName: "Jon" ,
//   userSurname: "Snow" ,
//   userMiddlename: "Targaryen" ,
//   birthday: "01.01.1002" ,
//   email: "wardenofthenorth@housestark.seven" ,
//   password: "LordCommander998",
// }

// Начальные поля не заполнены
let initialState = {
  userName: "" ,
  userSurname: "" ,
  userMiddlename: "" ,
  birthday: "" ,
  email: "" ,
  password: "",
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONAL_DATA:
      return {
        ...state,
        ...action,
        birthday:action.newBirth,

      }
      case SET_EMAIL:
        return {
          ...state,
          ...action.payload
      }
      case SET_PASSWORD:
        return {
          ...state,
          ...action.payload
      }
    default:
      return state;
  }
}


export const setNamesData = (userName, userSurname, userMiddlename,newBirth) => ({
  type: SET_PERSONAL_DATA, 
  userName,userSurname,userMiddlename,newBirth
})

export const setEmail = (email) => ({
  type:SET_EMAIL,payload:{email}
})

export const setPassword = (password) => ({
  type:SET_PASSWORD,payload:{password}
})


export const getNames = (userName, userSurname, userMiddlename,birthday) => {
  return (dispatch) => {
    let newBirth = dateAPI.getFormat(birthday);
    dispatch(setNamesData(userName,userSurname,userMiddlename,newBirth))
  }
}

export const getEmail = (email) => {
  return (dispatch) => {
    dispatch(setEmail(email));
  }
}

export const getPassword = (password) => {
  return (dispatch) => {
    dispatch(setPassword(password));
  }
}

export default appReducer;