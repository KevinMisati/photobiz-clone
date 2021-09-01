import React,{useState} from 'react'
import classes from "./MobileHeader.module.css"
const MobileHeader = () => {
    const [navIsOpen, setNavIsOpen] = useState(false)
    const openNav = () => {
        setNavIsOpen(true)
        document.body.classList.toggle('lock-scroll');
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }
    const closeNav = () => {
        setNavIsOpen(false)
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
    }
    return (
        <div className={classes["mobile-header-container"]}>
            <div className={classes["mobile-header"]}>
               
                    <div className={classes["logo-container"]}>
                        <img src="https://photobiz.com/content/corporate/photobiz/images/photobiz_minimal_logo.png" alt="logo" />
                    </div>
                  
                <div onClick={openNav} className={classes.hurmbuger}>
                    <div></div>
                    <div ></div>
                    <div></div>
                </div>
            </div>
            <div data-aria-expanded="true" aria-hidden="true" className={`${classes["nav-open-container"]} ${navIsOpen ? "" : classes["nav-toggle"] }`}>
                <div className={classes["nav-open"]}>
                    <header >
                        <div className={classes["logo-container"]}>
                            <img src="https://photobiz.com/content/corporate/photobiz/images/photobiz_minimal_logo.png" alt="logo" />
                        </div>
                        <div onClick={closeNav} className={` ${classes.hurmbuger} ${classes["hurmbuger-close"]}`}>
                            <div className={classes.line1}></div>
                            <div className={classes.line2}></div>
                            <div className={classes.line3}></div>
                        </div>
                    </header>
                    <div className={classes["btn-container"]}>
                        <button href="#" className={`${classes.btn} `}>Learn More</button>
                        <button href="#" className={`${classes.btn} ${classes["started-btn"]} `}>Get Started</button>
                    </div>
                    <div className={classes["account"]}>
                        <a className={classes["phone-container"]} href="#">
                            <span><i className={"fas fa-phone"}></i></span>
                            <span className={classes.phone}>123456789123</span>
                            <span className={classes.separator}>|</span>
                            <span>M -f 9am to 8pm </span>
                        </a>
                       
                    </div>
                    <div className={classes["nav-items-container"]}>
                        <ul>
                            <li>websites</li>
                            <li>proofing</li>
                            <li>jumpstart</li>
                            <li>pricing</li>
                            <li>contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader
