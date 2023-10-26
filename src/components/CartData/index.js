import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'
import Footer from '../Footer'
import './index.css'

const CartData = () => {
  const Hello = 'Hello'
  const [toCount, setToCount] = useState(false)

  let cartData = localStorage.getItem('cartData')
  //   console.log(cartData)

  const isEmpty = cartData === 'empty' || cartData === '[]' || cartData === null
  //   console.log(isEmpty)

  let parsedData = null
  //   let sortedData = null
  let Price = null
  //   let isAdd = null
  //   let foodQuantity = null

  if (!isEmpty) {
    parsedData = JSON.parse(cartData)
    // console.log(parsedData)
    Price = parsedData.reduce((price, e) => price + e.cost * e.quantity, 0)

    parsedData.sort((a, b) => new Date(b.date) - new Date(a.date))

    console.log(parsedData)
  }

  const decQuantity = (id, quantity) => {
    if (quantity > 1) {
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
      setToCount(prev => !prev)
    } else {
      cartData = localStorage.getItem('cartData')
      parsedData = JSON.parse(cartData)
      const filterData = parsedData.filter(e => e.id !== id)
      const stringfiedData = JSON.stringify(filterData)
      localStorage.setItem('cartData', stringfiedData)
      setToCount(prev => !prev)
    }
  }

  const addQuantity = id => {
    cartData = localStorage.getItem('cartData')
    parsedData = JSON.parse(cartData)
    // console.log(parsedData)
    const filterData = parsedData.filter(e => e.id !== id)

    const fooddata = parsedData.find(e => e.id === id)
    // console.log(fooddata)
    const updatedData = {...fooddata, quantity: fooddata.quantity + 1}
    // console.log(updatedData)

    const finalData = [...filterData, updatedData]
    const stringfiedData = JSON.stringify(finalData)
    console.log(stringfiedData)

    localStorage.setItem('cartData', stringfiedData)
    setToCount(prev => !prev)
  }

  const emptyView = () => (
    <div className="empty-con">
      <img
        src="https://res.cloudinary.com/dywsrfqty/image/upload/v1698220766/Tasty%20Kitchen%20images/lesz9s432hypdwdigclb.png"
        alt="empty cart"
        className="empty-cart-image"
      />
      <h1 className="empty-head">No Orders Yet!</h1>
      <p className="empty-des">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/">
        <button
          className="order"
          type="button"
          onClick={() => localStorage.setItem('activeTab', 'Home')}
        >
          Order Now
        </button>
      </Link>
    </div>
  )

  return isEmpty ? (
    emptyView()
  ) : (
    <>
      <div className="cart-con">
        <div className="cart-items-con">
          <div className="">
            <ul className="cart-head-sec">
              <li className="cart-head-item">
                <p className="cart-head-text">Item</p>
              </li>
              <li className="cart-head-item">
                <p className="cart-head-text">Quantity</p>
              </li>
              <li className="cart-head-item">
                <p className="cart-head-text">Price</p>
              </li>
            </ul>
            <ul className="cart-list-lg">
              {parsedData.map(e => (
                <li key={e.id} className="cart-items-lg" data-testid="cartItem">
                  <div className="image-head-lg">
                    <img
                      src={e.image_url}
                      alt="item"
                      className="cart-image-lg"
                    />
                    <h1 className="cart-item-name">{e.name}</h1>
                  </div>
                  <div className="count-con-lg">
                    <button
                      type="button"
                      className="count-btn"
                      onClick={() => decQuantity(e.id, e.quantity)}
                      data-testid="decrement-quantity"
                    >
                      -
                    </button>
                    <p className="count-text" data-testid="item-quantity">
                      {e.quantity}
                    </p>
                    <button
                      type="button"
                      className="count-btn"
                      onClick={() => addQuantity(e.id)}
                      data-testid="increment-quantity"
                    >
                      +
                    </button>
                  </div>
                  <p className="item-price-lg">
                    <BiRupee />
                    <span>{e.quantity * e.cost}.00</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <ul className="cart-list-sm">
            {parsedData.map(e => (
              <li key={e.id} className="cart-item-con" data-testid="cartItem">
                <img src={e.image_url} alt="item" className="cart-image-sm" />
                <div>
                  <h1 className="cart-item-name">{e.name}</h1>
                  <div className="count-con">
                    <button
                      type="button"
                      className="count-btn"
                      onClick={() => decQuantity(e.id, e.quantity)}
                      data-testid="decrement-quantity"
                    >
                      -
                    </button>
                    <p className="count-text" data-testid="item-quantity">
                      {e.quantity}
                    </p>
                    <button
                      type="button"
                      className="count-btn"
                      onClick={() => addQuantity(e.id)}
                      data-testid="increment-quantity"
                    >
                      +
                    </button>
                  </div>
                  <p className="item-price">
                    <BiRupee />
                    <span>{e.quantity * e.cost}.00</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <hr className="hr-line" />
          <div className="total-price-con">
            <p className="total-value-head">Order Total : </p>
            <p className="total-value">
              {' '}
              <BiRupee /> <span>{Price}</span>.00
            </p>
          </div>
          <div className="place-order-con">
            <Link to="/success">
              <button
                type="button"
                className="place-btn"
                data-testid="total-price"
                onClick={() => localStorage.setItem('cartData', 'empty')}
              >
                Place order
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CartData
