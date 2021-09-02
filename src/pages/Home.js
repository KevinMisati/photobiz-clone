import React from 'react'
import classes from "./Home.module.css"
import Banner from "../Components/Home/Banner"
import EverythingIcons from "../Components/Home/EverythingIcons"
import GetStarted from "../Components/Home/GetStarted"


const Home = () => {
    return (
        <div className={classes["home-container"]}> 
            <div className={classes.home}>
                
                <Banner />
                <EverythingIcons />
                <GetStarted />
                
            </div>
        </div>
    )
}

export default Home
