import React from 'react'
import classes from "./Seo.module.css"
import Title from "../../Components/Websites/Title"
import Advantage from "../../Components/Websites/Advantage"
import FinishingTouches from "../../Components/Websites/FinishingTouch"
import Card from "../../Components/Websites/Card"
import Button from "../../Components/Websites/Button"
import {WatchButton} from "../../Components/Websites/JumpstartAd"

const Seo = () => {
    return (
        <div>
            <Title
                heading1="SEO tools"
                heading2="WIN AT SEO SIMPLY."
            />
            <Advantage  
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/SEO/SEO_Top_Photo.jpg"
                title1="SEO, Woah!"
                desc="Your site comes pre-tuned for SEO, right out of the box. Start with a site that's fast and mobile friendly (this scores big points with search engines) and metadata that's generated for you by our auto-SEO engine. You can make tweaks and adjustments — even install tracking codes or pixels to get more data. We give you tools and guidance to win at SEO, without having to become a search engine expert yourself."
                showBtn={false}
                reverseDirection={false}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/SEO/Beyond_Keywords.png"
                title1="Beyond Keywords & Metadata"
                desc="Modern SEO goes beyond keywords and rankings. Think about what happens when a new visitor lands on your site. Will that person buy or bounce? Sure, a #1 ranking is great. But what really matters is how well your site converts casual viewers into loyal customers. PhotoBiz sites are built for modern SEO best practices. They're fast, beautiful, mobile optimized, and designed to grow your audience of active, engaged users"
                showBtn={false}
                reverseDirection={true}
            />
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/SEO/Auto_SEO_Photo.jpg"
                title1="Optimize Pages For Search"
                title2="(OR LET AUTO-SEO DO IT FOR YOU!)"
                desc="What is  auto-SEO? It means your page titles, descriptions and keywords are generated for you based on your content, then published to search engines automatically. That way, you can appeal best to Google and Bing without even trying. Or if you prefer to write your own, you have the freedom to customize to your heart's delight."
                showBtn={false}
                reverseDirection={false}
            />

            <Card>
                <h2>Track Your Results</h2>
                
                <p>Want to track your search engine traffic and rankings? We give you an Analytics toolbar so you can see your most important site data at a glance. Submit your Google Analytics and Bing Webmaster tools tracking codes once and you're done. We enable it on every single page of your site. You'll know exactly what's working and where you can grow with your SEO.</p>
                <Button
                    text="get started"
                />
            </Card>
            <Advantage
                img="https://photobiz.com/content/images/corporate/photobiz/graphics/SEO/SEO_Blog.png"
                title1="SEO-Friendly Blogs"
                desc="Blogging is hugely important for building your footprint on search engines. More published content means a greater chance Google will match you with interested buyers. Your articles are tuned for search engines, published with a full complement of meta titles, descriptions, and keywords to get you found on search."
                showBtn={false}
                reverseDirection={true}
            />
            <Card>
                <h3>WANT MORE HANDS ON SEO?</h3>
                <div className={classes["img-container"]}>
                    <img src="https://photobiz.com/content/images/corporate/photobiz/graphics/SEO/SEO-GO-LOGO-transparent.png" alt="seo" />
                </div>
                
                <p>Take your website to the next level with SEO GO. Our monthly SEO program pairs you with a certified SEO expert who will monitor your site's performance and recommend changes that will boost conversion rates and revenue.</p>
                <WatchButton />
            </Card>

            
        </div>
    )
}

export default Seo
