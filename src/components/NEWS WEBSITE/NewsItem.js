import React from 'react'

const NewsItem = ({ news }) => {
  return (
    <details className='news-item'>
      <summary>
        <h3>{news.title}</h3>
        <img src={news.urlToImage} alt="some News" />
      </summary>
      <p>{news.description}</p>
      <p>{news.publishedAt}</p>
      <a href={news.url} target="_blank" rel="noreferrer">READ MORE..</a>
    </details>
  )
}

export default NewsItem