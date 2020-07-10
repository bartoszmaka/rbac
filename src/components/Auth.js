import React, { Component } from 'react'
import auth0 from 'auth0-js';

import {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CALLBACK_URL,
  AUTH0_ROLE_URL
} from '../constants';
import { AuthProvider } from '../contexts/auth';


const auth = new auth0.WebAuth({
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID,
  redirectUri: AUTH0_CALLBACK_URL,
  audience: `https://${AUTH0_DOMAIN}/userinfo`,
  responseType: "token id_token"
})

export class Auth extends Component {
  state = {
    authenticated: false,
    accessToken: '',
    user: {
      role: 'visitor',
    },
  }

  initiateLogin = () => {
    auth.authorize()
  }

  logout = () => {
    this.setState({
      authenticated: false,
      accessToken: '',
      user: {
        role: 'visitor',
      },
    })
  }

  handleAuthentication = () => {
    auth.parseHash((error, authResult) => {
      if (error) {
        console.log(error)
      }

      this.setSession(authResult.idTokenPayload)
    })
  }

  setSession(authResult) {
    const user = {
      id: authResult.id,
      email: authResult.email,
      role: authResult[AUTH0_ROLE_URL]
    }

    this.setState({
      authenticated: true,
      accessToken: authResult.accessToken,
      user,
    })
  }

  render() {
    const authProviderValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      handleAuthentication: this.handleAuthentication,
      logout: this.logout,
    }

    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    )
  }
}

export default Auth
