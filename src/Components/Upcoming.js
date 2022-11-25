import React from 'react'
import {TbPlayerTrackNext } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import Card from '../Card-component/Card';
import Loading from '../Card-component/Loading';


export default function Upcoming() {
    const [show, setShow] = React.useState([])
    const[count,setCount]=React.useState(1)
    const[count1,setCount1]=React.useState(count)
    const [Loading1, setLoading1] = React.useState(false)

    React.useEffect(() => {
        // setLoading1(true)
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page1`
        console.log(url,"kjhgfdfghjk")
        const Fetchdata = async () => {
            try {
                const data = await fetch(url);
                const json = await data.json();
                setShow(json)
                setLoading1(true)
            } catch (error) {
                console.log("error", error);
            }
        }
        Fetchdata()
    }, [])
    // console.log("movie ", show)
    
    const HandelNext=()=>{
        setCount(count+1)
        console.log(count)
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${count}`
        console.log(url,"kjhgfdfghjk")
        const Fetchdata = async () => {
            try {
                const data = await fetch(url);
                const json = await data.json();
                setShow(json)
                // setLoading1(false)
            } catch (error) {
                console.log("error", error);
            }
        }
        Fetchdata()

    }

    const HandelPre=()=>{
        setCount1(count-1)
        console.log(count1)
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${count1}`
        console.log(url,"kjhgfdfghjk")
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
    }
 
   
    return (
     <>
         {Loading1 ?  <div className='Card_herocontainer'>
                {show !== undefined && show.results !== undefined && show.results.length > 0 &&
                    show.results.map((res) => {
                        // console.log(res, "ressssssssssssssssssssssssssssssssssss")
                        return <NavLink to={`/Singelmoviepage/${res.id}`}><Card Titel={res.original_title.toUpperCase()} Image1={"https://image.tmdb.org/t/p/w500"+res.backdrop_path} Rating={res.vote_average}></Card></NavLink>

                    })
                }
            </div>: <Loading/>
        }     
          <div className='Pageination'>
           <TbPlayerTrackNext className='pre' onClick={HandelPre}/>
           <p className='count'>loadmore</p>
            <TbPlayerTrackNext className='next' onClick={HandelNext}/>
          </div>
            </>
    )
}
