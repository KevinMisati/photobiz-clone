import React from 'react'
import classes from "./Ecommerce.module.css"
import Title from "../../Components/Websites/Title"
import Button from "../../Components/Websites/Button"
import Advantage from "../../Components/Websites/Advantage"
import CardWithIcons from "../../Components/Websites/CardWithIcons"
import Card from "../../Components/Websites/Card"
import JumpstartAd from "../../Components/Websites/JumpstartAd"
import FinishingTouch from "../../Components/Websites/FinishingTouch"

const Ecommerce = () => {
    return (
        <div>
            <Title heading1="Full-featured online store"
                heading2="SELL ANYTHING, COMMISSION FREE." />
            
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/store/Hemingway-Store-mockup.png"
                title2="Built-in ecommerce tools"
               
                desc="Set up an online store to sell absolutely anything. Our easy to use ecommerce is fully integrated with your website and offers an enormous suite of options. You can sell as many products and services as you want. We'll help you grow your online business while keeping more money in your own pocket with unlimited, commission free sales."
                showBtn={false}
                btnText="learn more"
                reverseDirection={true}
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
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/store/Ecommerce-Image-1.png"
                title2="Robust ecommerce platform"

                desc="We offer the most robust selling options for photographers. Sell single prints or let clients build their own packages. Offer paid digital downloads in both web and full resolution. Let clients fill a custom album with the images they select from their Proofing event. Or sell products and services of any description. No other photography website offers the depth of selling options that you get from PhotoBiz."
                showBtn={false}
                reverseDirection={true}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/store/Ecommerce-Image-2.png"
                title2="Inventory and sales management"

                desc="Our unified ecommerce solution keeps your books tidy. Sell from your online store or accept in-person payments using your mobile device. Our all-in-one dashboard keeps track of all your sales for you. Inventory levels are automatically updated. And automatic reporting makes accounting effortless."
                showBtn={false}
                btnText="learn more"
                reverseDirection={false}
            />
            <Card>
                <h2>Fulfill orders with your own lab.</h2>
                <h3>PHOTOBIZ DOES NOT OFFER LAB INTEGRATION.</h3>
                <p>More choice is better for everyone. With PhotoBiz, you have the freedom to work with any lab you like. We find that self-fulfillment works best for our photographers because it allows you to keep a firm control on quality and provide unique offerings for clients. Self-fulfillment also enables us to offer a robust, zero commission platform without extra lab fees. Simply sell your work online, then fulfill on your own with the partner you choose.</p>
                <Button
                    text="put money in your pocket"
                />
            </Card>

            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/invoicing/invoicing1.jpg"
                title2="Professional, Branded Invoicing"

                desc="Upload your logo and send invoices to your clients with our online builder. In just a few minutes, you can build and send a professional, branded invoice that makes you look like a pro. Let clients pay online or in-person. Invoicing is FREE with PhotoBiz and syncs with your online records so you know what’s paid and who needs a reminder."
                showBtn={false}
                btnText="learn more"
                reverseDirection={true}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/store/Ecommerce-Image-4c.png"
                title2="Marketing and lead gen"

                desc="Your PhotoBiz website is fully integrated with our entire suite of sales and marketing tools. All of your customer data is automatically stored and sorted in our system so you can market to them later with our free email marketing tools. Get new sales leads using forms and landing pages that are as beautiful as they are functional."
                showBtn={false}
                btnText="learn more"
                reverseDirection={false}
            />

            <Card>
                <h2>Work with the best</h2>
                <p>Your payments are completely secure and process instantly using the online merchant of your choice: Stripe, Square, Paypal, Authorize.net, Itransact, Payflow Pro, or PayJunction.</p>
            </Card>
            <JumpstartAd />
            <FinishingTouch />
        </div>
    )
}

export default Ecommerce
