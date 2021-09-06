import React from 'react'
import classes from "./Card.module.css"

const Card = ({children}) => {
    return (
        <div className={classes["card-container"]}>
            <div className={classes.card}>
                {children}
            </div>
        </div>
    )
}

export default Card
