import React from 'react'
import classes from "./EverythingIcons.module.css"

const EverythingIcons = () => {
    return (
        <div className={classes["icons-container"]}>
            <header>
                <h3>EVERYTHING YOU NEED. TOGETHER IN ONE PLACE.</h3>
            </header>
            <main>
            <div className={classes.icons}>
                <div>
                    <img src="https://img.icons8.com/wired/64/000000/template.png" />
                    <span>templates</span>
                </div>
                <div>
                    <img src="https://img.icons8.com/ios/50/000000/blog.png" />
                    <span>blog</span>
                </div>
                <div>
                    <img src="https://img.icons8.com/ios/50/000000/image.png" />
                    <span>proofing</span>
                </div>
                <div>
                    <img src="https://img.icons8.com/dotty/80/000000/shopping-cart.png" />
                    <span>ecommerce</span>
                </div>
                
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>promotions</span>
               </div>
                
                
                
                <div>
                    <img src="https://img.icons8.com/dotty/50/000000/google-forms.png" />
                    <span>forms</span>
                </div>
                <div>
                    <img src="https://img.icons8.com/ios/80/000000/view-shedule.png" />
                    <span>scheduler</span>
                </div>
                <div>
                    <img src="https://img.icons8.com/ios/50/000000/load-balancer.png" />
                    <span>hosting {"&"} ssl</span>
                </div>

            </div>
            </main>
        </div>
    )
}

export default EverythingIcons
