import {useState, useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'
import TabContext from '../../Context/activeTabContext'
import './index.css'

const Navbar = props => {
  const [showMenu, setShowMenu] = useState(false)
  //   const [activeTab, setActiveTab] = useState('home')
  //   const context = useContext(TabContext)
  //   const {activeTab, changeTab} = context
  //   console.log(activeTab, changeTab)
  const activeTab = localStorage.getItem('activeTab')

  if (activeTab === null) {
    localStorage.setItem('activeTab', 'Home')
  }
  console.log(activeTab)

  const showMenuHandle = () => {
    if (showMenu === false) {
      setShowMenu(true)
    }
  }
  const closeMenuHandle = () => {
    if (showMenu === true) {
      setShowMenu(false)
    }
  }

  const logoutTo = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <nav className="nav-con">
        <Link
          to="/"
          style={{textDecoration: 'none'}}
          onClick={() => localStorage.setItem('activeTab', 'Home')}
        >
          <div className="logo-con">
            <img
              src="https://res.cloudinary.com/dywsrfqty/image/upload/v1697959183/Tasty%20Kitchen%20images/aieq70a6dclxldccwvtu.png"
              alt="website logo"
              className="nav-logo"
            />
            <h1 className="nav-head">Tasty Kitchens</h1>
          </div>{' '}
        </Link>
        <ul className="nav-list-lg">
          <Link to="/" style={{textDecoration: 'none'}}>
            <li>
              <p
                className="nav-item"
                style={
                  activeTab === 'Home'
                    ? {color: 'rgba(255, 164, 18, 1)'}
                    : {color: 'black'}
                }
                onClick={() => localStorage.setItem('activeTab', 'Home')}
              >
                Home
              </p>
            </li>
          </Link>
          <Link to="/cart" style={{textDecoration: 'none'}}>
            <li>
              <p
                className="nav-item"
                style={
                  activeTab === 'Cart'
                    ? {color: 'rgba(255, 164, 18, 1)'}
                    : {color: 'black'}
                }
                onClick={() => localStorage.setItem('activeTab', 'Cart')}
              >
                Cart
              </p>
            </li>
          </Link>
          <li>
            <button className="logout-btn" type="button" onClick={logoutTo}>
              Logout
            </button>
          </li>
        </ul>
        <button type="button" className="menu-btn" onClick={showMenuHandle}>
          <AiOutlineMenu />
        </button>
      </nav>

      <div
        className={`nav-list-con-sm ${
          !showMenu ? 'nav-transition' : 'show-nav'
        }`}
      >
        <ul className="nav-list-sm">
          <Link to="/" style={{textDecoration: 'none'}}>
            <li>
              <p
                className="nav-item"
                style={
                  activeTab === 'Home'
                    ? {color: 'rgba(255, 164, 18, 1)'}
                    : {color: 'black'}
                }
                onClick={() => localStorage.setItem('activeTab', 'Home')}
              >
                Home
              </p>
            </li>
          </Link>
          <Link to="/cart" style={{textDecoration: 'none'}}>
            <li>
              <p
                className="nav-item"
                style={
                  activeTab === 'Cart'
                    ? {color: 'rgba(255, 164, 18, 1)'}
                    : {color: 'black'}
                }
                onClick={() => localStorage.setItem('activeTab', 'Cart')}
              >
                Cart
              </p>
            </li>
          </Link>
          <li>
            <button className="logout-btn" type="button" onClick={logoutTo}>
              Logout
            </button>
          </li>
        </ul>
        <button
          className="close-icon-btn"
          type="button"
          onClick={closeMenuHandle}
        >
          <AiFillCloseCircle />
        </button>
      </div>
    </>
  )
}

export default withRouter(Navbar)
