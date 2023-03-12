import React, { useEffect, useState } from 'react';
import "../components/covid.css"
const Covid=()=>{
    
    const day=new Date();
    const [data,setData]=useState([]);
    
    const getCovidData=async()=>{
        try{
            const res= await fetch('	https://data.covid19india.org/v4/min/data.min.json')
            const actualData=await res.json();
            console.log(actualData.TT.total)
            setData(actualData.TT.total)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();
    },[])
    return(
        <div className='main'>
        <h1>🔴Live</h1>
        <h1> COVID-19 LIVE TRACKER</h1>

        <ul>
            <li className='card'>
            <div className='card-inner a'>
                <p className='card-name'> OUR <span> STATE</span></p>
                <p className='card-data'> <span>TELANGANA</span></p>
            </div>
            <div className='card-inner b'>
                <p className='card-name '> TOTAL <span> RECOVERED</span></p>
                <p className='card-data'> <span>{data.recovered}</span></p>
            </div>
            <div className='card-inner c'>
                <p className='card-name'> TOTAL <span> CONFIRMED</span></p>
                <p className='card-data'> <span>{data.confirmed}</span></p>
            </div>
            <div className='card-inner d'>
                <p className='card-name'> TOTAL <span> DEATH</span></p>
                <p className='card-data'> <span>{data.deceased}</span></p>
            </div>
            <div className='card-inner e'>
                <p className='card-name'> TOTAL <span> ACTIVE</span></p>
                <p className='card-data'> <span>{data.tested}</span></p>
            </div>
            <div className='card-inner f'>
                <p className='card-name'> LAST  <span> UPDATE</span></p>
                <p className='card-data'> <span>{Date().slice(0,15)}</span></p>
            </div>

            </li>
        </ul>
    </div>
    );
   
}

export default Covid;