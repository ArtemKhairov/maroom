// import React from "react";
import * as Yup from "yup";

export const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "min 6")
    .matches(
      /^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/,
      "Пароль может содеражть только латынь!"
    )
    .required("Required"),
  passwordCheck: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароль должен совпадать!")
    .required("Введите пароль повторно!"),
});


export const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,"Введите корректный email!")
    .required("Необходим Email!"),
});

export const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Необходимо заполнить поле!")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Можно использовать только латынь!"
    ),
  userSurname: Yup.string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Необходимо заполнить поле!")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Можно использовать только латынь!"
    ),
  userMiddlename: Yup.string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Необходимо заполнить поле!")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Можно использовать только латынь!"
    ),
});




// export const NameSchema = Yup.object().shape({
//   userName: Yup.string()
//     .min(3, "Минимум 3 символа")
//     .max(50, "Максимум 50 символов")
//     .required("Необходимо заполнить поле!")
//     .matches(
//       /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//       "Name can only contain Latin letters."
//     ),
// })

// export const SurNameSchema = Yup.object().shape({
//   userName: Yup.string()
//     .min(3, "Минимум 3 символа")
//     .max(50, "Максимум 50 символов")
//     .required("Необходимо заполнить поле!")
//     .matches(
//       /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//       "Name can only contain Latin letters."
//     ),
// })

// export const MiddleNameSchema = Yup.object().shape({
//   userName: Yup.string()
//     .min(3, "Минимум 3 символа")
//     .max(50, "Максимум 50 символов")
//     .required("Необходимо заполнить поле!")
//     .matches(
//       /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//       "Name can only contain Latin letters."
//     ),
// })