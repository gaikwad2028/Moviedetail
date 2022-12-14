import React from 'react'

export default function DetailCard(props) {
  return (
    <div className='Detail'>
        <div className='Detail-Header'>
            <div className='container'>
               <div className='detail-imgcontainer'>
                <div className='detail-img'>
                <img className='detail_imgs' src={props.Cardimg} alt="cardimg"></img>
                </div>
                <div className='detail-info'>
                    <div className='detail_h1'><h1 className='detail_h1'>{props.Titel}</h1> <p>{props.Tagline}</p></div>
                    <h2 className='rating' style={{color:"white"}}> <span className='rating1'>Rating</span>:- <span className='rat_num'>{props.Rating}</span></h2>
                    <p className='detail-time'>
                       <span className='minutes'>{props.Runtime}min</span>
                       <span className='detail_type'>scince,action,thriller</span>
                    </p>
                    <div className='deatil_infofooter'><p> Release Date:- <span className='date'>{props.Date}</span></p></div>
                </div>
               </div>
               <div className='Overview'>
                <h1  className="overview_detais">Overview</h1>
             <p className='overivewp'>{props.Overview}</p>
               </div>
            </div>
            <div className='detail_img1'>
            <img className='detail_imge' src={props.Homepage} alt="cardimg"></img>
            </div>
        </div>
    </div>
  )
}
