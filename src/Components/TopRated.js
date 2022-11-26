import React from 'react'
import { NavLink } from 'react-router-dom';
import {TbPlayerTrackNext } from "react-icons/tb";
import Card from '../Card-component/Card';
import Loading from '../Card-component/Loading';

export default function Toprated() {
    const [show, setShow] = React.useState([])
    const[count,setCount]=React.useState(1)
    const [Loading1, setLoading1] = React.useState(false)

    React.useEffect(() => {
        // setLoading1(true)
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${count}`
        // console.log(url,"kjhgfdfghjk")
        const Fetchdata = async () => {
            try {
                const data = await fetch(url);
                const json = await data.json();
                setShow(json)
                setLoading1(true)
            } catch (error) {
                setShow(error)
                setLoading1(false)
            }
        }
        Fetchdata()
    }, [count])
    console.log("movie ", show)


    const HandelPre=()=>{
        if (count===1){
          setCount(1)
        }
        else{
            setCount(count-1)
        }
    }

    return (
     <>
           {Loading1 ?<div className='Card_herocontainer'>
                {show !== undefined && show.results !== undefined && show.results.length > 0 &&
                    show.results.map((res) => {
                        // console.log(res, "ressssssssssssssssssssssssssssssssssss")
                        return<div className='Card_sub'><NavLink to={`/Singelmoviepage/${res.id}`}><Card Titel={res.original_title.toUpperCase()} Image1={"https://image.tmdb.org/t/p/w500"+res.backdrop_path} Rating={res.vote_average}></Card></NavLink></div>

                    })
                }
            </div> :<Loading/>
}
          <div className='Pageination'>
           <TbPlayerTrackNext className='pre' onClick={HandelPre}/>
           <p className='count'>loadmore</p>
           <TbPlayerTrackNext className='next' onClick={() => setCount(count + 1)} />
          </div>
            </>
    )
}
