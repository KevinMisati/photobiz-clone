import React from 'react'
import classes from "./FinishingTouch.module.css"

const FinishingTouch = () => {
    return (
        <div className={classes["finishing-touch-container"]}>
            <h1 >Give Your Site A Finishing Touch </h1>

            <div  className={classes["suggested-products-container"]}>
                <div className={classes.product}>
                    <p>Jumpstart</p>
                    <p>$350</p>
                    <div className={classes["img-container"]}>
                        <img src="https://photobiz.com/content/images/corporate/photobiz/graphics/jumpstart-pause.png" alt=""/>
                    </div>
                    <div>
                        <button>add</button>
                    </div>
                </div>
                <div className={classes.product}>
                    <p>Domain + mailbox</p>
                    <p>$18</p>
                    <div className={classes["img-container"]}>
                        <img src="https://photobiz.com/content/images/corporate/photobiz/graphics/domain_mailbox.jpg" alt="" />
                    </div>
                    <div>
                        <button>add</button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default FinishingTouch
