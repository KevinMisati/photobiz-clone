import React from 'react'
import Card from "./Card"
import classes from "./CardWithIcons.module.css"

const CardWithIcons = ({children}) => {
    return (
        <Card>
            <div className={classes.icons}>
                {children}
                </div>
            
        </Card>
    )
}

export default CardWithIcons
