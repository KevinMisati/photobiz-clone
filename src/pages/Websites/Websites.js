import React from 'react'
import classes from "./Websites.module.css"
import WebsiteFooter from "../../Components/Websites/WebsiteFooter.js"
import Templates from "./Templates"
import JumpstartAd from "../../Components/Websites/JumpstartAd"
import FinishingTouch from "../../Components/Websites/FinishingTouch"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useLocation
} from "react-router-dom";
import Hosting from "./Hosting"
import Blog from "./Blog"
import Seo from "./Seo"
import Proofing from "./Proofing"
import Ecommerce from "./Ecommerce"
import Forms from "./Forms"
import Scheduler from "./Scheduler"
import Marketing from "./Marketing"
import Support from "./Support"

import Price from "../../Components/Websites/Price"

const Websites = ({ShowFinishingTouch=true}) => {
    let location = useLocation();
    let { path, url } = useRouteMatch();
    return (
        <div className={classes["websites-container"]}>
            <div className={classes.websites}>
                <Price />
                <Router>
                    <Switch location={location}>
                        <Route exact ={true} path={`${path}/hosting`} >
                            <Hosting />
                        </Route>
                        <Route exact ={true} path={`${path}/blog`} >
                            <Blog />
                        </Route>
                        <Route exact={true} path={`${path}/seo`} >
                            <Seo />
                        </Route>
                        <Route exact={true} path={`${path}/proofing`} >
                            <Proofing />
                        </Route>
                        <Route exact={true} path={`${path}/ecommerce`} >
                            <Ecommerce />
                        </Route>
                        <Route exact={true} path={`${path}/forms`} >
                            <Forms />
                        </Route>
                        <Route exact={true} path={`${path}/scheduler`} >
                            <Scheduler />
                        </Route>
                        <Route exact={true} path={`${path}/marketing`} >
                            <Marketing />
                        </Route>
                        <Route exact={true} path={`${path}/support`} >
                            <Support />
                        </Route>
                        <Route exact={true} path={path}>
                            <Templates />
                        </Route>
                    </Switch>
                </Router>
                 <JumpstartAd />
                {(ShowFinishingTouch == true) && < FinishingTouch />}
                <WebsiteFooter />
            </div>
           
        </div>
    )
}

export default Websites
