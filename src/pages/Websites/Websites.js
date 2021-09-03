import React from 'react'
import classes from "./Websites.module.css"
import WebsiteFooter from "../../Components/Websites/WebsiteFooter.js"
import Templates from "./Templates"
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
import Price from "../../Components/Websites/Price"

const Websites = () => {
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
                        <Route exact={true} path={path}>
                            <Templates />
                        </Route>
                    </Switch>
                </Router>
                <WebsiteFooter />
            </div>
           
        </div>
    )
}

export default Websites
