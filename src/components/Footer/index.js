import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

const Footer = () => {
  const Hello = 'Hello'

  return (
    <div className="Footer-con">
      <div className="Footer-head-con">
        <img
          src="https://res.cloudinary.com/dywsrfqty/image/upload/v1698065422/Tasty%20Kitchen%20images/qpldg8aclpxtdhqhvwqv.png"
          alt="website-footer-logo"
          className="footer-logo"
        />
        <h1 className="footer-head">Tasty Kitchen</h1>
      </div>
      <p className="footer-des">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="social">
        <FaPinterestSquare testid="pintrest-social-icon" />
        <FaInstagram testid="instagram-social-icon" />
        <FaTwitter testid="twitter-social-icon" />
        <FaFacebookSquare testid="facebook-social-icon" />
      </div>
    </div>
  )
}

export default Footer
