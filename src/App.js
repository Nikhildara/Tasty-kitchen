import {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import RestaurantPage from './components/RestaurantPage'
import CartPage from './components/CartPage'
import SuccessPage from './components/SuccessPage'
import NotFound from './components/NotFound'
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
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/success" component={SuccessPage} />
      <Route exact path="/restaurant/:id" component={RestaurantPage} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  )
}

export default App
