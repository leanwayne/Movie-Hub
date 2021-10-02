import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SingleContent from '../../components/singleContent/SingleContent'
import '../trending/Trending.css'
import CustomPagination from '../../components/pagination/CustomPagination'

const Series = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1)
    const [numOfPages, setNumOfPages] = useState(1)

    const getTvSeriesData = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        setContent(data.results);
        setNumOfPages(data.total_pages)
    }

    useEffect(() => {
        window.scroll(0, 0);
        getTvSeriesData()
    }, [page])

    return (
        <div>
            <span className="pageTitle">Discover Series</span>
            <div className='trending'>
                {content && content.map(c => 
                    <SingleContent 
                        key={c.id} 
                        id={c.id} 
                        poster={c.poster_path} 
                        title={c.title || c.name} 
                        date={c.first_air_date || c.release_date} 
                        media='tv' 
                        vote_average={c.vote_average}
                    />
                )}
            </div>
            {numOfPages > 1 && (<CustomPagination setPage={setPage}numOfPages={numOfPages}/>)}
        </div>
    )
}

export default Series
