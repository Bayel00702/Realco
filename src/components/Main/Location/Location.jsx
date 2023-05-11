import React from 'react';

const Location = () => {
    return (
        <section className="location">
            <div className="container">
                <h2 className="location__title">Locations</h2>
                <p className="location__text">Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus urna, aliquet non nisl sit amet.</p>

                <div className="location__row">
                    <div className="location__card">
                        <h3 className="location__card-title">San Francisco, CA</h3>
                        <button className="location__card-btn">View Properties<span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                    </div>
                    <div className="location__card">
                        <h3 className="location__card-title">Los Angeles, CA</h3>
                        <button className="location__card-btn">View Properties<span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                    </div>
                    <div className="location__card">
                        <h3 className="location__card-title">San Diego, CA</h3>
                        <button className="location__card-btn">View Properties<span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                    </div>
                    <div className="location__card">
                        <h3 className="location__card-title">New York, NY</h3>
                        <button className="location__card-btn">View Properties<span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                    </div>
                    <div className="location__card">
                        <h3 className="location__card-title">Las Vegas, NV</h3>
                        <button className="location__card-btn">View Properties<span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                    </div>
                    <div className="location__card">
                        <h3 className="location__card-title">Miami, FL</h3>
                        <button className="location__card-btn">View Properties<span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                    </div>
                </div>

                <div className="location__btns">
                    <button className="location__btns-btn">Explore properties</button>
                    <button className="location__btns-btnCon">Contact agent<span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                </div>
            </div>
        </section>
    );
};

export default Location;