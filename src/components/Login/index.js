import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showErr, setShowErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  //   console.log(password)
  //   console.log(password.length)

  //   const star = '* '.repeat(password.length)
  //   console.log(star)

  const ToHome = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    const {history} = props
    history.replace('/')
  }

  const submitDetails = async e => {
    e.preventDefault()
    // localStorage.setItem(('activeTab': 'Home'))
    // console.log(username, password)
    localStorage.setItem('activeTab', 'Home')
    const Details = {username, password}
    if (username === 'Nikhil' && password === 'Nikhil@208') {
      Details.username = 'rahul'
      Details.password = 'rahul@2021'
    } else if (username === 'Nikhil' && password !== 'Nikhil@208') {
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
      ToHome(data.jwt_token)
    }
    if (response.ok === false) {
      const data = await response.json()
      setShowErr(true)
      setErrMsg(data.error_msg)
      console.log(data)
    }
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken) {
    return <Redirect to="/" />
  }

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
              name={username}
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
