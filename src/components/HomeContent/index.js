import {useState, useEffect, useRef} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BiMenuAltLeft} from 'react-icons/bi'
import {AiFillCaretDown, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import Popup from 'reactjs-popup'
import RestaurantItem from '../RestaurantItem'
import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Lowest',
    value: 'Lowest',
  },
  {
    id: 1,
    displayText: 'Highest',
    value: 'Highest',
  },
]

const HomeContent = () => {
  console.log('Home Content')

  const [activeSort, setActiveSort] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const ListedData = useRef([])
  const [page, setPage] = useState(1)
  const jwtToken = Cookies.get('jwt_token')
  const offset = (page - 1) * 9
  const SortModel = () => (
    <Popup
      trigger={
        <div className="sort-con">
          <BiMenuAltLeft className="sort-icon-menu" />
          <p className="sort-text">
            Sort by {sortByOptions[activeSort].displayText}
          </p>
          <AiFillCaretDown className="sort-icon-down" />
        </div>
      }
      position={['bottom left']}
      //   position="bottom center"
      //   on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      //   contentStyle={{padding: '0px', border: 'none'}}
      arrow={false}
    >
      <div className="model-con">
        {sortByOptions.map(e => (
          <div id={e.id}>
            <button
              type="button"
              className={`model-btn ${
                activeSort === e.id ? 'active-btn' : null
              }`}
              onClick={() => setActiveSort(e.id)}
            >
              {e.displayText}
              {activeSort === e.id ? <MdDone className="done-icon" /> : null}
            </button>
          </div>
        ))}
      </div>
    </Popup>
  )

  const backPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
    }
  }

  const nextPage = () => {
    if (page < 4) {
      setPage(prevPage => prevPage + 1)
    }
  }

  const getData = async () => {
    setIsLoading(true)
    const Url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=9&sort_by_rating=${sortByOptions[activeSort].value}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(Url, options)
    const data = await response.json()
    const restaurantData = data.restaurants
    const updatedData = restaurantData.map(e => ({
      cost: e.cost_for_two,
      cuisine: e.cuisine,
      imageUrl: e.image_url,
      name: e.name,
      id: e.id,
      userRating: e.user_rating,
    }))
    // console.log(updatedData)
    ListedData.current = updatedData
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [activeSort, page])

  console.log(ListedData)

  return (
    <div className="home-content-con">
      <div>
        <h1 className="head-con-head">Popular Restaurants</h1>
        <div className="des-sort-con">
          <p className="home-con-des">
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>

          <div className="sort-large">{SortModel()}</div>
        </div>
      </div>
      <div className="sort-small">{SortModel()}</div>
      <hr className="hr" />
      {isLoading ? (
        <div
          className="carousel-loader-con"
          data-testid="restaurants-list-loader"
        >
          <Loader
            type="TailSpin"
            color=" rgba(247, 147, 30, 1)"
            width={30}
            height={30}
          />
        </div>
      ) : (
        <ul className="restaurant-list-con" data-testid="restaurant-item">
          {ListedData.current.map(e => (
            <RestaurantItem key={e.id} item={e} />
          ))}
        </ul>
      )}
      <div className="pagination-con">
        <button
          type="button"
          className="pagination-btn"
          onClick={backPage}
          data-testid="pagination-left-button"
        >
          <AiOutlineLeft />
        </button>
        <p className="pagination-value">
          <span data-testid="active-page-number">{page}</span> of 4
        </p>
        <button
          type="button"
          className="pagination-btn"
          onClick={nextPage}
          data-testid="pagination-right-button"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  )
}

export default HomeContent
