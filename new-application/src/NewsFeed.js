import {useState} from 'react';
import axios from 'axios';
import Articles from './Articles';

export default function NewsFeed(){
    const [info, setInfo] = useState([]);

    const getNews = (event) => {
        event.preventDefault();
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=91d1053907434a08b9eb7f29f2a29ff9";
        axios.get(url)
        .then(res => setInfo(res.data.articles))
        .catch(err => console.log("Issue: " + err));
    }
    const getNewsIND = (event) => {
        event.preventDefault();
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=91d1053907434a08b9eb7f29f2a29ff9";
        axios.get(url)
        .then(res => setInfo(res.data.articles))
        .catch(err => console.log("Issue: " + err));
    }
    return(
        <>
        <h1 className='main-title'>News Application</h1>
        <hr />
        <button onClick={getNews} className='US-news-btn'>Get News From US</button>
        {
            info.map((e) => (
                <>
                <Articles title={e.title} desc = {e.description} url={e.url} publish = {e.publishedAt} imgSrc = {e.urlToImage} />
                </>
            ))
        }
        <hr />
        <button onClick={getNewsIND} className='Ind-news-btn'>Get News From INDIA</button>
        {
            info.map((e) => (
                <>
                <Articles title={e.title} desc = {e.description} url={e.url} publish = {e.publishedAt} imgSrc = {e.urlToImage} />
                </>
            ))
        }
        </>
        
    );
}