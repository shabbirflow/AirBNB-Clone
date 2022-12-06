import React from "react"
import star from './images/star.png'

export default function Card(props) {
    let badgetext;
    if(props.openSpots === 0 ){
        badgetext = "SOLD OUT";
    }
    else if(props.location === "Online"){
        badgetext = "ONLINE"
    }
    return(
        <div className = 'card'>
            {badgetext &&  <div className="card-badge">{badgetext}</div>}
            <img src= {`./src/assets/images/${props.coverImg}`} className = "card-image"/>
            <div className="card-stats">
                <img src={star} className= "star" />
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}