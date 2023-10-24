import {useState, useEffect, useRef} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const CarouselList = useRef([])
  const [isLoading, setIsLoading] = useState(false)
  const jwtToken = Cookies.get('jwt_token')
  // console.log(jwtToken)

  const getData = async () => {
    setIsLoading(true)
    const URL = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(URL, options)
    const data = await response.json()
    // console.log(data.offers)
    CarouselList.current = data.offers
    setIsLoading(false)
  }
  // console.log(CarouselList)

  useEffect(() => {
    getData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return isLoading ? (
    <div
      className="carousel-loader-con"
      data-testid="restaurants-offers-loader"
    >
      <Loader
        type="TailSpin"
        color=" rgba(247, 147, 30, 1)"
        width={30}
        height={30}
      />
    </div>
  ) : (
    <div className="carousel-con">
      <Slider {...settings}>
        {CarouselList.current.map(e => (
          <div key={e.id} className="carousel-image-con">
            <img src={e.image_url} alt="" className="carousel" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
