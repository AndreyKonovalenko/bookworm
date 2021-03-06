import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import HomePage from './components/pages/HomePage'
import DashboardPage from './components/pages/DashboardPage'
import LoginPage from './components/pages/LoginPage'
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute'
import SingupPage from './components/pages/SingupPage'


// we add location to resolve conflict between React Router and redux
const App = ({ location }) => (
    <div className="ui container">
        <Route location={location} path="/" exact component={HomePage} />
        <GuestRoute location={location} path="/login" exact component={LoginPage} />
        <GuestRoute location={location} path="/singup" exact component={SingupPage} />
        <UserRoute
            location={location}
            path="/dashboard"
            exact
            component={DashboardPage} />
    </div>
)

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
}

export default App
