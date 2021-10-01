import { Badge } from '@material-ui/core';
import React from 'react';
import { img_300, unavailable } from '../../config/Config';
import './SingleContent.css'

const SingleContent = ({id, poster, title, date, media, vote_average}) => {
    return (
        <div className="media">
            <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
            <img className="poster" src={ poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className="subTitle" >{media === "tv" ? "TV Series" : "Movie"}</span>
            <spam className="subTitle">{date}</spam>
        </div>
    )
}
export default SingleContent