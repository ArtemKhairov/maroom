import React from "react";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { EmailSchema } from "../../../utils/validators";

const EmailForm = (props) => {

  const { email } = props;

  const formik = useFormik({
    initialValues: {
      email: email,
    },
    validationSchema: EmailSchema,
    onSubmit: (values) => {
      props.getEmail(values.email);
      props.nextStep();
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container direction="column" justify="center" alignItems="center">
          <TextField
            style={{marginBottom:20}}
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <div>
            <Button
              style={{marginRight:20}}
            variant="contained"
            onClick={props.prevStep}
            type="submit"
            color="secondary"
          >
            Назад 
          </Button>
          <Button variant="contained" type="submit" color="primary">
            Подтвердить
          </Button>
          </div>
        </Grid>
      </form>
      <br />
    </>
  );
};

export default EmailForm;
