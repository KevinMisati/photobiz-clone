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
                        <NavLink exact={true} to={`${url}/blog`} className= {classes.icon} activeClassName={classes.selected}>
                                <img src="https://img.icons8.com/ios/50/000000/blog.png" />
                                <span>blog</span>
                        </NavLink>
                        <NavLink exact={true} to={`${url}/seo`} className= {classes.icon} activeClassName={classes.selected}>

                            <img src="https://img.icons8.com/ios-filled/50/000000/performance-smartphone.png" />
                            <span>seo</span>


                        </NavLink>
                        <NavLink exact={true} to={`${url}/proofing`} className= {classes.icon} activeClassName={classes.selected}>
                           
                                <img src="https://img.icons8.com/ios/50/000000/image.png" />
                                <span>proofing</span>
                   
                   
                        </NavLink>
               <NavLink exact={true} to={`${url}/ecommerce`} className= {classes.icon} activeClassName={classes.selected}>
                           
                                <img src="https://img.icons8.com/dotty/80/000000/shopping-cart.png" />
                                <span>ecommerce</span>
                   
                    
                        </NavLink>
                
                    <NavLink exact={true} to={`${url}/forms`} className= {classes.icon} activeClassName={classes.selected}>
                       
                            <img src="https://img.icons8.com/dotty/50/000000/google-forms.png" />
                            <span>forms</span>
                        
                        
                        </NavLink>
                        <NavLink exact={true} to={`${url}/scheduler`} className= {classes.icon} activeClassName={classes.selected}>

                            <img src="https://img.icons8.com/ios/80/000000/view-shedule.png" />
                            <span>scheduler</span>


                        </NavLink>

                        <NavLink exact={true} to={`${url}/marketing`} className= {classes.icon} activeClassName={classes.selected}>
                            <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                            <span>marketing</span>
                           
                               
                   
                   
                        </NavLink>
                        <NavLink exact={true} to={`${url}/support`} className={classes.icon} activeClassName={classes.selected}>
                            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-support-advertising-kiranshastry-lineal-kiranshastry.png" />
                            <span>support</span>
                        </NavLink>
                

            </div>
            </main>
            </div>
        </div>
    )
}

export default Price
