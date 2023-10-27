import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const Signup = () => {
  const [signUpUsername, setUsername] = useState('')
  const [signUpPassword, setPassword] = useState('')
  const [SignUpAddress, setAddress] = useState('')
  const [showErr, setShowErr] = useState(false)
  const history = useHistory()

  const onSubmitDetail = e => {
    e.preventDefault()
    if (
      signUpUsername !== '' &&
      signUpPassword !== '' &&
      SignUpAddress !== ''
    ) {
      setShowErr(false)
      const details = {
        signUpUsername,
        signUpPassword,
        SignUpAddress,
      }
      const stringifiedData = JSON.stringify(details)
      localStorage.setItem('SignupDetails', stringifiedData)
      history.replace('/login')
    } else {
      setShowErr(true)
    }
  }

  return (
    <div className="sign-up-con">
      <img
        src="https://res.cloudinary.com/dywsrfqty/image/upload/v1698432227/Tasty%20Kitchen%20images/xlszdzyb9njbm9ioywws.jpg"
        alt="sign-up-img"
        className="signup-img-lg"
      />
      <div className="second-part-lg">
        <div className="form-head-con-signup-lg">
          <div className="sign-up-img-con-sm">
            <img
              src="https://res.cloudinary.com/dywsrfqty/image/upload/v1698430633/Tasty%20Kitchen%20images/jy5nfcswhfz9jtraeydx.png"
              className="signup-image"
              alt="signImage"
            />
          </div>
          <div className="logo-con-lg-signup-lg">
            <img
              src="https://res.cloudinary.com/dywsrfqty/image/upload/v1697959183/Tasty%20Kitchen%20images/aieq70a6dclxldccwvtu.png"
              alt="website logo"
            />
            <h1 className="logo-lg">Tasty Kitchens</h1>
          </div>
          <form className="form-con-signup" onSubmit={onSubmitDetail}>
            <div className="head-con-sign">
              <h1 className="login-head">SignUp</h1>
            </div>
            <div className="input-item">
              <label htmlFor="username1" className="label">
                USERNAME
              </label>
              <input
                id="username1"
                value={signUpUsername}
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
                value={signUpPassword}
                className="input"
                type="password"
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div className="input-item">
              <label htmlFor="password1" className="label">
                ADDRESS
              </label>
              <input
                id="password1"
                value={SignUpAddress}
                className="input"
                type="text"
                onChange={e => {
                  setAddress(e.target.value)
                }}
              />
            </div>
            <button className="submit" type="submit">
              SignUp
            </button>
            {showErr ? (
              <p className="err-msg"> *Please Enter All Fields</p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
