import React from 'react'
import Header from "../Components/Header"
import classes from "./Home.module.css"
import Banner from "../Components/Banner"
import EverythingIcons from "../Components/EverythingIcons"
import GetStarted from "../Components/GetStarted"
import Footer from "../Components/Footer"
import MobileHeader from "../Components/MobileHeader"

const Home = () => {
    return (
        <div className={classes["home-container"]}> 
            <div className={classes.home}>
                <header>
                    <div className={classes["large-screen"]}>
                        <Header />
                    </div>
                    <div className={classes["small-screen"]}>
                        <MobileHeader />
                    </div>
                   
                </header>
                
                <Banner />
                <EverythingIcons />
                <GetStarted />
                <Footer />
            </div>
        </div>
    )
}

export default Home
