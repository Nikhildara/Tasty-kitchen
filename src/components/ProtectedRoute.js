import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const jwtToken = Cookies.get('jwt_token')

const ProjectedRoute = props => {
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProjectedRoute
