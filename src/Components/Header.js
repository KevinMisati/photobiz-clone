import React from 'react'
import classes from "./Header.module.css"
import {Link,NavLink} from  "react-router-dom"

const Header = () => {
    const moveScrollBarToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className={classes["header-container"]} >
            <div className={classes.header}>
                <div className={classes["logo-container"]}>
                    <Link onClick={moveScrollBarToTop} to="/">
                    <img src="https://photobiz.com/content/corporate/photobiz/images/photobiz_minimal_logo.png" alt="logo"/>
                    </Link>
                </div>
                <ul className={classes["nav-items"]}>
                    <li>
                        <NavLink onClick={moveScrollBarToTop} activeClassName={classes.selected} to="/websites"> websites </NavLink>
                    </li>
                   <li>proofing</li>
                   <li>jumpstart</li>
                    <li>custom site</li>
                    <li>pricing</li>
                </ul>
                <div className={classes["account"]}>
                    <a className={classes.btn} href="#">
                        <span><i className={"fas fa-phone"}></i></span>
                        <span className={classes.phone}>123456789123</span>
                        
                    </a>
                    <a className={`${classes.btn} ${classes["signup-btn"]}`} href="#">
                        sign up
                    </a>
                    <a className={`${classes.btn} ${classes["login-btn"]}`} href="#">
                        login
                    </a>
                </div>
            </div>
                
        </div>
            
      
    )
}

export default Header
