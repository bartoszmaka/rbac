import React from 'react'
import { Redirect } from 'react-router-dom';

import { AuthConsumer } from '../contexts/auth';
import Login from '../components/Login';
import PostsList from '../components/PostsList';

const Home = () => {
  return (
    <AuthConsumer>
      {({authenticated}) => (
        authenticated
          ? <Redirect to='/dashboard'/>
          : (
            <div>
              <h2>Home</h2>
              <Login />
              <PostsList />
            </div>
          )
      )}
    </AuthConsumer>
  )
}

export default Home
