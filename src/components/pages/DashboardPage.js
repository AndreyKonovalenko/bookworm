import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage'

const DashboardPage = ( {isComfirmed} ) => (
    <div>
        { !isComfirmed && < ConfirmEmailMessage/> }
    </div>
)

DashboardPage.propTypes = {
    isComfirmed: PropTypes.bool.isRequired
}

function mapStateToProps (state) {
    return {
        isComfirmed: !!state.user.comfirmed
    }
}

export default connect(mapStateToProps)(DashboardPage)