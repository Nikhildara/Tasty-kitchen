import React, {useState} from 'react'
import {Redirect, useHistory, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

// let num = 0

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showErr, setShowErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const history = useHistory()

  const ToHome = jwtToken => {
    localStorage.setItem('activeTab', 'Home')
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    console.log(props)

    history.replace('/')
    setErrMsg(false)
    console.log('moved to home')

    // return <Redirect to="/" />
  }

  const submitDetails = async e => {
    e.preventDefault()
    // localStorage.setItem(('activeTab': 'Home'))

    const stringifiedCredential = localStorage.getItem('SignupDetails')
    const parsedData = JSON.parse(stringifiedCredential)
    const {signUpUsername, signUpPassword} = parsedData

    const Details = {username, password}
    if (username === signUpUsername && password === signUpPassword) {
      Details.username = 'rahul'
      Details.password = 'rahul@2021'
    } else if (username === signUpUsername && password !== signUpPassword) {
      Details.username = 'rahul'
      //   Details.password = 'rahul@2021'
    }
    const URL = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(Details),
    }
    const response = await fetch(URL, options)
    if (response.ok === true) {
      const data = await response.json()
      setUsername('')
      setPassword('')
      ToHome(data.jwt_token)
      //   return <Redirect to="/" />
    }
    if (response.ok === false) {
      const data = await response.json()
      setShowErr(true)
      setErrMsg(data.error_msg)
      console.log(data)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)
  //   console.log(num)

  //   if (jwtToken !== undefined) {
  //     return <Redirect to="/" />
  //   }

  return (
    <div className="login-con">
      <img
        src="https://res.cloudinary.com/dywsrfqty/image/upload/v1697902366/Tasty%20Kitchen%20images/zuqeseoab7rpg1vef2jn.png"
        alt="website login"
        className="login-image-sm"
      />
      <div className="form-head-con">
        <form className="form-con" onSubmit={submitDetails}>
          <div className="head-con">
            <h1 className="login-head">Login</h1>
          </div>
          <div className="input-item">
            <label htmlFor="username1" className="label">
              USERNAME
            </label>
            <input
              id="username1"
              value={username}
              className="input"
              type="text"
              onChange={e => {
                setUsername(e.target.value)
              }}
            />
          </div>
          <div className="input-item">
            <label htmlFor="password1" className="label">
              PASSWORD
            </label>
            <input
              id="password1"
              value={password}
              className="input"
              type="password"
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
          </div>
          {showErr && (
            <div className="err-con">
              <p className="error">{errMsg}</p>
            </div>
          )}
          <button className="submit" type="submit">
            Login
          </button>
        </form>
        <Link to="/sign-up" style={{textDecoration: 'none'}}>
          <p className="sign-up-des sign-sm">
            Don't have an account?
            <span className="sign-up">Signup now</span>
          </p>
        </Link>
      </div>
      <div className="login-page-lg">
        <div className="login-con-lg">
          <div className="form-head-lg">
            <div className="logo-con-lg">
              <img
                src="https://res.cloudinary.com/dywsrfqty/image/upload/v1697959183/Tasty%20Kitchen%20images/aieq70a6dclxldccwvtu.png"
                alt="website logo"
              />
              <h1 className="logo-lg">Tasty Kitchens</h1>
            </div>
            {/* <div className="head-con-lg">
              <h1 className="login-head">Login</h1>
            </div> */}
            <div className="form-head-con-lg">
              <form className="form-con" onSubmit={submitDetails}>
                <div className="head-con-lg">
                  <h1 className="login-head">Login</h1>
                </div>
                <div className="input-item">
                  <label htmlFor="username" className="label">
                    USERNAME
                  </label>
                  <input
                    id="username"
                    value={username}
                    className="input"
                    type="text"
                    onChange={e => {
                      setUsername(e.target.value)
                    }}
                  />
                </div>
                <div className="input-item">
                  <label htmlFor="password" className="label">
                    PASSWORD
                  </label>
                  <input
                    id="password"
                    value={password}
                    className="input"
                    type="password"
                    onChange={e => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>
                {showErr && (
                  <div className="err-con">
                    <p className="error">{errMsg}</p>
                  </div>
                )}
                <button className="submit" type="submit">
                  Login
                </button>
              </form>
              <Link to="/sign-up" style={{textDecoration: 'none'}}>
                <p className="sign-up-des">
                  Don't have an account?{' '}
                  <span className="sign-up">Signup now</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="login-img-lg">
          <img
            src="https://res.cloudinary.com/dywsrfqty/image/upload/v1697902370/Tasty%20Kitchen%20images/c0wsmf9lmf02nfmu29z2.png"
            alt="website login"
            className="image-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
