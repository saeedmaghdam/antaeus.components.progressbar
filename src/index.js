import React, { Fragment } from 'react'

const ProgressbarComponent = ({ value = 0 }) => {
  var val = parseFloat(value)

  return <>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
      <title>progress</title>
      <rect x="0" width="1000" height="100" fill="#e0eff8" />
      <rect x="0" width={`${val * 10}`} height="100" fill="#359bd9" />
      <text>
        <tspan x="450" y="68" fontSize="55" fill="$fff">{val}%</tspan>
      </text>
    </svg>
  </>
}

export default ProgressbarComponent;