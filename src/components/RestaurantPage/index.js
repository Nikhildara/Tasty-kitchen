import {useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import RestaurantDetail from '../RestaurantDetail'
import './index.css'

const RestaurantPage = props => {
  const {match} = props
  const {params} = match
  const {id} = params
  console.log(id)

  return (
    <div className="restaurant-page">
      <Navbar />
      <div className="restaurant-con">
        <RestaurantDetail id={id} />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default RestaurantPage
