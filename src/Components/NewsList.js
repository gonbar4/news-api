import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() =>{
        const getArticles = async () => {
            const response = axios.get('https://newsapi.org/v2/everything?q=portugal&from=2023-11-26&sortBy=publishedAt&apiKey=66ddced8f0ee4a70bd22e88d0d1fea2d')
            console.log(response)
            setArticles((await response).data.articles)
        }  
        getArticles()  
    },[])

    return(
        <div>
            {articles.map(article => {
                return (
                    <NewsItem 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsList