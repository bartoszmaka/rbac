import React from 'react'
import { Redirect } from 'react-router-dom';

import { AuthConsumer } from '../contexts/auth';

const AUTH0_MAGIC_REGEX = /access_token|id_token|error/

const Callback = ({ location }) => {
  return (
    <AuthConsumer>
      {(context) => {
        if (AUTH0_MAGIC_REGEX.test(location.hash)) {
          context.handleAuthentication()
        }
        return <Redirect to='/' />
      }}
    </AuthConsumer>
  )
}

export default Callback
