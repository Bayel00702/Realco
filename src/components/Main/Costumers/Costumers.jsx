import React from 'react';

// media

import Star1 from './Star1.svg'
import User1 from './User1.svg'
import User2 from './User2.svg'
import User3 from './User3.svg'
import Icon from './Icon.svg'

const Costumers = () => {
    return (
        <section className="costumers">
            <div className="container">
                <h2 className="costumers__title">What customers say</h2>
                <p className="costumers__text">Faucibus orci luctus et ultrices posuere cubilia curae.</p>

                <div className="costumers__row">
                    <div className="costumers__card">
                        <img src={Star1} alt=""/>
                        <p className="costumers__card-text">"Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam."</p>
                        <div className="costumers__card-profile">
                            <img src={User1} alt=""/>
                            <div className="costumers__card-profile__info">
                                <h3 className="costumers__card-profile__info-title">Michael Webb</h3>
                                <p className="costumers__card-profile__info-text">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="costumers__card">
                        <img src={Star1} alt=""/>
                        <p className="costumers__card-text">"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium iaculis ultricies. Aenean in leo vitae tortor."</p>
                        <div className="costumers__card-profile">
                            <img src={User2} alt=""/>
                            <div className="costumers__card-profile__info">
                                <h3 className="costumers__card-profile__info-title">Amber Keene</h3>
                                <p className="costumers__card-profile__info-text">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="costumers__card">
                        <img src={Star1} alt=""/>
                        <p className="costumers__card-text">"Condimentum viverra orci. Pellentesque suscipit odio nisl, non ultricies purus mattis eget. In placerat, lorem a sodales ullamcorper, eros nibh laoreet nisl."</p>
                        <div className="costumers__card-profile">
                            <img src={User3} alt=""/>
                            <div className="costumers__card-profile__info">
                                <h3 className="costumers__card-profile__info-title">Sarah Tarleton</h3>
                                <p className="costumers__card-profile__info-text">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="costumers__dop">
                    <img src={Icon} alt=""/>
                    <h2 className="costumers__dop-title">Families are our priority</h2>
                    <p className="costumers__dop-text">Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non, placerat vel arcu. In non consectetur lorem. Morbi non varius sapien suscipit mauri.</p>

                    <button className="costumers__dop-btn">Get started</button>
                </div>
            </div>
        </section>
    );
};

export default Costumers;