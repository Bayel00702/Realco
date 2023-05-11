import React from 'react';

// media

import Item1 from '../House/1.png'
import Item2 from '../House/2.png'
import Item3 from '../House/3.png'

const Latest = () => {
    return (
        <section className="latest">
            <div className="container">
                <div className="latest__row">
                    <div className="latest__left">
                        <button className="latest__left-btn">Blog</button>
                        <h2 className="latest__left-title">Latest posts</h2>
                        <p className="latest__left-text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        <br/>
                            Praesent efficitur nibh massa morbi sagittis ornare dui in ornare.</p>
                    </div>
                    <div className="latest__right">
                        <button className="latest__right-btn">View all</button>
                    </div>
                </div>

                <div className="latest__row2">
                    <div className="latest__card">
                        <img className="latest__card-img" src={Item1} alt=""/>

                        <div className="latest__card-info">
                            <div className="latest__card-trend">
                                <p className="latest__card-trend__red">Trends</p>
                                <p className="latest__card-trend__data">May 10, 2022</p>
                            </div>
                            <h2 className="latest__card-info__title">The 9 best homes in New York</h2>
                            <p className="latest__card-info__text">Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.</p>
                            <button className="latest__card-info__btn">Read more <span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                        </div>
                    </div>
                    <div className="latest__card">
                        <img className="latest__card-img" src={Item2} alt=""/>

                        <div className="latest__card-info">
                            <div className="latest__card-trend">
                                <p className="latest__card-trend__red">DIY</p>
                                <p className="latest__card-trend__data">May 10, 2022</p>
                            </div>
                            <h2 className="latest__card-info__title">How to easily buy a house with Realco</h2>
                            <p className="latest__card-info__text">Praesent nec felis nisl. Phasellus eget lacus a metus fringilla fermentum sit amet.</p>
                            <button className="latest__card-info__btn">Read more <span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                        </div>
                    </div>
                    <div className="latest__card">
                        <img className="latest__card-img" src={Item3} alt=""/>

                        <div className="latest__card-info">
                            <div className="latest__card-trend">
                                <p className="latest__card-trend__red">DIY</p>
                                <p className="latest__card-trend__data">May 10, 2022</p>
                            </div>
                            <h2 className="latest__card-info__title">Renting houses - complete guide</h2>
                            <p className="latest__card-info__text">Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.</p>
                            <button className="latest__card-info__btn">Read more <span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Latest;