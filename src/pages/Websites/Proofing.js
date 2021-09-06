import React from 'react'
import classes from "./Proofing.module.css"
import Title from "../../Components/Websites/Title"
import Advantage from "../../Components/Websites/Advantage"
import JumpstartAd from "../../Components/Websites/JumpstartAd"
import FinishingTouch from "../../Components/Websites/FinishingTouch"
import CardWithIcons from "../../Components/Websites/CardWithIcons"
import Card from "../../Components/Websites/Card"
import Button from "../../Components/Websites/Button"
import { WatchButton } from "../../Components/Websites/JumpstartAd"

const Proofing = () => {
    return (
        <div>
            <Title
                heading1="PhotoBiz Proofing"
                heading2="FAST, SECURE, AND BEAUTIFUL."
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/proofing/Proofing_Gallery_Ex.jpg"
                title1="Powerful proofing + ecommerce"
                desc="PhotoBiz Proofing is the best sales tool for photographers. Proof photos from elegant, shareable galleries that allow customers to purchase prints, packages, digitals files, and products seamlessly. Personalize client galleries and create photo apps. See customer likes and respond to comments. Offer digital downloads if you like. Encourage clients to share with family and friends so they can buy, too. Your images are right-click and password protected, as well as watermarked to protect your work."
                showBtn={false}
                reverseDirection={false}
            />
            <Card>
                <h2>Sell with zero commission fees</h2>

                <p>We believe photographers should keep the money they earn. That's why we don't take one cent of your profits. Create your own packages and products and keep all the money you earn.</p>
                <WatchButton />
                <Button
                    text="sign up today"
                />
            </Card>
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/proofing/bulk-dlimage.jpg"
                title1="Bulk downloads"
                desc="Bulk downloads allows you to enable the ability for your customers to download multiple photos or an entire gallery fast & easy! You can allow customers to pay to download multiple files or a complete gallery through digital packages or a la carte digital images with full control over the file’s resolution and pricing."
                showBtn={false}
                reverseDirection={true}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/proofing/Proofing_Iphone.jpg"
                title1="Share everywhere"
                desc="PhotoBiz Proofing galleries are magically mobile, which means they viewable on every device possible. Send galleries to your clients and let them view, like, comment, and share with their friends and family, too!"
                showBtn={false}
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
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/proofing/Proofing_Personalize.jpg"
                title1="Make it your own"
                desc="Personalize the proofing experience for your clients by choosing from image layouts, creating custom cover pages, and adding your logo and brand colors."
                showBtn={false}
                reverseDirection={false}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/proofing/Proofing-AddOns.jpg"
                title1="Add-ons available"
                desc="As your business grows and scales consider add-on features such as original file sizes and more storage space. You can allow your clients to purchase and download your uncompressed images with the Original Files add-on. And if you want to store more than 5,000 images you can increase your storage (and downgrade when you don’t)."
                showBtn={false}
                reverseDirection={true}
            />
            
        </div>
    )
}

export default Proofing
