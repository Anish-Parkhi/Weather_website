import {React, useState, useEffect} from 'react'
import './Home.css'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search';

function Home() {

    const [posts,setPosts] = useState(null)
    const [city,setCity] = useState('chennai')
    const [btn,setbtn] = useState('')

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=be3e7673377fb8224b6391222c50a13d`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)  
        })
        .catch(err=>{
            console.log(err)
        })
    },[city])

    function handleClick(){
        setCity(btn)
    }


  return (
    <>
        <div className="head"><b>SkySpy</b></div>
        <div className='main-div'>
            <input type='search' placeholder='Search' className='input' onChange={e=>setbtn(e.target.value)}/> 
            <div className='btn-div'>   
                <button className='btn' onClick={handleClick} >Show Temperature</button>
            </div>

            <div className='current-temp'>
               
                {
                        posts?.list.slice(0,1).map(item=>{
                            return(
                                <>
                                    <div style={{fontSize:"40px"}} >{ Math.floor( item.main.temp - 273)  }°C</div>
                                    <div style={{fontSize:"40px", margin:"8px"}}> { item.weather.map(i => {
                                        return(
                                            i.main
                                        )
                                    }) }</div>
                                </>    
                            )
                        })
                    }
                </div>
            <div className='middle-div'>5 day forecast</div>
            <div className='display'>
                <div className='card'>
                    {
                        posts?.list.slice(0,1).map(item=>{
                            return(
                                <>
                                    <div>{ Math.floor( item.main.temp - 273)  }°C</div>
                                    <div> { item.weather.map(i => {
                                        return(
                                            i.main
                                        )
                                    }) }</div>
                                    <div>
                                        Humidity: {
                                            item.main.humidity
                                        }%
                                    </div>
                                    <div>Wind: {item.wind.speed} m/s
                                    </div>
                                </>    
                            )
                        })
                    }
                </div>
                <div className='card'>
                    {
                        posts?.list.slice(1,2).map(item=>{
                            return(
                                <>
                                    <div >{ Math.floor( item.main.temp - 273)  }°C</div>
                                    <div> { item.weather.map(i => {
                                        return(
                                            i.main
                                        )
                                    }) }</div>
                                    <div>
                                        Humidity: {
                                            item.main.humidity
                                        }%
                                    </div>
                                    <div>Wind: {item.wind.speed}m/s
                                    </div>
                                </>    
                            )
                        })
                    }
                </div>
                <div className='card'>
                    
                    {
                        posts?.list.slice(2,3).map(item=>{
                            return(
                                <>
                                    <div >{ Math.floor( item.main.temp - 273)  }°C</div>
                                    <div> { item.weather.map(i => {
                                        return(
                                            i.main
                                        )
                                    }) }</div>
                                    <div>
                                        Humidity: {
                                            item.main.humidity
                                        }%
                                    </div>
                                    <div>Wind: {item.wind.speed}m/s
                                    </div>
                                </>    
                            )
                        })
                    }
                </div>
                <div className='card'>
                    {
                        posts?.list.slice(3,4).map(item=>{
                            return(
                                <>
                                    <div >{ Math.floor( item.main.temp - 273)  }°C</div>
                                    <div> { item.weather.map(i => {
                                        return(
                                            i.main
                                        )
                                    }) }</div>
                                    <div>
                                        Humidity: {
                                            item.main.humidity
                                        }%
                                    </div>
                                    <div>Wind: {item.wind.speed}m/s
                                    </div>
                                </>    
                            )
                        })
                    }
                </div>
                <div className='card'>
                    {
                        posts?.list.slice(4,5).map(item=>{
                            return(
                                <>
                                    <div >{ Math.floor( item.main.temp - 273)  }°C</div>
                                    <div> { item.weather.map(i => {
                                        return(
                                            i.main
                                        )
                                    }) }</div>
                                    <div>
                                        Humidity: {
                                            item.main.humidity
                                        }%
                                    </div>
                                    <div>Wind: {item.wind.speed}m/s
                                    </div>
                                </>    
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Home