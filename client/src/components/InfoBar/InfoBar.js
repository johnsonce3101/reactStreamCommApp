import React from 'react'
import '../InfoBar/InfoBar.css';
import onlineicon from '../icons/onlineIcon.png'
import closeIcon from '../icons/closeIcon.png'

const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineicon} alt="online image" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/home"><img src={closeIcon} alt="close image" /></a>
        </div>

    </div>

)

export default InfoBar;