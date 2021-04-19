import React from "react";
import "moment/locale/ru";
import { useFormik } from "formik";
import MomentUtils from "@date-io/moment";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {  KeyboardDatePicker } from "@material-ui/pickers";
import { SignupSchema } from "../../../utils/validators";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";


const PersonalDataForm = (props) => {
  const locale="ru"
  const { userName, userMiddlename, userSurname } = props;
  const selectedDate=new Date()

  const formik = useFormik({
    initialValues: {
      userName: userName,
      userSurname: userSurname,
      userMiddlename: userMiddlename,
      birthday: selectedDate,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      props.getNames(
        values.userName,
        values.userSurname,
        values.userMiddlename,
        values.birthday
      );
      props.nextStep();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column" justify="center" alignItems="center">
          
          <TextField
            style={{marginBottom:20}}
            id="username"
            name="userName"
            label="Имя"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />

          <TextField
            style={{marginBottom:20}}
            id="userSurname"
            name="userSurname"
            label="Фамилия"
            value={formik.values.userSurname}
            onChange={formik.handleChange}
            error={
              formik.touched.userSurname && Boolean(formik.errors.userSurname)
            }
            helperText={formik.touched.userSurname && formik.errors.userSurname}
          />

          <TextField
            style={{marginBottom:20}}
            id="userMiddlename"
            name="userMiddlename"
            label="Отчество"
            value={formik.values.userMiddlename}
            onChange={formik.handleChange}
            error={
              formik.touched.userMiddlename &&
              Boolean(formik.errors.userMiddlename)
            }
            helperText={
              formik.touched.userMiddlename && formik.errors.userMiddlename
            }
          />

          <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
            <KeyboardDatePicker
             style={{marginBottom:20}}
              autoOk
              variant="inline"
              inputVariant="outlined"
              label="Дата рождения"
              format="DD/MM/yyyy"
              value={formik.values.birthday}
              InputAdornmentProps={{ position: "start" }}
              onChange={(value) => formik.setFieldValue("birthday", value)}
              invalidDateMessage={"Неправильный формат даты!"}
              maxDate={selectedDate}
              maxDateMessage={"Введите корректную дату рождения!"}
            />
          </MuiPickersUtilsProvider>

          <Button color="primary" variant="contained"  type="submit">
            Подтвердить
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default PersonalDataForm;
