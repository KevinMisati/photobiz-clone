import React from 'react'
import classes from "./WebsiteFooter.module.css"

const WebsiteFooter = () => {
    return (
        <div className={classes["form-container"]}>
            <div className={classes["form"]}>
                <h1 className={classes.title}>YOUR CART</h1>
                <form className={classes["payment-form-container"]}>
                    <div className={classes["left-side"]}>
                        <div className={`${classes.package} ${classes["input-control"]}`}>
                            <h2>Website Package</h2>
                            <p>$25 x 12 months</p>
                        </div>
                        <div className={`${classes.promo} ${classes["input-control"]}`}>
                            <p>Enter Promo Code</p>
                            <p>Enter Gift card</p>
                        </div>
                        <div className={`${classes.price} ${classes["input-control"]}`}>
                            <label htmlFor="anually">
                                <input type="radio" name="anual-month" id="anually" />
                                <span>Pay Annually: $25 x 12 months</span>
                            </label>
                            <label htmlFor="monthly">
                                <input type="radio" name="anual-month" id="monthly" />
                                <span>Pay Annually: $25 x 12 months</span>
                            </label>
                            
                        </div>
                        <div className={`${classes.total} ${classes["input-control"]}`}>
                            <p>Your total</p>
                            <p>$<span>$300</span></p>
                        </div>
                        <div className={`${classes.next} ${classes["input-control"]}`}>
                            <p>Next annual charge $300</p>
                            <p>(Sep 2, 2022)</p>
                        </div>
                    </div>
                    <div className={classes["right-side"]}>
                        
                            <div className={classes["input-control"]}>
                                <label htmlFor="email">
                                    <span>Your Email</span>
                                    <input id="email" type="email"/>
                                </label>
                            </div>
                            <div className={classes["input-control"]}>
                                <label htmlFor="email">
                                    <span>Name On Credit Card </span>
                                    <input id="email" type="email" />
                                </label>
                            </div>
                            <div className={classes["input-control"]}>
                                <label htmlFor="email">
                                    <span>Name On Credit Card</span>
                                    <input id="email" type="email" />
                                </label>
                            </div>
                            <div className={classes["input-control"]}>
                                <label htmlFor="email">
                                    <span>Credit Card Number</span>
                                    <input id="email" type="email" />
                                </label>
                            </div>
                            <div className={classes["input-control"]}>
                                <label htmlFor="email">
                                    <span>Security Code CVV</span>
                                    <input id="email" type="email" />
                                </label>
                            </div>
                            <div className={classes["input-control"]}>
                                <label htmlFor="email">
                                    <span>Expiration Date</span>
                                    <input id="email" type="email" />
                                </label>
                            </div>
                            <div className={`${classes.terms} ${classes["input-control"]}`}>
                                <label htmlFor="accept-terms">
                                <input type="checkbox" name="" id="terms" />
                                <span>I have read and agree to the Terms of Use and Privacy Policy.</span>
                                </label>
                    
                        </div>
                        <div className={`${classes.terms} ${classes["input-control"]}`}>
                           
                            <label htmlFor="mailing-list">
                                <input type="checkbox" name="" id="mailing-list" />
                                <span>I want to receive important updates on features, industry news, and cool new product info.</span>
                            </label>
                        </div>
                            <div className={`${classes["input-control"]} ${classes.recaptcha}`}>
                            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                            </div>
                            <div className={`${classes["input-control"]} ${classes["btn-container"]} `}>
                                <button type="submit">Submit</button>
                            </div>
                        
                        
                    </div>
                </form>
            </div>
        </div>
        
       
    )
}

export default WebsiteFooter
