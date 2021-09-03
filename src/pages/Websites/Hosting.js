import React from 'react'
import classes from "./Hosting.module.css"
import Title from "../../Components/Websites/Title"
import Button from "../../Components/Websites/Button"
import Advantage from "../../Components/Websites/Advantage"

const Blog = () => {
    return (
        <div className={classes["blog-container"]}>
            <div className={classes.blog}>
                <Title heading1="Hosting + domains, email, & storage add ons"
                    heading2="LIGHTNING FAST WEB HOSTING & UNIVERSAL SSL SECURITY" />
                <Advantage
                    img="https://photobiz.com/content/images/corporate/photobiz/graphics/domains/Take_It_With_You_Domain_Email.png"
                    title1="Lightspeed Hosting"
                    title2="#1 FASTEST IN THE WORLD"
                    desc="Built for speed, PhotoBiz sites are the fastest websites on the planet. You have unlimited bandwidth – no throttling or limiting your site visits, ever. PhotoBiz hosting is included with your membership and scalable so your business can grow endlessly online. Get as much traffic as you can handle! Your website will load in an instant for your customers on desktops, tablets, and mobile devices."
                    showBtn={true}
                    btnText="learn more"
                    reverseDirection={false}
                />

                <Advantage
                    img="https://photobiz.com/content/images/corporate/photobiz/graphics/domains/Promote_Domain_Email.png"
                    title1="Top-Tier SSL Security"
                    title2="UNIVERSAL SECURITY FOR YOUR BUSINESS"
                    desc="PhotoBiz offers best-in-class encryption for your website, online store, and client data at no extra cost. SSL is integrated with your entire website, so everything’s protected. We handle renewals and all the background work for you. Your customers can browse & buy with confidence knowing that their personal and financial data is encrypted with top-tier universal security."
                    showBtn={false}
                    btnText="learn more"
                    reverseDirection={true}
                />

                <Advantage
                    img="https://photobiz.com/content/images/corporate/photobiz/graphics/domains/Domain_Email_Top_Image.jpg"
                    title1="Website Domains"
                    title2="USE AN EXISTING DOMAIN OR GET A NEW ONE"
                    desc="Already have a domain? We can connect it for you for no extra cost. Need a new web address? Our domain specialists are ready to help you find a memorable and unique domain for your business. We offer domain names at cost as an added service so you can keep all of your website needs in one place. When you are ready to launch, get in touch with PhotoBiz support and we’ll set it up for you."
                    showBtn={false}
                    btnText="learn more"
                    reverseDirection={false}
                />

                <Advantage
                    img="https://photobiz.com/content/images/corporate/photobiz/graphics/domains/Work_Center.jpg"
                    title1="Branded Business Email"
                    title2="PROFESSIONAL MAILBOXES FOR BUSINESS"
                    desc="Build trust and confidence in your business with a professional, branded email address. Your PhotoBiz mailbox includes 25 GB of storage, syncs across all of your devices, and is protected by SSL encryption and anti-spam/anti-virus filters. In addition, a built-in suite of calendar, contacts, tasks & notes let you get more done without leaving your dashboard."
                    showBtn={false}
                    btnText="learn more"
                    reverseDirection={true}
                />

                <Advantage
                    img="https://photobiz.com/content/images/corporate/photobiz/graphics/domains/Hosting-OriginalSize.jpg"
                    title1="Add On Original Resolution File Uploads"
                    title2="STORE AND SELL YOUR HIGHEST QUALITY FILES"
                    desc="Want to upload your highest resolution files online to sell to your clients or for personal storage? PhotoBiz’s Original File Size add-on is a great feature to increase your upload and storage capacity from a max of 4MB per file to 25MB per file. This helps retain your original file resolution so you can store and sell images without compression. It is great for selling images with our Proofing tool and for back-up storage."
                    showBtn={true}
                    btnText="download our sample gallery"
                    reverseDirection={false}
                />
                
               
                
            </div>
        </div>
    )
}

export default Blog
