import React from 'react'
import classes from "./Advantage.module.css"
import Button from "./Button"

const Advantage = ({img,title1,title2,desc,showBtn,btnText,reverseDirection}) => {
    return (
        <div  /* style={{flexDirection:(reverseDirection == true) ? 'row-reverse' : "row"}}  */ className={`${classes.advantage} ${(reverseDirection ==true) ? classes["reverse-direction"] : ""}`}>
            <div className={classes["img-container"]}>
                <img src={img} alt={title1} />
            </div>
            <div className={classes.text}>
                <h3 className={classes.title}>{title1}</h3>
                <h3>{title2}</h3>
                <p>{desc}</p>
                
                {(showBtn == true) && <Button text={btnText} />}
            </div>
        </div>
    )
}

export default Advantage
