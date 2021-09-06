import React from 'react'
import classes from "./Forms.module.css"
import Title from "../../Components/Websites/Title"
import Advantage from "../../Components/Websites/Advantage"
import CardWithIcons from "../../Components/Websites/CardWithIcons"

const Promotions = () => {
    return (
        <div>
            <Title heading1="Online forms & digital contracts"
                heading2="PAYMENTS, ORDERS, INQUIRIES & DIGITAL SIGNATURES." />
            
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/forms/Forms_Main_Image.jpg"
                title2="Run your business from anywhere"

                desc="Easy form templates for newsletter sign-ups, booking sessions, contracts, customer surveys, order forms, workshops, and more. Our Drag & drop design makes building forms easy. Embed forms on your site, or share via email and social media. You can take payments through your form with no commission fees. There is no limit on the number of forms you can create, and you can accept up to 500 free submissions/month. (Upgrades available.)"
                showBtn={true}
                btnText="get started"
                reverseDirection={false}
            />
            <CardWithIcons>
                <div className={classes["icon-container"]}>
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>#1 FASTEST <br /> HOSTING</span>
                    </div>
                </div>
                <div className={classes["icon-container"]}>
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>#1 FASTEST <br /> HOSTING</span>
                    </div>
                </div>
                <div className={classes["icon-container"]}>
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>#1 FASTEST <br /> HOSTING</span>
                    </div>
                </div>
            </CardWithIcons>
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/forms/Form_Builder.png"
                title2="Design beautiful forms"

                desc="Our advanced styling options and a drag & drop form builder make it simple to design forms that look and function just the way you want. Choose from a template or craft your own custom design. Change the color, buttons, backgrounds, borders and more to build forms to match your brand.
"
                showBtn={true}
                btnText="view samples"
                reverseDirection={true}
            />
            
            <CardWithIcons>
                <h2>Sell, book, promote, and generate leads</h2>
                <div className={classes["icon-container"]}>
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>#1 FASTEST <br /> HOSTING</span>
                    </div>
                </div>
                <div className={classes["icon-container"]}>
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>#1 FASTEST <br /> HOSTING</span>
                    </div>
                </div>
                <div className={classes["icon-container"]}>
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>#1 FASTEST <br /> HOSTING</span>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>#1 FASTEST <br /> HOSTING</span>
                    </div>
                </div>
                <div className={classes["icon-container"]}>
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>#1 FASTEST <br /> HOSTING</span>
                    </div>
                </div>
                <div className={classes["icon-container"]}>
                    <div>
                        <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                        <span>#1 FASTEST <br /> HOSTING</span>
                    </div>
                </div>
            </CardWithIcons>
            <div className={classes.payment}>
                <Title
                    heading1="Fast, secure payment"
                    heading2="NO COMMISSION FEES — EVER."
                />
                <p style={{maxWidth:"800px",textAlign:"center",margin:"auto"}}>Forms can quickly be set up to accept payments that process instantly, and are safe to use online. We integrate with the most popular online merchants (including Stripe, Square, Paypal, Authorize.net, Itransact, Payflow Pro, and PayJunction). Plus we don't charge any commission fees on the money you earn, which is great for business.</p>
            </div>
            
        </div>
    )
}

export default Promotions
