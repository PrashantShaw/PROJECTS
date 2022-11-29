import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"


function APIcall(props) {
    
    const API_KEY = '7801cfbc00004ad3a623fff057598b66'
    const COUNTRY = 'in' // us, ge, ch, eg, fr
    // const {CATEGORY} = props.CATEGORY  //business, entertainment, general, health, science, sports, technology

    const [newsList, setNewsList] = useState()

    useEffect(() => {
        const URL = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${props.CATEGORY}&apiKey=${API_KEY}`
    
        fetch(URL)
            .then(response => response.json())
            .then(json => setNewsList(json.articles))
    }, [props.CATEGORY])
    console.log("Fetched new Array::", newsList)

    return (
        <div className="container">
            {newsList && newsList.map((news, idx) => {
                return <NewsItem key={idx} news={news}/>
            })}
        </div>
    )
}

export default APIcall