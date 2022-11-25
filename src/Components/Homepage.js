import React from 'react'
import Card from '../Card-component/Card';
import {TbPlayerTrackNext } from "react-icons/tb";
import Loading from '../Card-component/Loading';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function Homepage(props) {
    const [show, setShow] = React.useState([])
    const[count,setCount]=React.useState(1)
    const [Loading1, setLoading1] = React.useState(false)

    React.useEffect(() => {
        // setLoading1(true)
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`
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
    }, [])
    // console.log("movie ", show)

    const HandelNext=()=>{
        setCount(count+1)
        if (count<=0){
            setCount(count+2)
        }
        else if(count<=-1){
            setCount(count+2)
        }
        console.log(count,"handelnext")
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${count}`
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

    const HandelPre=(e,index)=>{
         
    setCount(count-1)
    if(count<0){
        console.log(count)
        setCount(count+1)
    }

        console.log(count)
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${count}`
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
// console.log(count,"loading1")
    return (
     <>
   
          {Loading1 ? <div className='Card_herocontainer'>
                {show !== undefined && show.results !== undefined && show.results.length > 0 &&
                    show.results.map((res) => {
                        // console.log(res, "ressssssssssssssssssssssssssssssssssss")
                        return<NavLink to={`/Singelmoviepage/${res.id}`}><Card Titel={res.original_title} Image1={"https://image.tmdb.org/t/p/w500"+res.backdrop_path} Rating={res.vote_average}></Card></NavLink>

                    })
                }
            </div> :<Loading/>
}
          <div className='Pageination'>
           <TbPlayerTrackNext className='pre' onClick={HandelPre}/>
            <p className='count'>loadmore</p>
            <TbPlayerTrackNext className='next' onClick={HandelNext}/>
          </div>
            </>
    )
}