import React from "react"
import {
  InnerPre,
  getPreRef,
  InnerToken,
} from "codehike/code"
import {
  calculateTransitions,
  getStartingSnapshot,
} from "codehike/utils/token-transitions"

const MAX_TRANSITION_DURATION = 900 // in ms

class SmoothPre extends React.Component {
  ref

  constructor(props) {
    super(props)
    this.ref = getPreRef(this.props)
  }

  render() {
    return <InnerPre merge={this.props} style={{ position: "relative" }} />
  }

  getSnapshotBeforeUpdate() {
    return getStartingSnapshot(this.ref.current)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const transitions = calculateTransitions(this.ref.current, snapshot)
    transitions.forEach(({ element, keyframes, options }) => {
      const { translateX, translateY, ...kf } = keyframes
      if (translateX && translateY) {
        kf.translate = [
          `${translateX[0]}px ${translateY[0]}px`,
          `${translateX[1]}px ${translateY[1]}px`,
        ]
      }
      element.animate(kf, {
        duration: options.duration * MAX_TRANSITION_DURATION,
        delay: options.delay * MAX_TRANSITION_DURATION,
        easing: options.easing,
        fill: "both",
      })
    })
  }
}

export const tokenTransitions = {
  name: "token-transitions",
  PreWithRef: SmoothPre,
  Token: (props) => <InnerToken merge={props} style={{ display: "inline-block" }} />,
}
