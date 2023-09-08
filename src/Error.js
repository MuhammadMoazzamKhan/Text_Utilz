import React from 'react'

export default function Error(props) {
    const errorBox = {
        color : props.mode === "dark" ? "white" :"black",
    }
  return (
    <div style={errorBox}>
      <h1>This page is not found 404..</h1>
    </div>
  )
}
