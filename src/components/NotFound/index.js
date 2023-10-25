import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="success-view">
    <img
      src="https://res.cloudinary.com/dywsrfqty/image/upload/v1698244319/Tasty%20Kitchen%20images/jcvdxlqsp50csmxsgfas.png"
      alt="not found"
      className="notfound-image"
    />
    <h1 className="success-head">Page Not Found</h1>
    <p className="success-des not-found-width">
      We are sorry, the page you requested could not be found. Please go back to
      the homepage
    </p>
    <Link to="/">
      <button
        type="button"
        className="success-btn"
        onClick={() => localStorage.setItem('activeTab', 'Home')}
      >
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
