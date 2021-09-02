import React from 'react'
import classes from "./GetStarted.module.css"

const GetStarted = () => {
    return (
        <div className={classes["get-started-container"]}>
            <div className={classes["get-started"]}>
                <div className={classes.title}>
                    <div>
                        <p>Get started today.</p>
                    </div>
                    <div>
                        <span>60 day money back guarantee</span>
                    </div>
                </div>
                <div className={classes.text}>
                    <p >Built for photographers, PhotoBiz makes it easy to grow your studio online. Build your own website using easy, customizable templates... or let our web designers build it for you! Everything’s included, plus lightspeed web hosting &amp; our legendary 5-star support.
                    <a className={classes["sign-up"]} href="#">Sign Up Now</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default GetStarted
