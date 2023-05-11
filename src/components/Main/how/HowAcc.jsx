import React, {useState} from 'react'

const HowAcc = ({icon, title, text}) => {

    const  [active, setActive] = useState(false);

    return (
        <div className="how__card">
            <img className="how__card-img" onClick={() => setActive(!active)} src={icon} alt=""/>
            <h3 className="how__card-title" onClick={() => setActive(!active)}>{title}</h3>
            <p className="how__card-text" style={{display: active ? 'block' : 'none'}}>{text}</p>
        </div>
    )
};

export default HowAcc