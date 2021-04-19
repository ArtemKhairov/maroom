import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const Confirm = (props) => {
  const ShowForm = (props) => {
    return (
      <>
        <Grid container direction="column" justify="center" alignItems="center">
          <List>
            <ListItem>
              <ListItemText primary="Имя" secondary={props.userName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Фамилия" secondary={props.userSurname} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Отчество"
                secondary={props.userMiddlename}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Дата рождения"
                secondary={props.birthday}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="email" secondary={props.email} />
            </ListItem>
          </List>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <h1 style={{ marginBottom: 0 }}>Примите поздравления!</h1>
        <h2>Вы успешно заполнили все поля.</h2>
      </Grid>

      <ShowForm {...props} />

      <Grid container direction="column" justify="center" alignItems="center">
        <div>
          <Button
            style={{ marginRight: 20 }}
            variant="contained"
            onClick={props.prevStep}
            color="secondary"
          >
            Назад
          </Button>
          <Button variant="contained" onClick={props.homeStep} color="primary">
            Вернуться в начало
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default Confirm;
