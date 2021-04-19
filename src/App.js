import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Container from "@material-ui/core/Container";
import FormRegisterContainer from "./components/RegisterForm/FormRegisterContainer";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Container style={{ marginTop: "90px" }} maxWidth="lg">
            <FormRegisterContainer />
          </Container>
        </Route>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </>
  );
};

const TestApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default TestApp;
