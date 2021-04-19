import React from "react";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { PasswordSchema } from "../../../utils/validators";

const PasswordForm = (props) => {

  const { password } = props

  const formik = useFormik({
    initialValues: {
      password: password,
      passwordCheck:""
    },
    validationSchema:PasswordSchema,
    onSubmit: (values) => {
      props.getPassword(values.password);
      props.nextStep();
    }
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
      <Grid container direction="column" justify="center" alignItems="center">
          <TextField
            style={{marginBottom:20}}
          id="password"
            name="password"
            type="password"
          label="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
          <TextField
            style={{marginBottom:20}}
          id="passwordCheck"
            name="passwordCheck"
            type="password"
          label="Проверка пароля"
          value={formik.values.passwordCheck}
          onChange={formik.handleChange}
          error={formik.touched.passwordCheck && Boolean(formik.errors.passwordCheck)}
          helperText={formik.touched.passwordCheck && formik.errors.passwordCheck}
        />
        <br />
        <div>
        <Button style={{marginRight:20}} variant="contained" onClick={props.prevStep} color="secondary">
          Назад
        </Button>
        <Button variant="contained" type="submit" color="primary">
          Подтвердить
        </Button>
          </div>
          </Grid>
      </form>
    </>
  );
};

export default PasswordForm;
