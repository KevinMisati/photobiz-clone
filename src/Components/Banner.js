import React from 'react'
import classes from "./Banner.module.css"
const Banner = () => {
    return (
        <div className={classes["banner-container"]}>
            <div className={classes.banner}>
                <div className={classes["banner-text-container"]}>
                    <div className={classes["banner-text"]}>
                        <h1>The website platform for all phographers</h1>
                        <span>Book, share, and sell more than ever.
                            <br />
                                Starting at $25/month annually
                                <br /><br /><br />
                            <a href="#" className={`${classes.btn} `}>Learn More</a>
                            <a href="#" className={`${classes.btn} ${classes["started-btn"]} `}>Get Started</a>
                            </span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
