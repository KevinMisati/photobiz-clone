import React from 'react'
import classes from "./Websites.module.css"
import WebsiteFooter from "../../Components/Websites/WebsiteFooter.js"
import Templates from "./Templates"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

const Websites = () => {
    return (
        <div className={classes["websites-container"]}>
            <div className={classes.websites}>
                <Router>
                    <Switch>
                        <Route path="/websites" >
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
