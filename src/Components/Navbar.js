import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import {MdCancel } from "react-icons/md";
import Card from '../Card-component/Card';
import { BsSearch } from "react-icons/bs";

export default function Navbar(props) {

    const [open, setOpen] = React.useState(false)
    const [open1, setOpen1] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [open3, setOpen3] = React.useState(true)
    const [Loading1, setLoading1] = React.useState(false)
    const [Search, setSearch] = React.useState()
    const [searchlabel, setlabel] = React.useState('')
    const[flag,setFlag]=React.useState(false)

    const Handelopen = () => {
        setOpen(!open)
       setOpen2(true)
       setOpen3(false)
    }

    const Handelopen1 = () => {
        setOpen1(!open1)
        setOpen(false)
      
    }

    const Handelopen2=()=>{
        setOpen(false)
      setOpen2(false)
      setOpen3(true)
    }
    console.log(open)

   
    const HandelChange = (e) => {
        setlabel(e.target.value)
    }

    const searchClick = () => {
         let movie_name = searchlabel
        if (movie_name.length > 1) {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=
    ${movie_name}&page=1`

            fetch(url).then((res) => res.json()).then(data => { setSearch(data) })

        }
        
         else {
            setSearch([]);
        }
         if (movie_name.length < 1 ){
            setFlag(true)
        }
       
    }
    console.log(Search, "Search1111111111")

    const header=(e)=>{
        setlabel(" ")
        setSearch(" ")
        setFlag(false)
    }

   
console.log(flag,"flag")
    return (
        <>
            <div className='Navbar'>
                <div className='Logo'>
                    <h2 className='Moviedb'>MovieDb</h2>
                </div>
                <div className='Nav-Contents'>
                    <ul>
                        <li><NavLink to="/" onClick={header}>Popular</NavLink></li>
                        <li><NavLink to="/toprated" onClick={header} >Top-Rated</NavLink></li>
                        <li><NavLink to="/upcoming" onClick={header }>Upcoming</NavLink></li>
                        <li><input type="text" className='search-text' placeholder='Movie-Name' onChange={HandelChange} required></input><NavLink to="/Searchbar"><button className='btn-search' onClick={searchClick}>Search</button></NavLink></li>
                    </ul>
                </div>
                <div className='hidden'>
                <div className='hidden_1'>
                <GiHamburgerMenu className='hamburger' style={{ display: open3 ? "block":"none" }} onClick={Handelopen} />
                <MdCancel className='cancel' onClick={Handelopen2} style={{display : open2 ?"block":"none"}} />
                <BsSearch onClick={Handelopen1}> </BsSearch>
                </div>
                </div>
            </div>
            {open && <div className='mobile-nav'>
                <ul className='mob-content'>
                    <li><NavLink to="/"  onClick={header}>Popular</NavLink></li>
                    <li><NavLink to="/toprated" onClick={header} >Top-Rated</NavLink></li>
                    <li><NavLink to="/upcoming" onClick={header}>Upcoming</NavLink></li>
                </ul>
            </div>}
            {
                open1 && <div className='mob_search'>
                    <input type="text" className='search-text' placeholder='Movie-Name' onChange={HandelChange} required></input><NavLink to="/Searchbar"><button className='btn-search' onClick={searchClick}>Search</button></NavLink>
                </div>
            }

            { searchlabel.length>1 ?   <div className='kjhg'>  { 
                Search !== undefined && Search.results !== undefined && Search.results.length > 0 && <div className='search1'>
                    {
                        Search.results.map((res) => {
                            return <Card Titel={res.original_title.toUpperCase()} Image1={"https://image.tmdb.org/t/p/w500" + res.backdrop_path} Rating={res.vote_average}></Card>
                        })
                    }
                </div>
            }</div>:  flag ?<div className='Error'><h1 className='error_find'>404</h1>
            <p className='Error_disrciption'>sorry,we are unabel to find the page</p>
            <NavLink to="/" className="Backto" onClick={header}>Homepage</NavLink>
            </div>:""
        } 
        </>
    )
}
