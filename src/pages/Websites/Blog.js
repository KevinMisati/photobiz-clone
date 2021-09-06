import React from 'react'
import classes from "./Blog.module.css"
import Title from "../../Components/Websites/Title"
import Advantage from "../../Components/Websites/Advantage"
import JumpstartAd from "../../Components/Websites/JumpstartAd"
import FinishingTouch from "../../Components/Websites/FinishingTouch"
import Card from "../../Components/Websites/Card"
import Button from "../../Components/Websites/Button"
const Blog = () => {
    return (
        <div>
            <Title
                heading1="Blogging tools"
                heading2="INCLUDED WITH EVERY WEBSITE"
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/blog/Blog_Image_01.jpg"
                title1="Drag and drop design"
                desc="Design beautiful blogs faster than ever. Drag and drop text blocks, images, titles, videos and buttons into place — everything resizes automatically to fit any screen or device. PhotoBiz blogs are effortless to manage, integrate seamlessly, and give you supreme flexibility."
                showBtn={false}
                reverseDirection={false}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/blog/Blog_Image_02.jpg"
                title1="SEO tools to get more traffic"
                desc="Every blog you post adds valuable text to your site. The more you talk about your specialties, the more Google and other search engines know about your business. The more they know, the more customers they can send your way! Even better, we kickstart that traffic cycle by including auto-SEO tools that write metadata for you. You'll rank better in search, with perfectly positioned content-rich pages."
                showBtn={false}
                reverseDirection={true}
            />

            <Card>
                <div className={classes["img-container"]}>
                    <img src="https://photobiz.com/content/images/corporate/photobiz/graphics/blog/Social_Icons-02.png" alt="social media"/>
                </div>
                <h2>Share on Facebook, Twitter {"&"} More</h2>
                <p>After you create a killer blog post, share it on social media to get even more traffic. We've built in sharing features to help you reach more customers on Facebook, Twitter, Pinterest, Google+, or wherever you grow your fanbase. It's free marketing! We make it easy to share posts, get more traffic, and earn a higher search rank.</p>
                <Button 
                text = "let's start blogging"
                 />
            </Card>

            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/blog/Blog_Image_03.jpg"
                title1="Collect and market to customers"
                desc="Your PhotoBiz blog works hard to keep track of all of your readers. Collect subscribers and send them a weekly blog newsletter... or keep in touch with updates and promotions. A built-in CRM keeps your customer database tidy, and Email Marketing is included for free!"
                showBtn={false}
                reverseDirection={false}
            />

            
            
        </div>
    )
}

export default Blog
