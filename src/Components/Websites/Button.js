import React from 'react'
import classes from "./Button.module.css"

const Button = ({text}) => {
    return (
        <div className={classes["btn-container"]}>
            <button>{text}</button>
        </div>
    )
}

export default Button


