import React from 'react'
import './tooltip.css'

function Tooltip({children, position, tooltipText}) {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className={`tooltip tooltip-${position}`}>
        {tooltipText}
      </div>
    </div>
    
  )
}

export default Tooltip