import React from 'react'
import Title from "../../Components/Websites/Title"
import Card from "../../Components/Websites/Card"
import Advantage from "../../Components/Websites/Advantage"
import Button from "../../Components/Websites/Button"
import classes from "./Support.module.css"

const Support = () => {
    return (
        <div>
            <Title
                heading1="Infinite customer support"
                heading2="EXPERT HELP, ON DEMAND."
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/support/Support_Image_One.jpg"
                title1="Best customer service, ever."
                desc="We know that your real passion isn't building websites. That's why our team is here to help you every step of the way, from developing your brand to building your website and growing your overall marketing strategy. We're not just tech support. We're business coaches, designers and marketing experts who you can lean on anytime you need. Call us every day if you want to! We're here to support you, so you can get back to doing what you love."
                showBtn={false}
                reverseDirection={false}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/support/DELETE_ME_SUPPORT_2.jpg"
                title1="Call, chat, or Facebook us "
                desc="The big difference between us and the other guys? You can call us. In fact, we encourage it! Our toll-free phone number (866.463.7620) is front and center. And you can send us any questions through Facebook, Twitter, or on live chat anytime. Or if you live near our office, just drop in and say hello!"
                showBtn={false}
                btnText="our difference"
                reverseDirection={true}
            />
            <Card>
                <h2>Passionate Support®</h2>

                <p>You get a dedicated team whose only job is to help you. No time limit, no judgment. If you like working with Sarah, you can call her again and again. We'll even call YOU if we find ways to improve your site.</p>
                <Button
                    text="get started"
                />
            </Card>
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/support/Passionate_Support_Collage.jpg"
                title1="An expert team"
                desc="We believe no one should have to read the manual or wait for a response when they need help. So while our competitors shift from live support to splashy ads, we've doubled down on hiring smart, passionate web experts to help grow your brand and build your perfect website.

                Give our team a call anytime. You'll see why we've earned our place as the top web builder for creative professionals."
                showBtn={false}
                reverseDirection={true}
            />
            <Card>
                <h2>Based in the USA</h2>
                <h3>SE HABLA ESPAÑOL</h3>
                <p>PhotoBiz is locally and family owned, located right in the middle of downtown Greensboro, NC. All of our agents, developers, designers and coders are right here in the USA. Nothing is outsourced, so you know you're getting the best product and service in the industry. Y si hablas español, no te preocupes. ¡Nosotros también!</p>
            </Card>
            <div className={classes["card-container"]}>
            <div className={`${classes.card} ${classes.card1}`}>
                    <h2>Based in the USA</h2>
                    <h3>SE HABLA ESPAÑOL</h3>
                    <p>PhotoBiz is locally and family owned, located right in the middle of downtown Greensboro, NC. All of our agents, developers, designers and coders are right here in the USA. Nothing is outsourced, so you know you're getting the best product and service in the industry. Y si hablas español, no te preocupes. ¡Nosotros también!</p>
                    <Button
                        text="visit the support hub"
                    />
            </div>
                <div className={`${classes.card} ${classes.card2}`}>
               
                    <h2>Check the Growth Hub for business tips</h2>
                    
                    <p>We call our company blog the "Growth Hub" because that's why we write: to give you the business tips you need to succeed and GROW. You'll find tips and tutorials on design, SEO, sales, marketing strategy, and using your tools to keep customers coming back.</p>
                    <Button
                        text="visit the growth hub"
                    />
                
                </div>
            </div>

        </div>
    )
}

export default Support
