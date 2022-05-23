import { useEffect, useState } from "react"
import './style.css'
import image12 from './image12/image12.png'

export default function NewsFetch(props) {
    const [user, setUser] = useState([])
    const fetchData = async()=>{
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=2ae0469447754decabfdbc486b000f44`)
        let data = await response.json()
        setUser(data.articles)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="newsLayout">
            {user.map((item,index)=>{
                return(
                    <div key={index} className="newsCard">
                        <h5>{item.title}</h5>
                        <img src={item.urlToImage ?item.urlToImage : image12 } alt="" width='100%' />
                        <p>{item.description}</p>
                        <div>{item.content?item.content.slice(0,70):""}</div>
                        <a target='_blank' href={item.url}>Read More</a>
                    </div>
                )
            })}
        </div>
    )
}