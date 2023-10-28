import {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
// import HomeContent from './components/HomeContent'
import RestaurantPage from './components/RestaurantPage'
import CartPage from './components/CartPage'
import SuccessPage from './components/SuccessPage'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Signup from './components/SignupPage'
// import TabContext from './Context/activeTabContext'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const App = () => {
  const [activeTab, setActiveTab] = useState('Home')

  const changeTab = tab => {
    setActiveTab(tab)
  }

  return (
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <Route exact path="/sign-up" component={Signup} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/cart" component={CartPage} />
      <ProtectedRoute exact path="/success" component={SuccessPage} />
      <ProtectedRoute exact path="/restaurant/:id" component={RestaurantPage} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  )
}

export default App
