import {useState, useEffect}from "react";
import React from "react";
import Card from "./Card";
import axios from "axios";
import "./style.css"
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt && evt.key==="Enter" && search!=='' )

        {           
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=ram&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
    }, [])
    
    // if (search==='') {
    //     axios.get('https://www.googleapis.com/books/v1/volumes?q=ram&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
    //     .then(res=>setData(res.data.items))
    //     .catch(err=>console.log(err))
    // }
    return(

        <>
            <div className="header">

                    <div className="search">
                        <input type="text" placeholder="Lets read....."
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyDown={searchBook}/>
                    </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;