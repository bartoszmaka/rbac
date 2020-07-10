import React from 'react'

import { AuthConsumer } from '../contexts/auth';
import Can from '../components/Can';
import Logout from '../components/Logout';
import Profile from '../components/Profile';
import PostsList from '../components/PostsList';

const Dashboard = () => {
  return (
    <AuthConsumer>
      {({user}) => (
        <Can
          role={user.role}
          perform='dashboard-page:visit'
          yes={() => (
            <div>
              <h1>Dashboard</h1>
              <Logout />
              <Profile />
              <PostsList />
            </div>
          )}
        />
      )}
    </AuthConsumer>
  )
}

export default Dashboard
