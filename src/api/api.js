import * as axios from "axios";
import moment from "moment";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://localhost:5000",
  headers: {},
});

// Запросы на сервер
export const namesAPI = {
  // Получить пользователя используя Имя
  getUserByName(userName, userSurname, userMiddlename) {
    return instance.get("route/get/user");
  },
  // Отправить данные для создания user
  setNewUser(userName, userSurname, userMiddlename, birthday, email, password) {
    return instance.post("route/for/newUser");
  },
};

// Работа с объектом время moment.js
export const dateAPI = {
  getFormat(birthday) {
    return moment(birthday).format("MM/DD/YYYY");
  },
};
