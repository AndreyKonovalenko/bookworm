import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import { login } from '../../actions/auth'



class LoginPage extends React.Component {
    submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"))

    render() {
        const {location} = this.props
        return (
            <div>
                <h1>LoginPage</h1>
                <LoginForm submit={ this.submit }/>
                <p>you are now at {location.pathname }</p>
            </div>
        )
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage)
