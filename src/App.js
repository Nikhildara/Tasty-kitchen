import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import RestaurantPage from './components/RestaurantPage'

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
  const Hi = 'Hi'

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={RestaurantPage} />
    </Switch>
  )
}

export default App
