import Logo from './Logo.svg'
import {useState} from "react";

const Header = () => {
    const[open, setOpen] = useState(true);

    return (
        <header className={`header ${open ? 'active' : ''}`}>
            <div className="header__top" onClick={ () => {
                if (open){
                    setOpen((prev) => !prev)
                }
            }}>
                <p className="header__top-text">Get your dream house in a week.</p>

                <span onClick={() => {
                    setOpen((prev) => !prev)
                }} className="header__top-cancel"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8353 14.3639L14.3638 14.8353C14.1035 15.0956 13.6814 15.0956 13.421 14.8353L7.9999 9.4141L2.5787 14.8352C2.3184 15.0956 1.89626 15.0956 1.63591 14.8352L1.1645 14.3638C0.904151 14.1035 0.904151 13.6814 1.1645 13.421L6.5857 7.9999L1.1645 2.5787C0.904151 2.3184 0.904151 1.89626 1.1645 1.63591L1.6359 1.16451C1.89625 0.904159 2.3184 0.904159 2.5787 1.16451L7.9999 6.5857L13.421 1.1645C13.6814 0.90415 14.1035 0.90415 14.3638 1.1645L14.8353 1.6359C15.0956 1.89625 15.0956 2.3184 14.8353 2.5787L9.4141 7.9999L14.8353 13.421C15.0956 13.6814 15.0956 14.1035 14.8353 14.3639Z" fill="white"/>
</svg>
</span>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <nav className="header__nav">
                        <img src={Logo} alt=""/>

                        <div className="header__bottom-right">
                            <a href="" className="header__bottom-right__link">Home</a>
                            <select className="header__bottom-right__select">
                                <option value="">Properties</option>
                                <option value="">Properties</option>
                                <option value="">Properties</option>
                            </select>
                            <a href="" className="header__bottom-right__link">About</a>
                            <a href="" className="header__bottom-right__link">Contact</a>
                            <form className="header__bottom-right__form">
                                <label className="header__bottom-right__label">
                                    <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.27344 8.58594C4.0026 9.3151 4.88802 9.67969 5.92969 9.67969C6.97135 9.67969 7.85677 9.3151 8.58594 8.58594C9.3151 7.85677 9.67969 6.97135 9.67969 5.92969C9.67969 4.88802 9.3151 4.0026 8.58594 3.27344C7.85677 2.54427 6.97135 2.17969 5.92969 2.17969C4.88802 2.17969 4.0026 2.54427 3.27344 3.27344C2.54427 4.0026 2.17969 4.88802 2.17969 5.92969C2.17969 6.97135 2.54427 7.85677 3.27344 8.58594ZM10.9297 9.67969L15.0703 13.8203L13.8203 15.0703L9.67969 10.9297V10.2656L9.44531 10.0312C8.45573 10.8906 7.28385 11.3203 5.92969 11.3203C4.41927 11.3203 3.13021 10.7995 2.0625 9.75781C1.02083 8.71615 0.5 7.4401 0.5 5.92969C0.5 4.41927 1.02083 3.14323 2.0625 2.10156C3.13021 1.03385 4.41927 0.5 5.92969 0.5C7.4401 0.5 8.71615 1.03385 9.75781 2.10156C10.7995 3.14323 11.3203 4.41927 11.3203 5.92969C11.3203 6.47656 11.1901 7.10156 10.9297 7.80469C10.6693 8.48177 10.3698 9.02865 10.0312 9.44531L10.2656 9.67969H10.9297Z" fill="#2A2C1F"/>
</svg>
</span>
                                    <input placeholder="Search" type="search" className="header__bottom-right__input"/>
                                </label>
                            </form>
                            <div className="header__bottom-right__btns">
                                <button className="header__bottom-right__btn btn"><span><svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4H10.3203C10.3203 3.375 10.1641 2.8151 9.85156 2.32031C9.5651 1.82552 9.17448 1.4349 8.67969 1.14844C8.1849 0.835938 7.625 0.679688 7 0.679688C6.375 0.679688 5.8151 0.835938 5.32031 1.14844C4.82552 1.4349 4.42188 1.82552 4.10938 2.32031C3.82292 2.8151 3.67969 3.375 3.67969 4H2C1.53125 4 1.1276 4.16927 0.789062 4.50781C0.476562 4.82031 0.320312 5.21094 0.320312 5.67969V15.6797C0.320312 16.1224 0.476562 16.513 0.789062 16.8516C1.1276 17.1641 1.53125 17.3203 2 17.3203H12C12.4688 17.3203 12.8594 17.1641 13.1719 16.8516C13.5104 16.513 13.6797 16.1224 13.6797 15.6797V5.67969C13.6797 5.21094 13.5104 4.82031 13.1719 4.50781C12.8594 4.16927 12.4688 4 12 4ZM5.32031 7.32031C5.32031 7.55469 5.24219 7.76302 5.08594 7.94531C4.92969 8.10156 4.73438 8.17969 4.5 8.17969C4.26562 8.17969 4.07031 8.10156 3.91406 7.94531C3.75781 7.76302 3.67969 7.55469 3.67969 7.32031V5.67969H5.32031V7.32031ZM7 2.32031C7.46875 2.32031 7.85938 2.48958 8.17188 2.82812C8.51042 3.14062 8.67969 3.53125 8.67969 4H5.32031C5.32031 3.53125 5.47656 3.14062 5.78906 2.82812C6.1276 2.48958 6.53125 2.32031 7 2.32031ZM10.3203 7.32031C10.3203 7.55469 10.2422 7.76302 10.0859 7.94531C9.92969 8.10156 9.73438 8.17969 9.5 8.17969C9.26562 8.17969 9.07031 8.10156 8.91406 7.94531C8.75781 7.76302 8.67969 7.55469 8.67969 7.32031V5.67969H10.3203V7.32031Z" fill="#2A2C1F"/>
</svg>
</span>Cart</button>
                                <button className="header__bottom-right__btn2 btn">Find a property</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header