import React from "react";

//media

import Item1 from './1.png'
import Item2 from './2.png'
import Item3 from './3.png'
import Item4 from './4.png'
import Item5 from './5.png'
import Item6 from './6.png'
import Right from './Right.png'
import Left from './Left.png'

const House = () => {
  return (
      <section className="house">
          <div className="container">
              <button className="house__btn">Properties</button>
              <h2 className="house__title">
                  Houses in your favorite area
              </h2>
              <div className="house__row">
                  <div className="house__card">
                      <img className="house__card-img" src={Item1} alt=""/>

                      <div className="house__card-info">
                          <h2 className="house__card-info__title">Cozy studio in Los Angeles</h2>
                          <h3 className="house__card-info__price">$ 1,200.00 USD</h3>
                          <p className="house__card-info__text"><span><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.8125 6.1875C4.14583 6.5 4.54167 6.65625 5 6.65625C5.45833 6.65625 5.84375 6.5 6.15625 6.1875C6.48958 5.85417 6.65625 5.45833 6.65625 5C6.65625 4.54167 6.48958 4.15625 6.15625 3.84375C5.84375 3.51042 5.45833 3.34375 5 3.34375C4.54167 3.34375 4.14583 3.51042 3.8125 3.84375C3.5 4.15625 3.34375 4.54167 3.34375 5C3.34375 5.45833 3.5 5.85417 3.8125 6.1875ZM1.6875 1.71875C2.60417 0.802083 3.70833 0.34375 5 0.34375C6.29167 0.34375 7.38542 0.802083 8.28125 1.71875C9.19792 2.61458 9.65625 3.70833 9.65625 5C9.65625 5.64583 9.48958 6.38542 9.15625 7.21875C8.84375 8.05208 8.45833 8.83333 8 9.5625C7.54167 10.2917 7.08333 10.9792 6.625 11.625C6.1875 12.25 5.8125 12.75 5.5 13.125L5 13.6562C4.875 13.5104 4.70833 13.3229 4.5 13.0938C4.29167 12.8438 3.91667 12.3646 3.375 11.6562C2.83333 10.9271 2.35417 10.2292 1.9375 9.5625C1.54167 8.875 1.17708 8.10417 0.84375 7.25C0.510417 6.39583 0.34375 5.64583 0.34375 5C0.34375 3.70833 0.791667 2.61458 1.6875 1.71875Z" fill="#65665C"/>
</svg>
</span>2263 Southlea, Los Angeles</p>

                          <div className="house__card-info__place">
                              <p className="house__card-info__place-info"><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3438 7.65625H13.6562V11.6562C13.6562 12.0104 13.5208 12.3229 13.25 12.5938C13 12.8646 12.6979 13 12.3438 13C12.3438 13.1875 12.2708 13.3438 12.125 13.4688C12 13.5938 11.8438 13.6562 11.6562 13.6562H2.34375C2.15625 13.6562 1.98958 13.5938 1.84375 13.4688C1.71875 13.3438 1.65625 13.1875 1.65625 13C1.30208 13 0.989583 12.8646 0.71875 12.5938C0.46875 12.3229 0.34375 12.0104 0.34375 11.6562V7.65625H2.34375V7.15625C2.34375 6.76042 2.48958 6.41667 2.78125 6.125C3.09375 5.8125 3.44792 5.65625 3.84375 5.65625C4.26042 5.65625 4.63542 5.82292 4.96875 6.15625L5.875 7.1875C6 7.33333 6.1875 7.48958 6.4375 7.65625H11V2.21875C11 2.07292 10.9479 1.94792 10.8438 1.84375C10.7396 1.71875 10.6042 1.65625 10.4375 1.65625C10.2917 1.65625 10.1667 1.70833 10.0625 1.8125L9.21875 2.65625C9.26042 2.82292 9.28125 2.9375 9.28125 3C9.28125 3.22917 9.20833 3.46875 9.0625 3.71875L7.21875 1.875C7.46875 1.72917 7.70833 1.65625 7.9375 1.65625C8.04167 1.65625 8.15625 1.67708 8.28125 1.71875L9.125 0.875C9.47917 0.520833 9.91667 0.34375 10.4375 0.34375C10.9583 0.34375 11.4062 0.53125 11.7812 0.90625C12.1562 1.26042 12.3438 1.69792 12.3438 2.21875V7.65625ZM2.71875 4.625C2.46875 4.35417 2.34375 4.03125 2.34375 3.65625C2.34375 3.28125 2.46875 2.96875 2.71875 2.71875C2.96875 2.46875 3.28125 2.34375 3.65625 2.34375C4.03125 2.34375 4.34375 2.46875 4.59375 2.71875C4.86458 2.96875 5 3.28125 5 3.65625C5 4.03125 4.86458 4.35417 4.59375 4.625C4.34375 4.875 4.03125 5 3.65625 5C3.28125 5 2.96875 4.875 2.71875 4.625Z" fill="#65665C"/>
</svg>
</span>2</p>
                              <p className="house__card-info__place-info"><span><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4.1875V2.34375C13 1.96875 12.9062 1.63542 12.7188 1.34375C12.5521 1.03125 12.3125 0.791667 12 0.625C11.7083 0.4375 11.375 0.34375 11 0.34375H8.34375C8.07292 0.34375 7.82292 0.395833 7.59375 0.5C7.36458 0.583333 7.16667 0.697917 7 0.84375C6.83333 0.697917 6.63542 0.583333 6.40625 0.5C6.17708 0.395833 5.92708 0.34375 5.65625 0.34375H3C2.625 0.34375 2.28125 0.4375 1.96875 0.625C1.67708 0.791667 1.4375 1.03125 1.25 1.34375C1.08333 1.63542 1 1.96875 1 2.34375V4.1875C0.791667 4.375 0.625 4.59375 0.5 4.84375C0.395833 5.09375 0.34375 5.36458 0.34375 5.65625V9.65625H1.65625V8.34375H12.3438V9.65625H13.6562V5.65625C13.6562 5.36458 13.5938 5.09375 13.4688 4.84375C13.3646 4.59375 13.2083 4.375 13 4.1875ZM8.34375 1.65625H11C11.1875 1.65625 11.3438 1.72917 11.4688 1.875C11.5938 2 11.6562 2.15625 11.6562 2.34375V3.65625H7.65625V2.34375C7.65625 2.15625 7.71875 2 7.84375 1.875C7.98958 1.72917 8.15625 1.65625 8.34375 1.65625ZM2.34375 2.34375C2.34375 2.15625 2.40625 2 2.53125 1.875C2.65625 1.72917 2.8125 1.65625 3 1.65625H5.65625C5.84375 1.65625 6 1.72917 6.125 1.875C6.27083 2 6.34375 2.15625 6.34375 2.34375V3.65625H2.34375V2.34375ZM1.65625 7V5.65625C1.65625 5.48958 1.71875 5.34375 1.84375 5.21875C1.98958 5.07292 2.15625 5 2.34375 5H11.6562C11.8438 5 12 5.07292 12.125 5.21875C12.2708 5.34375 12.3438 5.48958 12.3438 5.65625V7H1.65625Z" fill="#65665C"/>
</svg>
</span>2</p>
                              <p className="house__card-info__place-info"><span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.65625 9.34375H6.5L2.65625 5.5V9.34375ZM9.78125 9.78125L11.3438 11.3438H2C1.64583 11.3438 1.33333 11.2083 1.0625 10.9375C0.791667 10.6667 0.65625 10.3542 0.65625 10V0.65625L2.21875 2.21875L1.53125 2.9375L2 3.40625L2.6875 2.6875L4 4L3.28125 4.6875L3.75 5.1875L4.46875 4.46875L5.78125 5.78125L5.0625 6.46875L5.53125 6.9375L6.25 6.25L7.53125 7.53125L6.8125 8.25L7.3125 8.71875L8 8L9.3125 9.3125L8.59375 10L9.0625 10.4688L9.78125 9.78125Z" fill="#65665C"/>
</svg>
</span>840 sqft</p>
                          </div>
                      </div>


                  </div>
                  <div className="house__card">
                      <img className="house__card-img" src={Item2} alt=""/>

                      <div className="house__card-info">
                          <h2 className="house__card-info__title">Tiny home in San Diego</h2>
                          <h3 className="house__card-info__price">$ 740,000.00 USD</h3>
                          <p className="house__card-info__text"><span><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.8125 6.1875C4.14583 6.5 4.54167 6.65625 5 6.65625C5.45833 6.65625 5.84375 6.5 6.15625 6.1875C6.48958 5.85417 6.65625 5.45833 6.65625 5C6.65625 4.54167 6.48958 4.15625 6.15625 3.84375C5.84375 3.51042 5.45833 3.34375 5 3.34375C4.54167 3.34375 4.14583 3.51042 3.8125 3.84375C3.5 4.15625 3.34375 4.54167 3.34375 5C3.34375 5.45833 3.5 5.85417 3.8125 6.1875ZM1.6875 1.71875C2.60417 0.802083 3.70833 0.34375 5 0.34375C6.29167 0.34375 7.38542 0.802083 8.28125 1.71875C9.19792 2.61458 9.65625 3.70833 9.65625 5C9.65625 5.64583 9.48958 6.38542 9.15625 7.21875C8.84375 8.05208 8.45833 8.83333 8 9.5625C7.54167 10.2917 7.08333 10.9792 6.625 11.625C6.1875 12.25 5.8125 12.75 5.5 13.125L5 13.6562C4.875 13.5104 4.70833 13.3229 4.5 13.0938C4.29167 12.8438 3.91667 12.3646 3.375 11.6562C2.83333 10.9271 2.35417 10.2292 1.9375 9.5625C1.54167 8.875 1.17708 8.10417 0.84375 7.25C0.510417 6.39583 0.34375 5.64583 0.34375 5C0.34375 3.70833 0.791667 2.61458 1.6875 1.71875Z" fill="#65665C"/>
</svg>
</span>2569 El Segundo, San Diego</p>

                          <div className="house__card-info__place">
                              <p className="house__card-info__place-info"><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3438 7.65625H13.6562V11.6562C13.6562 12.0104 13.5208 12.3229 13.25 12.5938C13 12.8646 12.6979 13 12.3438 13C12.3438 13.1875 12.2708 13.3438 12.125 13.4688C12 13.5938 11.8438 13.6562 11.6562 13.6562H2.34375C2.15625 13.6562 1.98958 13.5938 1.84375 13.4688C1.71875 13.3438 1.65625 13.1875 1.65625 13C1.30208 13 0.989583 12.8646 0.71875 12.5938C0.46875 12.3229 0.34375 12.0104 0.34375 11.6562V7.65625H2.34375V7.15625C2.34375 6.76042 2.48958 6.41667 2.78125 6.125C3.09375 5.8125 3.44792 5.65625 3.84375 5.65625C4.26042 5.65625 4.63542 5.82292 4.96875 6.15625L5.875 7.1875C6 7.33333 6.1875 7.48958 6.4375 7.65625H11V2.21875C11 2.07292 10.9479 1.94792 10.8438 1.84375C10.7396 1.71875 10.6042 1.65625 10.4375 1.65625C10.2917 1.65625 10.1667 1.70833 10.0625 1.8125L9.21875 2.65625C9.26042 2.82292 9.28125 2.9375 9.28125 3C9.28125 3.22917 9.20833 3.46875 9.0625 3.71875L7.21875 1.875C7.46875 1.72917 7.70833 1.65625 7.9375 1.65625C8.04167 1.65625 8.15625 1.67708 8.28125 1.71875L9.125 0.875C9.47917 0.520833 9.91667 0.34375 10.4375 0.34375C10.9583 0.34375 11.4062 0.53125 11.7812 0.90625C12.1562 1.26042 12.3438 1.69792 12.3438 2.21875V7.65625ZM2.71875 4.625C2.46875 4.35417 2.34375 4.03125 2.34375 3.65625C2.34375 3.28125 2.46875 2.96875 2.71875 2.71875C2.96875 2.46875 3.28125 2.34375 3.65625 2.34375C4.03125 2.34375 4.34375 2.46875 4.59375 2.71875C4.86458 2.96875 5 3.28125 5 3.65625C5 4.03125 4.86458 4.35417 4.59375 4.625C4.34375 4.875 4.03125 5 3.65625 5C3.28125 5 2.96875 4.875 2.71875 4.625Z" fill="#65665C"/>
</svg>
</span>1</p>
                              <p className="house__card-info__place-info"><span><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4.1875V2.34375C13 1.96875 12.9062 1.63542 12.7188 1.34375C12.5521 1.03125 12.3125 0.791667 12 0.625C11.7083 0.4375 11.375 0.34375 11 0.34375H8.34375C8.07292 0.34375 7.82292 0.395833 7.59375 0.5C7.36458 0.583333 7.16667 0.697917 7 0.84375C6.83333 0.697917 6.63542 0.583333 6.40625 0.5C6.17708 0.395833 5.92708 0.34375 5.65625 0.34375H3C2.625 0.34375 2.28125 0.4375 1.96875 0.625C1.67708 0.791667 1.4375 1.03125 1.25 1.34375C1.08333 1.63542 1 1.96875 1 2.34375V4.1875C0.791667 4.375 0.625 4.59375 0.5 4.84375C0.395833 5.09375 0.34375 5.36458 0.34375 5.65625V9.65625H1.65625V8.34375H12.3438V9.65625H13.6562V5.65625C13.6562 5.36458 13.5938 5.09375 13.4688 4.84375C13.3646 4.59375 13.2083 4.375 13 4.1875ZM8.34375 1.65625H11C11.1875 1.65625 11.3438 1.72917 11.4688 1.875C11.5938 2 11.6562 2.15625 11.6562 2.34375V3.65625H7.65625V2.34375C7.65625 2.15625 7.71875 2 7.84375 1.875C7.98958 1.72917 8.15625 1.65625 8.34375 1.65625ZM2.34375 2.34375C2.34375 2.15625 2.40625 2 2.53125 1.875C2.65625 1.72917 2.8125 1.65625 3 1.65625H5.65625C5.84375 1.65625 6 1.72917 6.125 1.875C6.27083 2 6.34375 2.15625 6.34375 2.34375V3.65625H2.34375V2.34375ZM1.65625 7V5.65625C1.65625 5.48958 1.71875 5.34375 1.84375 5.21875C1.98958 5.07292 2.15625 5 2.34375 5H11.6562C11.8438 5 12 5.07292 12.125 5.21875C12.2708 5.34375 12.3438 5.48958 12.3438 5.65625V7H1.65625Z" fill="#65665C"/>
</svg>
</span>2</p>
                              <p className="house__card-info__place-info"><span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.65625 9.34375H6.5L2.65625 5.5V9.34375ZM9.78125 9.78125L11.3438 11.3438H2C1.64583 11.3438 1.33333 11.2083 1.0625 10.9375C0.791667 10.6667 0.65625 10.3542 0.65625 10V0.65625L2.21875 2.21875L1.53125 2.9375L2 3.40625L2.6875 2.6875L4 4L3.28125 4.6875L3.75 5.1875L4.46875 4.46875L5.78125 5.78125L5.0625 6.46875L5.53125 6.9375L6.25 6.25L7.53125 7.53125L6.8125 8.25L7.3125 8.71875L8 8L9.3125 9.3125L8.59375 10L9.0625 10.4688L9.78125 9.78125Z" fill="#65665C"/>
</svg>
</span>400 sqft</p>
                          </div>
                      </div>


                  </div>
                  <div className="house__card">
                      <img className="house__card-img" src={Item3} alt=""/>

                      <div className="house__card-info">
                          <h2 className="house__card-info__title">Crown house in New York</h2>
                          <h3 className="house__card-info__price">$ 980,000.00 USD</h3>
                          <p className="house__card-info__text"><span><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.8125 6.1875C4.14583 6.5 4.54167 6.65625 5 6.65625C5.45833 6.65625 5.84375 6.5 6.15625 6.1875C6.48958 5.85417 6.65625 5.45833 6.65625 5C6.65625 4.54167 6.48958 4.15625 6.15625 3.84375C5.84375 3.51042 5.45833 3.34375 5 3.34375C4.54167 3.34375 4.14583 3.51042 3.8125 3.84375C3.5 4.15625 3.34375 4.54167 3.34375 5C3.34375 5.45833 3.5 5.85417 3.8125 6.1875ZM1.6875 1.71875C2.60417 0.802083 3.70833 0.34375 5 0.34375C6.29167 0.34375 7.38542 0.802083 8.28125 1.71875C9.19792 2.61458 9.65625 3.70833 9.65625 5C9.65625 5.64583 9.48958 6.38542 9.15625 7.21875C8.84375 8.05208 8.45833 8.83333 8 9.5625C7.54167 10.2917 7.08333 10.9792 6.625 11.625C6.1875 12.25 5.8125 12.75 5.5 13.125L5 13.6562C4.875 13.5104 4.70833 13.3229 4.5 13.0938C4.29167 12.8438 3.91667 12.3646 3.375 11.6562C2.83333 10.9271 2.35417 10.2292 1.9375 9.5625C1.54167 8.875 1.17708 8.10417 0.84375 7.25C0.510417 6.39583 0.34375 5.64583 0.34375 5C0.34375 3.70833 0.791667 2.61458 1.6875 1.71875Z" fill="#65665C"/>
</svg>
</span>4489 Smity Fielda, New York</p>

                          <div className="house__card-info__place">
                              <p className="house__card-info__place-info"><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3438 7.65625H13.6562V11.6562C13.6562 12.0104 13.5208 12.3229 13.25 12.5938C13 12.8646 12.6979 13 12.3438 13C12.3438 13.1875 12.2708 13.3438 12.125 13.4688C12 13.5938 11.8438 13.6562 11.6562 13.6562H2.34375C2.15625 13.6562 1.98958 13.5938 1.84375 13.4688C1.71875 13.3438 1.65625 13.1875 1.65625 13C1.30208 13 0.989583 12.8646 0.71875 12.5938C0.46875 12.3229 0.34375 12.0104 0.34375 11.6562V7.65625H2.34375V7.15625C2.34375 6.76042 2.48958 6.41667 2.78125 6.125C3.09375 5.8125 3.44792 5.65625 3.84375 5.65625C4.26042 5.65625 4.63542 5.82292 4.96875 6.15625L5.875 7.1875C6 7.33333 6.1875 7.48958 6.4375 7.65625H11V2.21875C11 2.07292 10.9479 1.94792 10.8438 1.84375C10.7396 1.71875 10.6042 1.65625 10.4375 1.65625C10.2917 1.65625 10.1667 1.70833 10.0625 1.8125L9.21875 2.65625C9.26042 2.82292 9.28125 2.9375 9.28125 3C9.28125 3.22917 9.20833 3.46875 9.0625 3.71875L7.21875 1.875C7.46875 1.72917 7.70833 1.65625 7.9375 1.65625C8.04167 1.65625 8.15625 1.67708 8.28125 1.71875L9.125 0.875C9.47917 0.520833 9.91667 0.34375 10.4375 0.34375C10.9583 0.34375 11.4062 0.53125 11.7812 0.90625C12.1562 1.26042 12.3438 1.69792 12.3438 2.21875V7.65625ZM2.71875 4.625C2.46875 4.35417 2.34375 4.03125 2.34375 3.65625C2.34375 3.28125 2.46875 2.96875 2.71875 2.71875C2.96875 2.46875 3.28125 2.34375 3.65625 2.34375C4.03125 2.34375 4.34375 2.46875 4.59375 2.71875C4.86458 2.96875 5 3.28125 5 3.65625C5 4.03125 4.86458 4.35417 4.59375 4.625C4.34375 4.875 4.03125 5 3.65625 5C3.28125 5 2.96875 4.875 2.71875 4.625Z" fill="#65665C"/>
</svg>
</span>2</p>
                              <p className="house__card-info__place-info"><span><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4.1875V2.34375C13 1.96875 12.9062 1.63542 12.7188 1.34375C12.5521 1.03125 12.3125 0.791667 12 0.625C11.7083 0.4375 11.375 0.34375 11 0.34375H8.34375C8.07292 0.34375 7.82292 0.395833 7.59375 0.5C7.36458 0.583333 7.16667 0.697917 7 0.84375C6.83333 0.697917 6.63542 0.583333 6.40625 0.5C6.17708 0.395833 5.92708 0.34375 5.65625 0.34375H3C2.625 0.34375 2.28125 0.4375 1.96875 0.625C1.67708 0.791667 1.4375 1.03125 1.25 1.34375C1.08333 1.63542 1 1.96875 1 2.34375V4.1875C0.791667 4.375 0.625 4.59375 0.5 4.84375C0.395833 5.09375 0.34375 5.36458 0.34375 5.65625V9.65625H1.65625V8.34375H12.3438V9.65625H13.6562V5.65625C13.6562 5.36458 13.5938 5.09375 13.4688 4.84375C13.3646 4.59375 13.2083 4.375 13 4.1875ZM8.34375 1.65625H11C11.1875 1.65625 11.3438 1.72917 11.4688 1.875C11.5938 2 11.6562 2.15625 11.6562 2.34375V3.65625H7.65625V2.34375C7.65625 2.15625 7.71875 2 7.84375 1.875C7.98958 1.72917 8.15625 1.65625 8.34375 1.65625ZM2.34375 2.34375C2.34375 2.15625 2.40625 2 2.53125 1.875C2.65625 1.72917 2.8125 1.65625 3 1.65625H5.65625C5.84375 1.65625 6 1.72917 6.125 1.875C6.27083 2 6.34375 2.15625 6.34375 2.34375V3.65625H2.34375V2.34375ZM1.65625 7V5.65625C1.65625 5.48958 1.71875 5.34375 1.84375 5.21875C1.98958 5.07292 2.15625 5 2.34375 5H11.6562C11.8438 5 12 5.07292 12.125 5.21875C12.2708 5.34375 12.3438 5.48958 12.3438 5.65625V7H1.65625Z" fill="#65665C"/>
</svg>
</span>4</p>
                              <p className="house__card-info__place-info"><span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.65625 9.34375H6.5L2.65625 5.5V9.34375ZM9.78125 9.78125L11.3438 11.3438H2C1.64583 11.3438 1.33333 11.2083 1.0625 10.9375C0.791667 10.6667 0.65625 10.3542 0.65625 10V0.65625L2.21875 2.21875L1.53125 2.9375L2 3.40625L2.6875 2.6875L4 4L3.28125 4.6875L3.75 5.1875L4.46875 4.46875L5.78125 5.78125L5.0625 6.46875L5.53125 6.9375L6.25 6.25L7.53125 7.53125L6.8125 8.25L7.3125 8.71875L8 8L9.3125 9.3125L8.59375 10L9.0625 10.4688L9.78125 9.78125Z" fill="#65665C"/>
</svg>
</span>3200 sqft</p>
                          </div>
                      </div>


                  </div>
                  <div className="house__card">
                      <img className="house__card-img" src={Item4} alt=""/>

                      <div className="house__card-info">
                          <h2 className="house__card-info__title">Family house in Los Angeles</h2>
                          <h3 className="house__card-info__price">$ 4,200.00 USD</h3>
                          <p className="house__card-info__text"><span><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.8125 6.1875C4.14583 6.5 4.54167 6.65625 5 6.65625C5.45833 6.65625 5.84375 6.5 6.15625 6.1875C6.48958 5.85417 6.65625 5.45833 6.65625 5C6.65625 4.54167 6.48958 4.15625 6.15625 3.84375C5.84375 3.51042 5.45833 3.34375 5 3.34375C4.54167 3.34375 4.14583 3.51042 3.8125 3.84375C3.5 4.15625 3.34375 4.54167 3.34375 5C3.34375 5.45833 3.5 5.85417 3.8125 6.1875ZM1.6875 1.71875C2.60417 0.802083 3.70833 0.34375 5 0.34375C6.29167 0.34375 7.38542 0.802083 8.28125 1.71875C9.19792 2.61458 9.65625 3.70833 9.65625 5C9.65625 5.64583 9.48958 6.38542 9.15625 7.21875C8.84375 8.05208 8.45833 8.83333 8 9.5625C7.54167 10.2917 7.08333 10.9792 6.625 11.625C6.1875 12.25 5.8125 12.75 5.5 13.125L5 13.6562C4.875 13.5104 4.70833 13.3229 4.5 13.0938C4.29167 12.8438 3.91667 12.3646 3.375 11.6562C2.83333 10.9271 2.35417 10.2292 1.9375 9.5625C1.54167 8.875 1.17708 8.10417 0.84375 7.25C0.510417 6.39583 0.34375 5.64583 0.34375 5C0.34375 3.70833 0.791667 2.61458 1.6875 1.71875Z" fill="#65665C"/>
</svg>
</span>2263 Southlea, Los Angeles</p>

                          <div className="house__card-info__place">
                              <p className="house__card-info__place-info"><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3438 7.65625H13.6562V11.6562C13.6562 12.0104 13.5208 12.3229 13.25 12.5938C13 12.8646 12.6979 13 12.3438 13C12.3438 13.1875 12.2708 13.3438 12.125 13.4688C12 13.5938 11.8438 13.6562 11.6562 13.6562H2.34375C2.15625 13.6562 1.98958 13.5938 1.84375 13.4688C1.71875 13.3438 1.65625 13.1875 1.65625 13C1.30208 13 0.989583 12.8646 0.71875 12.5938C0.46875 12.3229 0.34375 12.0104 0.34375 11.6562V7.65625H2.34375V7.15625C2.34375 6.76042 2.48958 6.41667 2.78125 6.125C3.09375 5.8125 3.44792 5.65625 3.84375 5.65625C4.26042 5.65625 4.63542 5.82292 4.96875 6.15625L5.875 7.1875C6 7.33333 6.1875 7.48958 6.4375 7.65625H11V2.21875C11 2.07292 10.9479 1.94792 10.8438 1.84375C10.7396 1.71875 10.6042 1.65625 10.4375 1.65625C10.2917 1.65625 10.1667 1.70833 10.0625 1.8125L9.21875 2.65625C9.26042 2.82292 9.28125 2.9375 9.28125 3C9.28125 3.22917 9.20833 3.46875 9.0625 3.71875L7.21875 1.875C7.46875 1.72917 7.70833 1.65625 7.9375 1.65625C8.04167 1.65625 8.15625 1.67708 8.28125 1.71875L9.125 0.875C9.47917 0.520833 9.91667 0.34375 10.4375 0.34375C10.9583 0.34375 11.4062 0.53125 11.7812 0.90625C12.1562 1.26042 12.3438 1.69792 12.3438 2.21875V7.65625ZM2.71875 4.625C2.46875 4.35417 2.34375 4.03125 2.34375 3.65625C2.34375 3.28125 2.46875 2.96875 2.71875 2.71875C2.96875 2.46875 3.28125 2.34375 3.65625 2.34375C4.03125 2.34375 4.34375 2.46875 4.59375 2.71875C4.86458 2.96875 5 3.28125 5 3.65625C5 4.03125 4.86458 4.35417 4.59375 4.625C4.34375 4.875 4.03125 5 3.65625 5C3.28125 5 2.96875 4.875 2.71875 4.625Z" fill="#65665C"/>
</svg>
</span>2</p>
                              <p className="house__card-info__place-info"><span><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4.1875V2.34375C13 1.96875 12.9062 1.63542 12.7188 1.34375C12.5521 1.03125 12.3125 0.791667 12 0.625C11.7083 0.4375 11.375 0.34375 11 0.34375H8.34375C8.07292 0.34375 7.82292 0.395833 7.59375 0.5C7.36458 0.583333 7.16667 0.697917 7 0.84375C6.83333 0.697917 6.63542 0.583333 6.40625 0.5C6.17708 0.395833 5.92708 0.34375 5.65625 0.34375H3C2.625 0.34375 2.28125 0.4375 1.96875 0.625C1.67708 0.791667 1.4375 1.03125 1.25 1.34375C1.08333 1.63542 1 1.96875 1 2.34375V4.1875C0.791667 4.375 0.625 4.59375 0.5 4.84375C0.395833 5.09375 0.34375 5.36458 0.34375 5.65625V9.65625H1.65625V8.34375H12.3438V9.65625H13.6562V5.65625C13.6562 5.36458 13.5938 5.09375 13.4688 4.84375C13.3646 4.59375 13.2083 4.375 13 4.1875ZM8.34375 1.65625H11C11.1875 1.65625 11.3438 1.72917 11.4688 1.875C11.5938 2 11.6562 2.15625 11.6562 2.34375V3.65625H7.65625V2.34375C7.65625 2.15625 7.71875 2 7.84375 1.875C7.98958 1.72917 8.15625 1.65625 8.34375 1.65625ZM2.34375 2.34375C2.34375 2.15625 2.40625 2 2.53125 1.875C2.65625 1.72917 2.8125 1.65625 3 1.65625H5.65625C5.84375 1.65625 6 1.72917 6.125 1.875C6.27083 2 6.34375 2.15625 6.34375 2.34375V3.65625H2.34375V2.34375ZM1.65625 7V5.65625C1.65625 5.48958 1.71875 5.34375 1.84375 5.21875C1.98958 5.07292 2.15625 5 2.34375 5H11.6562C11.8438 5 12 5.07292 12.125 5.21875C12.2708 5.34375 12.3438 5.48958 12.3438 5.65625V7H1.65625Z" fill="#65665C"/>
</svg>
</span>3</p>
                              <p className="house__card-info__place-info"><span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.65625 9.34375H6.5L2.65625 5.5V9.34375ZM9.78125 9.78125L11.3438 11.3438H2C1.64583 11.3438 1.33333 11.2083 1.0625 10.9375C0.791667 10.6667 0.65625 10.3542 0.65625 10V0.65625L2.21875 2.21875L1.53125 2.9375L2 3.40625L2.6875 2.6875L4 4L3.28125 4.6875L3.75 5.1875L4.46875 4.46875L5.78125 5.78125L5.0625 6.46875L5.53125 6.9375L6.25 6.25L7.53125 7.53125L6.8125 8.25L7.3125 8.71875L8 8L9.3125 9.3125L8.59375 10L9.0625 10.4688L9.78125 9.78125Z" fill="#65665C"/>
</svg>
</span>1400 sqft</p>
                          </div>
                      </div>


                  </div>
                  <div className="house__card">
                      <img className="house__card-img" src={Item5} alt=""/>

                      <div className="house__card-info">
                          <h2 className="house__card-info__title">Studio in Las Vegas</h2>
                          <h3 className="house__card-info__price">$ 820,000.00 USD</h3>
                          <p className="house__card-info__text"><span><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.8125 6.1875C4.14583 6.5 4.54167 6.65625 5 6.65625C5.45833 6.65625 5.84375 6.5 6.15625 6.1875C6.48958 5.85417 6.65625 5.45833 6.65625 5C6.65625 4.54167 6.48958 4.15625 6.15625 3.84375C5.84375 3.51042 5.45833 3.34375 5 3.34375C4.54167 3.34375 4.14583 3.51042 3.8125 3.84375C3.5 4.15625 3.34375 4.54167 3.34375 5C3.34375 5.45833 3.5 5.85417 3.8125 6.1875ZM1.6875 1.71875C2.60417 0.802083 3.70833 0.34375 5 0.34375C6.29167 0.34375 7.38542 0.802083 8.28125 1.71875C9.19792 2.61458 9.65625 3.70833 9.65625 5C9.65625 5.64583 9.48958 6.38542 9.15625 7.21875C8.84375 8.05208 8.45833 8.83333 8 9.5625C7.54167 10.2917 7.08333 10.9792 6.625 11.625C6.1875 12.25 5.8125 12.75 5.5 13.125L5 13.6562C4.875 13.5104 4.70833 13.3229 4.5 13.0938C4.29167 12.8438 3.91667 12.3646 3.375 11.6562C2.83333 10.9271 2.35417 10.2292 1.9375 9.5625C1.54167 8.875 1.17708 8.10417 0.84375 7.25C0.510417 6.39583 0.34375 5.64583 0.34375 5C0.34375 3.70833 0.791667 2.61458 1.6875 1.71875Z" fill="#65665C"/>
</svg>
</span>2569 Halls Corner, Las Vegas</p>

                          <div className="house__card-info__place">
                              <p className="house__card-info__place-info"><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3438 7.65625H13.6562V11.6562C13.6562 12.0104 13.5208 12.3229 13.25 12.5938C13 12.8646 12.6979 13 12.3438 13C12.3438 13.1875 12.2708 13.3438 12.125 13.4688C12 13.5938 11.8438 13.6562 11.6562 13.6562H2.34375C2.15625 13.6562 1.98958 13.5938 1.84375 13.4688C1.71875 13.3438 1.65625 13.1875 1.65625 13C1.30208 13 0.989583 12.8646 0.71875 12.5938C0.46875 12.3229 0.34375 12.0104 0.34375 11.6562V7.65625H2.34375V7.15625C2.34375 6.76042 2.48958 6.41667 2.78125 6.125C3.09375 5.8125 3.44792 5.65625 3.84375 5.65625C4.26042 5.65625 4.63542 5.82292 4.96875 6.15625L5.875 7.1875C6 7.33333 6.1875 7.48958 6.4375 7.65625H11V2.21875C11 2.07292 10.9479 1.94792 10.8438 1.84375C10.7396 1.71875 10.6042 1.65625 10.4375 1.65625C10.2917 1.65625 10.1667 1.70833 10.0625 1.8125L9.21875 2.65625C9.26042 2.82292 9.28125 2.9375 9.28125 3C9.28125 3.22917 9.20833 3.46875 9.0625 3.71875L7.21875 1.875C7.46875 1.72917 7.70833 1.65625 7.9375 1.65625C8.04167 1.65625 8.15625 1.67708 8.28125 1.71875L9.125 0.875C9.47917 0.520833 9.91667 0.34375 10.4375 0.34375C10.9583 0.34375 11.4062 0.53125 11.7812 0.90625C12.1562 1.26042 12.3438 1.69792 12.3438 2.21875V7.65625ZM2.71875 4.625C2.46875 4.35417 2.34375 4.03125 2.34375 3.65625C2.34375 3.28125 2.46875 2.96875 2.71875 2.71875C2.96875 2.46875 3.28125 2.34375 3.65625 2.34375C4.03125 2.34375 4.34375 2.46875 4.59375 2.71875C4.86458 2.96875 5 3.28125 5 3.65625C5 4.03125 4.86458 4.35417 4.59375 4.625C4.34375 4.875 4.03125 5 3.65625 5C3.28125 5 2.96875 4.875 2.71875 4.625Z" fill="#65665C"/>
</svg>
</span>2</p>
                              <p className="house__card-info__place-info"><span><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4.1875V2.34375C13 1.96875 12.9062 1.63542 12.7188 1.34375C12.5521 1.03125 12.3125 0.791667 12 0.625C11.7083 0.4375 11.375 0.34375 11 0.34375H8.34375C8.07292 0.34375 7.82292 0.395833 7.59375 0.5C7.36458 0.583333 7.16667 0.697917 7 0.84375C6.83333 0.697917 6.63542 0.583333 6.40625 0.5C6.17708 0.395833 5.92708 0.34375 5.65625 0.34375H3C2.625 0.34375 2.28125 0.4375 1.96875 0.625C1.67708 0.791667 1.4375 1.03125 1.25 1.34375C1.08333 1.63542 1 1.96875 1 2.34375V4.1875C0.791667 4.375 0.625 4.59375 0.5 4.84375C0.395833 5.09375 0.34375 5.36458 0.34375 5.65625V9.65625H1.65625V8.34375H12.3438V9.65625H13.6562V5.65625C13.6562 5.36458 13.5938 5.09375 13.4688 4.84375C13.3646 4.59375 13.2083 4.375 13 4.1875ZM8.34375 1.65625H11C11.1875 1.65625 11.3438 1.72917 11.4688 1.875C11.5938 2 11.6562 2.15625 11.6562 2.34375V3.65625H7.65625V2.34375C7.65625 2.15625 7.71875 2 7.84375 1.875C7.98958 1.72917 8.15625 1.65625 8.34375 1.65625ZM2.34375 2.34375C2.34375 2.15625 2.40625 2 2.53125 1.875C2.65625 1.72917 2.8125 1.65625 3 1.65625H5.65625C5.84375 1.65625 6 1.72917 6.125 1.875C6.27083 2 6.34375 2.15625 6.34375 2.34375V3.65625H2.34375V2.34375ZM1.65625 7V5.65625C1.65625 5.48958 1.71875 5.34375 1.84375 5.21875C1.98958 5.07292 2.15625 5 2.34375 5H11.6562C11.8438 5 12 5.07292 12.125 5.21875C12.2708 5.34375 12.3438 5.48958 12.3438 5.65625V7H1.65625Z" fill="#65665C"/>
</svg>
</span>3</p>
                              <p className="house__card-info__place-info"><span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.65625 9.34375H6.5L2.65625 5.5V9.34375ZM9.78125 9.78125L11.3438 11.3438H2C1.64583 11.3438 1.33333 11.2083 1.0625 10.9375C0.791667 10.6667 0.65625 10.3542 0.65625 10V0.65625L2.21875 2.21875L1.53125 2.9375L2 3.40625L2.6875 2.6875L4 4L3.28125 4.6875L3.75 5.1875L4.46875 4.46875L5.78125 5.78125L5.0625 6.46875L5.53125 6.9375L6.25 6.25L7.53125 7.53125L6.8125 8.25L7.3125 8.71875L8 8L9.3125 9.3125L8.59375 10L9.0625 10.4688L9.78125 9.78125Z" fill="#65665C"/>
</svg>
</span>2400 sqft</p>
                          </div>
                      </div>


                  </div>
                  <div className="house__card">
                      <img className="house__card-img" src={Item6} alt=""/>

                      <div className="house__card-info">
                          <h2 className="house__card-info__title">San Diego story</h2>
                          <h3 className="house__card-info__price">$ 3,700.00 USD</h3>
                          <p className="house__card-info__text"><span><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.8125 6.1875C4.14583 6.5 4.54167 6.65625 5 6.65625C5.45833 6.65625 5.84375 6.5 6.15625 6.1875C6.48958 5.85417 6.65625 5.45833 6.65625 5C6.65625 4.54167 6.48958 4.15625 6.15625 3.84375C5.84375 3.51042 5.45833 3.34375 5 3.34375C4.54167 3.34375 4.14583 3.51042 3.8125 3.84375C3.5 4.15625 3.34375 4.54167 3.34375 5C3.34375 5.45833 3.5 5.85417 3.8125 6.1875ZM1.6875 1.71875C2.60417 0.802083 3.70833 0.34375 5 0.34375C6.29167 0.34375 7.38542 0.802083 8.28125 1.71875C9.19792 2.61458 9.65625 3.70833 9.65625 5C9.65625 5.64583 9.48958 6.38542 9.15625 7.21875C8.84375 8.05208 8.45833 8.83333 8 9.5625C7.54167 10.2917 7.08333 10.9792 6.625 11.625C6.1875 12.25 5.8125 12.75 5.5 13.125L5 13.6562C4.875 13.5104 4.70833 13.3229 4.5 13.0938C4.29167 12.8438 3.91667 12.3646 3.375 11.6562C2.83333 10.9271 2.35417 10.2292 1.9375 9.5625C1.54167 8.875 1.17708 8.10417 0.84375 7.25C0.510417 6.39583 0.34375 5.64583 0.34375 5C0.34375 3.70833 0.791667 2.61458 1.6875 1.71875Z" fill="#65665C"/>
</svg>
</span>2569 El Segundo, San Diego</p>

                          <div className="house__card-info__place">
                              <p className="house__card-info__place-info"><span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3438 7.65625H13.6562V11.6562C13.6562 12.0104 13.5208 12.3229 13.25 12.5938C13 12.8646 12.6979 13 12.3438 13C12.3438 13.1875 12.2708 13.3438 12.125 13.4688C12 13.5938 11.8438 13.6562 11.6562 13.6562H2.34375C2.15625 13.6562 1.98958 13.5938 1.84375 13.4688C1.71875 13.3438 1.65625 13.1875 1.65625 13C1.30208 13 0.989583 12.8646 0.71875 12.5938C0.46875 12.3229 0.34375 12.0104 0.34375 11.6562V7.65625H2.34375V7.15625C2.34375 6.76042 2.48958 6.41667 2.78125 6.125C3.09375 5.8125 3.44792 5.65625 3.84375 5.65625C4.26042 5.65625 4.63542 5.82292 4.96875 6.15625L5.875 7.1875C6 7.33333 6.1875 7.48958 6.4375 7.65625H11V2.21875C11 2.07292 10.9479 1.94792 10.8438 1.84375C10.7396 1.71875 10.6042 1.65625 10.4375 1.65625C10.2917 1.65625 10.1667 1.70833 10.0625 1.8125L9.21875 2.65625C9.26042 2.82292 9.28125 2.9375 9.28125 3C9.28125 3.22917 9.20833 3.46875 9.0625 3.71875L7.21875 1.875C7.46875 1.72917 7.70833 1.65625 7.9375 1.65625C8.04167 1.65625 8.15625 1.67708 8.28125 1.71875L9.125 0.875C9.47917 0.520833 9.91667 0.34375 10.4375 0.34375C10.9583 0.34375 11.4062 0.53125 11.7812 0.90625C12.1562 1.26042 12.3438 1.69792 12.3438 2.21875V7.65625ZM2.71875 4.625C2.46875 4.35417 2.34375 4.03125 2.34375 3.65625C2.34375 3.28125 2.46875 2.96875 2.71875 2.71875C2.96875 2.46875 3.28125 2.34375 3.65625 2.34375C4.03125 2.34375 4.34375 2.46875 4.59375 2.71875C4.86458 2.96875 5 3.28125 5 3.65625C5 4.03125 4.86458 4.35417 4.59375 4.625C4.34375 4.875 4.03125 5 3.65625 5C3.28125 5 2.96875 4.875 2.71875 4.625Z" fill="#65665C"/>
</svg>
</span>1</p>
                              <p className="house__card-info__place-info"><span><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 4.1875V2.34375C13 1.96875 12.9062 1.63542 12.7188 1.34375C12.5521 1.03125 12.3125 0.791667 12 0.625C11.7083 0.4375 11.375 0.34375 11 0.34375H8.34375C8.07292 0.34375 7.82292 0.395833 7.59375 0.5C7.36458 0.583333 7.16667 0.697917 7 0.84375C6.83333 0.697917 6.63542 0.583333 6.40625 0.5C6.17708 0.395833 5.92708 0.34375 5.65625 0.34375H3C2.625 0.34375 2.28125 0.4375 1.96875 0.625C1.67708 0.791667 1.4375 1.03125 1.25 1.34375C1.08333 1.63542 1 1.96875 1 2.34375V4.1875C0.791667 4.375 0.625 4.59375 0.5 4.84375C0.395833 5.09375 0.34375 5.36458 0.34375 5.65625V9.65625H1.65625V8.34375H12.3438V9.65625H13.6562V5.65625C13.6562 5.36458 13.5938 5.09375 13.4688 4.84375C13.3646 4.59375 13.2083 4.375 13 4.1875ZM8.34375 1.65625H11C11.1875 1.65625 11.3438 1.72917 11.4688 1.875C11.5938 2 11.6562 2.15625 11.6562 2.34375V3.65625H7.65625V2.34375C7.65625 2.15625 7.71875 2 7.84375 1.875C7.98958 1.72917 8.15625 1.65625 8.34375 1.65625ZM2.34375 2.34375C2.34375 2.15625 2.40625 2 2.53125 1.875C2.65625 1.72917 2.8125 1.65625 3 1.65625H5.65625C5.84375 1.65625 6 1.72917 6.125 1.875C6.27083 2 6.34375 2.15625 6.34375 2.34375V3.65625H2.34375V2.34375ZM1.65625 7V5.65625C1.65625 5.48958 1.71875 5.34375 1.84375 5.21875C1.98958 5.07292 2.15625 5 2.34375 5H11.6562C11.8438 5 12 5.07292 12.125 5.21875C12.2708 5.34375 12.3438 5.48958 12.3438 5.65625V7H1.65625Z" fill="#65665C"/>
</svg>
</span>2</p>
                              <p className="house__card-info__place-info"><span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.65625 9.34375H6.5L2.65625 5.5V9.34375ZM9.78125 9.78125L11.3438 11.3438H2C1.64583 11.3438 1.33333 11.2083 1.0625 10.9375C0.791667 10.6667 0.65625 10.3542 0.65625 10V0.65625L2.21875 2.21875L1.53125 2.9375L2 3.40625L2.6875 2.6875L4 4L3.28125 4.6875L3.75 5.1875L4.46875 4.46875L5.78125 5.78125L5.0625 6.46875L5.53125 6.9375L6.25 6.25L7.53125 7.53125L6.8125 8.25L7.3125 8.71875L8 8L9.3125 9.3125L8.59375 10L9.0625 10.4688L9.78125 9.78125Z" fill="#65665C"/>
</svg>
</span>650 sqft</p>
                          </div>
                      </div>


                  </div>
              </div>
          </div>

          <div className="house__btns">
              <button className="house__btns-btn">Explore properties</button>
              <button className="house__btns-btnCon">Contact agent<span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></button>
          </div>

          <img src={Right} alt="" className="house__right"/>
          <img src={Left} alt="" className="house__left"/>
      </section>
  )
};

export default House