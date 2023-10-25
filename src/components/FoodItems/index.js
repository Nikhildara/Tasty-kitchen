import {useState} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'
import './index.css'

const FoodItems = props => {
  const [toCount, setToCount] = useState(false)
  const {item, addToLocal} = props

  const {id} = item
  let isAdd = null
  let parsedData = null
  let foodQuantity = 1

  let cartData = localStorage.getItem('cartData')
  if (cartData !== 'empty') {
    parsedData = JSON.parse(cartData)

    isAdd = parsedData.find(e => e.id === id)
    if (isAdd !== undefined) {
      foodQuantity = isAdd.quantity
    }
  }
  const [quantity, setQuatity] = useState(foodQuantity)
  //   console.log(cartData)

  if (cartData !== 'empty') {
    parsedData = JSON.parse(cartData)
    // console.log(parsedData)

    isAdd = parsedData.some(e => e.id === id)
    // console.log(isAdd)
  }

  //   console.log(props)

  const addToCart = () => {
    const date = new Date()
    setToCount(prev => !prev)
    addToLocal({...item, quantity: 1, date})
  }

  const decQuantity = () => {
    if (quantity > 1) {
      setQuatity(prevQua => prevQua - 1)
      cartData = localStorage.getItem('cartData')
      parsedData = JSON.parse(cartData)
      const filterData = parsedData.filter(e => e.id !== id)
      const fooddata = parsedData.find(e => e.id === id)
      console.log(fooddata)
      const updatedData = {...fooddata, quantity: fooddata.quantity - 1}
      console.log(updatedData)
      const finalData = [...filterData, updatedData]
      console.log(finalData)
      const stringfiedData = JSON.stringify(finalData)
      localStorage.setItem('cartData', stringfiedData)
    } else {
      cartData = localStorage.getItem('cartData')
      parsedData = JSON.parse(cartData)
      const filterData = parsedData.filter(e => e.id !== id)
      const stringfiedData = JSON.stringify(filterData)
      localStorage.setItem('cartData', stringfiedData)
      setToCount(prev => !prev)
    }
  }
  const addQuantity = () => {
    setQuatity(prevQua => prevQua + 1)
    cartData = localStorage.getItem('cartData')
    parsedData = JSON.parse(cartData)
    console.log(parsedData)
    const filterData = parsedData.filter(e => e.id !== id)

    const fooddata = parsedData.find(e => e.id === id)
    console.log(fooddata)
    const updatedData = {...fooddata, quantity: fooddata.quantity + 1}
    console.log(updatedData)

    const finalData = [...filterData, updatedData]
    const stringfiedData = JSON.stringify(finalData)
    console.log(finalData)

    localStorage.setItem('cartData', stringfiedData)
  }

  return (
    <li className="food-item" data-testid="foodItem">
      <img src={item.image_url} alt="restaurant" className="food-image" />
      <div>
        <p className="food-name">{item.name}</p>
        <p className="food-price">
          <BiRupee />
          {item.cost}.00
        </p>
        <div className="rating-con">
          <AiFillStar style={{color: `gold`, width: '17px'}} />
          <p className="rating-value-food">{item.rating}</p>
        </div>
        {!isAdd ? (
          <button className="add-btn" type="button" onClick={addToCart}>
            Add
          </button>
        ) : (
          <div className="count-con">
            <button
              type="button"
              className="count-btn"
              onClick={decQuantity}
              data-testid="decrement-quantity"
            >
              -
            </button>
            <p className="count-text" data-testid="active-count">
              {quantity}
            </p>
            <button
              type="button"
              className="count-btn"
              onClick={addQuantity}
              data-testid="increment-quantity"
            >
              +
            </button>
          </div>
        )}
      </div>
    </li>
  )
}

export default FoodItems
