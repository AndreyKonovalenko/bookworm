import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SingupForm from '../forms/SingupForm'
import { singup } from '../../actions/users'

class SingupPage extends React.Component {
    submit = data =>
        this.props.singup(data).then(() => this.props.history.push("/dashboard"))
    render () {
        console.log(this.props.history, "location: " , this.props.location)
        return (
            <div>
                <SingupForm submit={this.submit} />
            </div>
        )
    }
}

SingupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    singup: PropTypes.func.isRequired
}

export default connect(null, {singup})(SingupPage)