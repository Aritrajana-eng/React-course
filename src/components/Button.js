import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
    return (
        <button type="button" className="btn btn-primary">
            {props.name}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Button'
}