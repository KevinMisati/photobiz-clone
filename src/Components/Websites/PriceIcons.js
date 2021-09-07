import React from 'react'
import classes from "./PriceIcons.module.css"
import { NavLink, useRouteMatch } from "react-router-dom"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,

    useLocation
} from "react-router-dom";

const PriceIcons = () => {
    let location = useLocation();
    let { path, url } = useRouteMatch();
    const moveScrollBar = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className={classes.icons}>
            <NavLink onClick={moveScrollBar} exact={true} to={`${url}`} className={classes.icon} activeClassName={classes.selected}>

                <img src="https://img.icons8.com/wired/64/000000/template.png" />
                <span>templates</span>
            </NavLink>


            <NavLink onClick={moveScrollBar} to={`${url}/hosting`} className={classes.icon} activeClassName={classes.selected}>



                <img src="https://img.icons8.com/ios/50/000000/load-balancer.png" />
                <span>hosting {"&"} ssl</span>
            </NavLink>
            <NavLink onClick={moveScrollBar} exact={true} to={`${url}/blog`} className={classes.icon} activeClassName={classes.selected}>
                <img src="https://img.icons8.com/ios/50/000000/blog.png" />
                <span>blog</span>
            </NavLink>
            <NavLink onClick={moveScrollBar} exact={true} to={`${url}/seo`} className={classes.icon} activeClassName={classes.selected}>

                <img src="https://img.icons8.com/ios-filled/50/000000/performance-smartphone.png" />
                <span>seo</span>


            </NavLink>
            <NavLink onClick={moveScrollBar} exact={true} to={`${url}/proofing`} className={classes.icon} activeClassName={classes.selected}>

                <img src="https://img.icons8.com/ios/50/000000/image.png" />
                <span>proofing</span>


            </NavLink>
            <NavLink onClick={moveScrollBar} exact={true} to={`${url}/ecommerce`} className={classes.icon} activeClassName={classes.selected}>

                <img src="https://img.icons8.com/dotty/80/000000/shopping-cart.png" />
                <span>ecommerce</span>


            </NavLink>

            <NavLink onClick={moveScrollBar} exact={true} to={`${url}/forms`} className={classes.icon} activeClassName={classes.selected}>

                <img src="https://img.icons8.com/dotty/50/000000/google-forms.png" />
                <span>forms</span>


            </NavLink>
            <NavLink onClick={moveScrollBar} exact={true} to={`${url}/scheduler`} className={classes.icon} activeClassName={classes.selected}>

                <img src="https://img.icons8.com/ios/80/000000/view-shedule.png" />
                <span>scheduler</span>


            </NavLink>

            <NavLink onClick={moveScrollBar} exact={true} to={`${url}/marketing`} className={classes.icon} activeClassName={classes.selected}>
                <img src="https://img.icons8.com/ios/50/000000/paper-plane.png" />
                <span>marketing</span>




            </NavLink>
            <NavLink onClick={moveScrollBar} exact={true} to={`${url}/support`} className={classes.icon} activeClassName={classes.selected}>
                <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-support-advertising-kiranshastry-lineal-kiranshastry.png" />
                <span>support</span>
            </NavLink>


        </div>

    )
}

export default PriceIcons
