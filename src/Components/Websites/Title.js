import React from 'react'
import classes from "./Title.module.css"

const Title = ({heading1,heading2}) => {
    return (
        <div className={classes.title}>
            <h1>{heading1}</h1>
            <h3>{heading2}</h3>
        </div>
    )
}

export default Title



