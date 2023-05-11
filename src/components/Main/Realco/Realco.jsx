import React from 'react';


// media

import  Logo from '../../Header/Logo.svg'

const Realco = () => {
    return (
        <footer className="realco">
            <div className="container">
                <div className="realco__row">
                    <img src={Logo} alt=""/>

                    <div className="realco__page">
                        <ul className="realco__list">
                            <li className="realco__itemFirst">Pages</li>
                            <li className="realco__item">Home</li>
                            <li className="realco__item">About</li>
                            <li className="realco__item">Blog</li>
                            <li className="realco__item">Agents</li>
                            <li className="realco__item">Contact</li>
                            <li className="realco__item">FAQs</li>
                            <li className="realco__item">Properties</li>
                        </ul>
                        <ul className="realco__list">
                            <li className="realco__itemFirst">CMS Pages</li>
                            <li className="realco__item">Property</li>
                            <li className="realco__item">Property Single</li>
                            <li className="realco__item">Blog Categories</li>
                            <li className="realco__item">Blog Single</li>
                            <li className="realco__item">Agent Single</li>
                        </ul>
                        <ul className="realco__list">
                            <li className="realcor__itemFirst">Utility Pages</li>
                            <li className="realco__item">Style Guide</li>
                            <li className="realco__item">Changelog</li>
                            <li className="realco__item">Licenses</li>
                            <li className="realco__item">404</li>
                            <li className="realco__item">Password</li>
                            <li className="realco__item">Search</li>
                        </ul>
                    </div>

                    <form className="realco_realco">
                        <h3 className="realco__form-title">Subscribe</h3>
                        <p className="realco__form-text">Join our newsletter to stay up to date on features and releases.</p>
                        <label htmlFor="" className="realco__form-label">
                            <input placeholder="Enter your email" type="email" className="realco__form-input"/>
                            <button className="realco__form-btn">Subscribe</button>

                        </label>
                        <p className="realco__subtitle">By subscribing you agree to with our Privacy Policy</p>
                    </form>

                </div>
            </div>
        </footer>
    );
};

export default Realco;