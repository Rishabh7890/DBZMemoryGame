import React from "react"

const style = {
  header: {
    background: "blue",

  },
  h1: {

    textAlign: "left",
    color: "white",

  },
  div: {
    color: "white",
    fontSize: "1.3rem",
    textDecoration: "none",
    margin: "5px",
    lineHeight: 3,

  }
}

function Header(props) {
  return (
    <div className="jumbotron" style={style.header}>
      <h1 style={style.h1}>Clicky Game</h1>
      <p className="float-right" style={style.div}>Current Score: {props.count} || High Score: {props.high} </p>
    </div>
  )
}

export default Header