import React from 'react'
import classes from "./JumpstartAd.module.css"

const JumpstartAd = () => {
    return (
        <div className={classes["jumpstart-ad-container"]}>
            <div className={classes["jumpstart-ad"]}>
                <h1 className={classes["ad-title"]}>
                    <a href="">
                        <img src="https://photobiz.com/content/images/corporate/photobiz/graphics/misc/Jumpstart_Orange.png" alt="jumpstart" />
                    </a>
                    
                </h1>
                <p className={classes["text-desc"]}>
                    WE KNOW THAT YOUR REAL PASSION ISN'T BUILDING WEBSITES.
                </p>
                <p className={classes.desc}>That's why our team is here to help! If you want a hand building your new website, we will gladly construct it for you with <strong>PhotoBiz Jumpstart</strong>. Just give us a link to your current site or send over your words &amp; images. We'll place your content in one of our expertly designed templates. Jumpstart helps you launch in record speed so you can get back to doing what you love.</p>

                <p className={classes["watch-video"]}>
                    <span className={classes["watch-video-text"]}>Learn More About Jumpstart</span>
                    <span className={classes["img-container"]} >
                        <img src="https://photobiz.com/content/images/corporate/photobiz/graphics/misc/Play_Button.png" alt="video" />
                </span></p>
        </div>
            
        </div>
    )
}

export default JumpstartAd
