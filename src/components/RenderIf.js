import React from 'react'
import PropTypes from 'prop-types'

function RenderIf ({ condition, children }) {
  return condition ? <>{children}</> : null
}

RenderIf.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

export default RenderIf
