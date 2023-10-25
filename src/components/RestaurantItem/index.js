import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const RestaurantItem = props => {
  const {item} = props
  const {name, cuisine, imageUrl, userRating, id} = item

  return (
    <Link to={`/restaurant/${id}`} style={{textDecoration: 'none'}}>
      <li className="restaurant-item" data-testid="restaurant-item">
        <img src={imageUrl} alt="restaurant" className="hotel-image" />
        <div>
          <p className="resta-name">{name}</p>
          <p className="resta-type">{cuisine}</p>
          <div className="rating-con">
            <AiFillStar style={{color: `${userRating.rating_color}`}} />
            <p className="rating-value">{userRating.rating}</p>
            <p className="rating-count">({userRating.total_reviews} ratings)</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default RestaurantItem
