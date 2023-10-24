import {useState, useEffect, useRef} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import Cookies from 'js-cookie'
import FoodItems from '../FoodItems'
import './index.css'

const RestaurantDetail = props => {
  const {id} = props
  const [restaurantData, setRestaurantData] = useState({})
  const [load, setload] = useState(false)
  const [foodItem, setFoodItem] = useState([])
  let cartDataList = 'empty'

  const jwtToken = Cookies.get('jwt_token')

  const getData = async () => {
    const Url = `https://apis.ccbp.in/restaurants-list/${id}`
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(Url, option)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      cost: data.cost_for_two,
      cuisine: data.cuisine,
      foodItems: data.food_items,
      id: data.id,
      imageUrl: data.image_url,
      itemsCount: data.items_count,
      location: data.location,
      name: data.name,
      opensAt: data.opens_at,
      rating: data.rating,
      reviewsCount: data.reviews_count,
    }
    setRestaurantData(updatedData)
    setFoodItem(updatedData.foodItems)
  }
  // console.log(restaurantData)

  useEffect(() => {
    getData()
  }, [])

  const checkData = localStorage.getItem('cartData')
  //   console.log(checkData)

  if (checkData === null) {
    localStorage.setItem('cartData', cartDataList)
    // console.log('in CheckData')
  }
  const addToLocal = item => {
    if (checkData === 'empty') {
      setload(true)
      console.log('initial')
      cartDataList = JSON.stringify([item])
      localStorage.setItem('cartData', JSON.stringify([item]))
    } else {
      const getStorageData = localStorage.getItem('cartData')
      const storageData = JSON.parse(getStorageData)
      cartDataList = JSON.stringify([...storageData, item])
      localStorage.setItem('cartData', [cartDataList])
    }
  }

  return (
    <div>
      <div className="banner">
        <img
          src={restaurantData.imageUrl}
          alt="food"
          className="banner-image-sm"
        />
        <img
          src={restaurantData.imageUrl}
          alt="food"
          className="banner-image-lg"
        />
        <div>
          <h1 className="banner-head">{restaurantData.name}</h1>
          <p className="location">{restaurantData.location}</p>
          <div className="rating-con-banner-sm">
            <div>
              <div className="restaurant-rating">
                <AiFillStar />
                <p>{restaurantData.rating}</p>
              </div>
              <div className="restaurant-review">
                <p className="rating-des">
                  {restaurantData.reviewsCount}+ Rating
                </p>
              </div>
            </div>
            <div className="line" />
            <div>
              <div className="restaurant-rating">
                <FaRupeeSign />
                <p>{restaurantData.cost}</p>
              </div>
              <div className="restaurant-review">
                <p className="rating-des">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="food-items-con">
        {foodItem.map(e => (
          <FoodItems key={e.id} item={e} addToLocal={addToLocal} />
        ))}
      </ul>
    </div>
  )
}

export default RestaurantDetail
