import Navbar from '../Navbar'
import Carousel from '../Carousel'
import HomeContent from '../HomeContent'
import Footer from '../Footer'
import './index.css'

const Home = () => {
  const Hello = 'hello'

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-con">
        <Carousel />
        <HomeContent />
      </div>
      <Footer />
    </div>
  )
}

export default Home
