import React, { Component } from 'react'
import { connect } from "react-redux";
import { compose } from "redux";
import { getNames,getEmail,getPassword } from '../../redux/app-reducer';
import FormRegister from './FormRegister';

class FormRegisterContainer extends Component {
  render() {
    return (
        <FormRegister {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    userName: state.app.userName,
    userSurname: state.app.userSurname,
    email: state.app.email,
    userMiddlename: state.app.userMiddlename,
    birthday:state.app.birthday,
    password:state.app.password,
  }
}


export default compose(connect(mapStateToProps, { getNames,getEmail,getPassword }))(FormRegisterContainer)