import React from "react"
import locIcon from "../images/locICon.png"


export default function Card(props)
{
    return(
        <div className="cards">
            <img src={props.img} alt="castle-png" className="card-image"/>
            <div className="right-section">
                <div className="main-title">
                    <img src={locIcon} className="loc-icon" alt="location-icon"/>
                    <span className="location-title">
                        {props.location}
                    </span>
                    <a target="_blank" href={props.realLocation}>View On Google Maps</a>
                </div>
                <div className="footer">
                    <h2> 
                        {props.name}
                    </h2>
                    <h3>
                        {props.travelSpan}
                    </h3>
                    <p>
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}