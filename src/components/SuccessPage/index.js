import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const SuccessPage = () => (
  <div>
    <Navbar />
    <div className="success-view">
      <img
        src="https://res.cloudinary.com/dywsrfqty/image/upload/v1698243267/Tasty%20Kitchen%20images/du7xilrhq4vm6nlsn2jf.png"
        alt="vector"
        className="success-image"
      />
      <h1 className="success-head">Ordered Successful</h1>
      <p className="success-des">
        Thank you for ordering <br />
        You can make payment at Delivery.
      </p>
      <Link to="/">
        <button
          type="button"
          className="success-btn"
          onClick={() => localStorage.setItem('activeTab', 'Home')}
        >
          Go To Home Page
        </button>
      </Link>
    </div>
  </div>
)

export default SuccessPage
