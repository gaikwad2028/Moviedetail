import React from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from '../Card-component/DetailCard'
import Castcard from '../Card-component/Castcard'
import Loading from '../Card-component/Loading'
import { GiSandCastle } from 'react-icons/gi'
export default function SingelMoviepage(props) {

  const { id } = useParams()
  const [show, setShow] = React.useState([])
  const [cast, setCast] = React.useState([])
  const [Loading1, setLoading1] = React.useState(false)
  const [count, setCount] = React.useState(12)

  // Movie Detail

  React.useEffect(() => {
    // setLoading1(true)
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
    console.log(url, "kjhgfdfghjk")
    const Fetchdata = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();
        setShow(json)
        setLoading1(true)
      } catch (error) {
        setCast("error")
        setLoading1(false)
      }
    }
    Fetchdata()
  }, [setShow])

  //  Movie cast details
  React.useEffect(() => {
    // setLoading1(true)
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
    console.log(url, "kjhgfdfghjk")
    const Fetchdata = async () => {
      try {
        const data = await fetch(url);
        const json = await data.json();
        setCast(json)
        setLoading1(true)
      } catch (error) {
        setCast("error")
        setLoading1(false)
      }
    }
    Fetchdata()
  }, [setCast])

  console.log(show, "showmap1")

  const Loadmore = (e) => {
    setCount(count + 6)

  }

  return (
    <>
      <div className="Movie-details_info">
        <DetailCard 
        Titel={show.original_title} 
        Overview={show.overview} 
        Tagline={show.tagline}
        Runtime ={show.runtime}
        Cardimg={"https://image.tmdb.org/t/p/w500"+show.poster_path}
        Homepage={"https://image.tmdb.org/t/p/w500"+show.backdrop_path}
        Rating={show.vote_average}
        Date={show.release_date}
        ></DetailCard> 
      </div>
      {/* //  Movie cast details */}
      <h1 className='Card_name'>Cast</h1>
      {Loading1 ? <div className='cast_card'>
        {cast !== undefined && cast.cast !== undefined && cast.cast.length > 0 &&
          cast.cast.slice(0, (count)).map((res) => {
            // console.log(res,"rescard")
            return <Castcard Titel={res.original_name} Image1={"https://image.tmdb.org/t/p/w500" + res.profile_path} Role={res.character} />
          })
        }
      </div> : <Loading />
      }
      <div className='load_btn'><button className='Load_more' onClick={Loadmore} >Load more..</button></div>
    </>
  )
}






