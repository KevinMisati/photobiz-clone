import React from 'react'
import classes from "./Marketing.module.css"
import Title from "../../Components/Websites/Title"
import Card from "../../Components/Websites/Card"
import Advantage from "../../Components/Websites/Advantage"
import Button from "../../Components/Websites/Button"

const Marketing = () => {
    return (
        <div>
            <Title
                heading1="Fully integrated marketing suite"
                heading2="EMAIL MARKETING, LANDING PAGES, AND PROMOTIONAL TOOLS."
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/email/Email_Marketing_Top_Photo.jpg"
                title1="Easy marketing tools for photographers"

                desc="Easily create and send marketing campaigns to your clients and sales leads. Simply choose a marketing template and customize using a drag and drop editor. You can create unlimited landing pages, and send 2,000 emails/month with the option to upgrade. A built-in CRM keeps track of email lists, manages bounces & subscriptions, and uses tags to keep it all organized. Market your business simply, with PhotoBiz Email Marketing."
                showBtn={true}
                btnText="view samples"
                reverseDirection={false}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/email/Email_Landing_Pages.png"
                title1="Send 2,000 free emails a month"
               
                desc="You can choose an email template and then add your logo, images and text. Then you can customize the colors, background, borders, and buttons in the email. You’ll be ready to send an email blast to your clients or leads. It's a truly easy way to stay in touch!"
                showBtn={true}
                btnText="view samples"
                reverseDirection={true}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/landingpagebig1.jpg"
                title1="Build landing pages"
                
                desc="Reach more customers with email marketing campaigns that do double duty. Your promotions are saved online as shareable landing pages that can bring in even more customers through search. More visitors on your site means more sales, more customers and more referral sessions."
                showBtn={false}
                btnText="view samples"
                reverseDirection={false}
            />

            <Card>
                <h3>Email analytics</h3>
                <p>Once you hit send, built-in analytics let you find your best customers (and those who need a little push). On-demand metrics into engagement, shares, and search visits let you craft more finely-tuned promotions for your clients.</p>
                <Button
                    text="get started"
                />
            </Card>
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/email/Marketing_Pop_Up.jpg"
                title1="Promote with pop-ups"

                desc="Need to get a message in front of your clients fast? You can create beautiful, mobile responsive pop-ups and promo bars for website pages and proofing galleries. Include images, forms, buttons, videos and more. It's free! Pop-ups set up in a snap. The are great for getting more sign-ups, promoting sales, and generating excitement."
                showBtn={false}
                btnText="view samples"
                reverseDirection={true}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/email/Lead_Gen.jpg"
                title1="Targeted marketing"

                desc="Want to send a promo to repeat customers? How about new leads only? Parents of babies turning one this month? Your website has been keeping your leads organized all along, neatly tagged inside your Client Relationship Builder. All you have to do is select which groups will receive your message."
                showBtn={false}
                btnText="view samples"
                reverseDirection={false}
            />
            <div className={classes["reach-customers-container"]}>
                <div className={classes["reach-customers"]}>
                <h3>Need to reach more customers?</h3>
                <p>Send all the emails you want — upgrade to get more space anytime. Your start with 2,000 emails per month, and you can upgrade at any time to send more. Additional blocks of emails are available for purchase inside your PhotoBiz control panel.</p>
                <div className={classes.prices}>
                    <span>+ 3,000 <br/>
                        $5/mo</span>
                    <span>+ 12,000 <br/>
                        $20/mo</span>
                    <span>
                        + 25,000 <br/>
                        $40/mo
                    </span>
                    <span>
                        + 40,000 <br/>
                        $70/mo
                    </span>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Marketing
