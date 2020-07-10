import React from 'react'
import { AuthConsumer } from '../contexts/auth';

const Profile = () => {
  return (
    <AuthConsumer>
      {({user}) => (
        <div>
          <h2>User profile</h2>
          <ul>
            <li>ID: {user.id}</li>
            <li>Email: {user.email}</li>
            <li>Role: {user.role}</li>
          </ul>
        </div>
      )}
    </AuthConsumer>
  )
}

export default Profile
