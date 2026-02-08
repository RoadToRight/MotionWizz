import React from 'react'
import styled from 'styled-components'

const Marquee = () => {
  return (
    <MarqueeSec>
      <h3 className="main_head">TRUSTED BY</h3>
      <div className="marquee_wrapper">
        <div className="marquee_track"></div>
        <div className="marquee_track"></div>
      </div>
    </MarqueeSec>
  )
}

export default Marquee


const MarqueeSec = styled.div`
  
`