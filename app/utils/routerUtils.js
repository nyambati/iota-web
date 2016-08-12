import React from 'react'
import { hashHistory } from 'react-router'

const routerUtils = {
  childrenWithProps(children, props) {
    if (children)
      return React.cloneElement(children, props)

    return null
  },
  goBack() { hashHistory.goBack() },
  push(hashLocation) {
    // Obscure the lowerlevel implementation.
    hashHistory.push(hashLocation)
  },
  replace(hashLocation) {
    hashHistory.replace(hashLocation)
  },
  setLocation(location) { window.location = location }
}

export default routerUtils