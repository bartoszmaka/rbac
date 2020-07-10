import React from 'react'

import { AuthConsumer } from '../contexts/auth';

const Login = () => {
  return (
    <AuthConsumer>
      {({ initiateLogin }) => (
        <button type='button' onClick={initiateLogin}>
          Login
        </button>
      )}
    </AuthConsumer>
  )
}

export default Login
