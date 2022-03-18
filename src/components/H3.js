import React from "react"

function H3(props) {
  return (
    <h3 id={props.value}>
      <code>{props.children !== undefined ? props.children : props.value}</code>
      <a className="hash-link" href={props.page+'#'+props.value} title="Direct link to heading" />​
    </h3>
  )
}

export default H3
