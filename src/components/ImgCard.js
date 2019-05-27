import React from "react"



function ImgCard(props) {



  return (
    <div className="img-container"
      onClick={() => props.handleImgClick(props.id)} >
      <img alt={props.name} src={props.image} data-clicked={props.clicked} />
    </div>
  )
}

export default ImgCard;