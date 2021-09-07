import React from 'react'
import classes from "./Price.module.css"
import { NavLink, useRouteMatch} from "react-router-dom"


const Price = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className={classes["prices-container"]}>
                <div className={classes["price-quote-container"]}>
                    <div className={classes["price-quote"]}>
                        <div>
                            <span className={classes["currency-sign"]}>$</span>
                            <span className={classes["monthly-price"]}>25/</span>
                        </div>
                        <div>
                            <span className={classes["price-desc"]}>month billed annually or <br/>$29 month-to-month</span>
                        </div>
                    </div>
                    <div className={classes["btn-container"]}>
                        <button>Buy now</button>
                    </div>
                </div>
                <div className={classes["includes-title"]}>
                    <h1>Your <span>Website</span> Includes:</h1>
                </div>
        </div>
    )
}

export default Price
