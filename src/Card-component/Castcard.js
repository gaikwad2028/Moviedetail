import React from 'react'

export default function Castcard(props) {
  return (
    <div className="card1_details">
  <img className="card-img-top1" src={props.Image1} alt="Card image cap"/>
  <div className="card-body1">
    <p className="card-text1">{props.Titel}</p>
    <p className='card-rating1' style={{margin:"0"}}> Character:{props.Role}</p>
  </div>
</div>
  )
}
