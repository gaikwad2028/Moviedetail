import React from 'react'

export default function Card(props) {
    // console.log(props.Rating)
  return (
  <div className="card">
    <div className='card-img-container'>
  <img className="card-img-top" src={props.Image1} alt="Card image cap"/>
  </div>
  <div className="card-body">
    <p className="card-text">{props.Titel}</p>
    <p className='card-rating'> Rating:-<span className='card-rates'>{props.Rating}</span></p>
  </div>
</div>
  )
}
