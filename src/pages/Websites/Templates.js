import React from 'react'
import classes from "./Templates.module.css"
import Prices from "../../Components/Websites/Price"
import Samples from "../../Components/Websites/Samples"
import JumpStartAd from "../../Components/Websites/JumpstartAd"
import FinishingTouches from "../../Components/Websites/FinishingTouch"

import Description from '../../Components/Websites/Description'
const Websites = () => {
    return (
        <div className={classes["websites-container"]}>
            <div className={classes.websites}>
               
                <Description />
                <Samples />
                <JumpStartAd />
                <FinishingTouches />
            </div>

        </div>
    )
}

export default Websites
