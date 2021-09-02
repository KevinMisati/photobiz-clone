import React from 'react'
import classes from "./Websites.module.css"
import Prices from "../Components/Websites/Price"
import Samples from "../Components/Websites/Samples"
import JumpStartAd from "../Components/Websites/JumpstartAd"
import FinishingTouches from "../Components/Websites/FinishingTouch"
import WebsiteFooter from "../Components/Websites/WebsiteFooter.js"

import Description from '../Components/Websites/Description'
const Websites = () => {
    return (
        <div className={classes["websites-container"]}>
            <div className={classes.websites}>
                <Prices />
                <Description />
                <Samples />
                <JumpStartAd />
                <FinishingTouches />
                <WebsiteFooter />
            </div>
           
        </div>
    )
}

export default Websites
