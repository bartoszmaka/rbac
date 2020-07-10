import React from 'react'

import { AuthConsumer } from '../contexts/auth';

const Logout = () => {
  return (
    <AuthConsumer>
      {({ logout }) => (
        <button type='button' onClick={logout}>
          Logout
        </button>
      )}
    </AuthConsumer>
  )
}

export default Logout
