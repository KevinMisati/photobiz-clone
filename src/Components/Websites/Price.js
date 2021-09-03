import React from 'react'
import classes from "./Price.module.css"
import { NavLink, useRouteMatch} from "react-router-dom"


const Price = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className={classes["prices-container"]}>
            <div className={classes.prices}>
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
                <main>
            <div className={classes.icons}>
                        <NavLink exact={true} to={`${url}`} className={classes.icon} activeClassName={classes.selected}>
                        
                                <img src="https://img.icons8.com/wired/64/000000/template.png" />
                                <span>templates</span>
                            </NavLink>
                    
                
                        <NavLink to={`${url}/hosting`} className={classes.icon} activeClassName={classes.selected}>
                            
                            

                                <img src="https://img.icons8.com/ios/50/000000/load-balancer.png" />
                                <span>hosting {"&"} ssl</span>


                        
                            
                                
                    
                    
                        </NavLink>
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
               

            </div>
            </main>
            </div>
        </div>
    )
}

export default Price
