import {useState} from 'react'
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'
import './index.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

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

  return (
    <>
      <nav className="nav-con">
        <div className="logo-con">
          <img
            src="https://res.cloudinary.com/dywsrfqty/image/upload/v1697959183/Tasty%20Kitchen%20images/aieq70a6dclxldccwvtu.png"
            alt="website logo"
            className="nav-logo"
          />
          <h1 className="nav-head">Tasty Kitchens</h1>
        </div>
        <ul className="nav-list-lg">
          <li>
            <p className="nav-item">Home</p>
          </li>
          <li>
            <p className="nav-item">Cart</p>
          </li>
          <li>
            <button className="logout-btn" type="button">
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
          <li>
            <p className="nav-item">Home</p>
          </li>
          <li>
            <p className="nav-item">Cart</p>
          </li>
          <li>
            <button className="logout-btn" type="button">
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

export default Navbar
