import Picture from './1.png'
import Picture2 from './2.png'
import {useState} from "react";


const Best = () => {

    const [tab, setTab] = useState("best");

  return (
      <section className="best">
          <div className="container">
              <div className="best__btns">
                  <button className={`best__btns-btn ${tab === 'best' ? 'active' : ''}`} onClick={() => setTab("best")}>Best</button>
                  <button  className={`best__btns-btn ${tab === 'fast' ? 'active' : ''}`} onClick={() => setTab("fast")}>Fast</button>
              </div>

              {
                  tab === 'best' ?
                      <div className="best__row">
                          <div className="best__left">
                              <button className="best__left-btn">Comfort first</button>
                              <h2 className="best__left-title">The best houses for family comfort</h2>
                              <p className="best__left-text">Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.</p>
                              <div className="best__left-btns">
                                  <button className="best__left-btns__btn">Explore properties</button>
                                  <p className="best__left-btns__text">Contact agent <span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></p>
                              </div>
                          </div>
                          <img src={Picture} alt=""/>
                      </div>
                      :
                      <div className="best__row best__row2">
                          <img src={Picture2} alt=""/>

                          <div className="best__left">
                              <button className="best__left-btn">Quick and easy</button>
                              <h2 className="best__left-title">Fast forward process</h2>
                              <p className="best__left-text">Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi arcu praesent nec felis nisl.</p>
                              <div className="best__left-row">
                                  <div className="best__left-card">
                              <span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#FAE8E1"/>
<path d="M33.3125 26.6875V16C33.3125 15.25 33.0417 14.625 32.5 14.125C32 13.5833 31.3958 13.3125 30.6875 13.3125H12C11.25 13.3125 10.6042 13.5833 10.0625 14.125C9.5625 14.625 9.3125 15.25 9.3125 16V26.6875C9.3125 27.3958 9.5625 28.0208 10.0625 28.5625C10.6042 29.0625 11.25 29.3125 12 29.3125H30.6875C31.3958 29.3125 32 29.0625 32.5 28.5625C33.0417 28.0208 33.3125 27.3958 33.3125 26.6875ZM21.3125 25.3125C20.6042 25.3125 19.9375 25.1458 19.3125 24.8125C18.7292 24.4375 18.25 23.9583 17.875 23.375C17.5 22.75 17.3125 22.0625 17.3125 21.3125C17.3125 20.6042 17.5 19.9583 17.875 19.375C18.25 18.75 18.7292 18.25 19.3125 17.875C19.9375 17.5 20.6042 17.3125 21.3125 17.3125C22.0625 17.3125 22.7292 17.5 23.3125 17.875C23.9375 18.25 24.4167 18.75 24.75 19.375C25.125 19.9583 25.3125 20.6042 25.3125 21.3125C25.3125 22.0625 25.125 22.75 24.75 23.375C24.4167 23.9583 23.9375 24.4375 23.3125 24.8125C22.7292 25.1458 22.0625 25.3125 21.3125 25.3125ZM38.6875 17.3125V32C38.6875 32.75 38.4167 33.3958 37.875 33.9375C37.375 34.4375 36.75 34.6875 36 34.6875H13.3125V32H36V17.3125H38.6875Z" fill="#CF6F49"/>
</svg>
</span>
                                      <h3 className="best__left-card__title">Affordable prices</h3>
                                      <p className="best__left-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                  </div>
                                  <div className="best__left-card">
                              <span><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#FAE8E1"/>
<path d="M25.3125 20H32.6875L25.3125 12.6875V20ZM29.3125 26.6875V24H18.6875V26.6875H29.3125ZM29.3125 32V29.3125H18.6875V32H29.3125ZM26.6875 10.6875L34.6875 18.6875V34.6875C34.6875 35.3958 34.4167 36.0208 33.875 36.5625C33.3333 37.0625 32.7083 37.3125 32 37.3125H16C15.2917 37.3125 14.6667 37.0625 14.125 36.5625C13.5833 36.0208 13.3125 35.3958 13.3125 34.6875L13.375 13.3125C13.375 12.6042 13.625 12 14.125 11.5C14.6667 10.9583 15.2917 10.6875 16 10.6875H26.6875Z" fill="#CF6F49"/>
</svg>

</span>
                                      <h3 className="best__left-card__title">Less paper work</h3>
                                      <p className="best__left-card__text">Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi.</p>
                                  </div>
                              </div>

                              <div className="best__left-btns">
                                  <button className="best__left-btns__btn">Explore properties</button>
                                  <p className="best__left-btns__text">Contact agent <span><svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.65625 0L5.65625 4L1.65625 8L0.71875 7.0625L3.78125 4L0.71875 0.9375L1.65625 0Z" fill="#2A2C1F"/>
</svg>
</span></p>
                              </div>
                          </div>

                      </div>
              }
              
          </div>
      </section>
  )
};

export default Best