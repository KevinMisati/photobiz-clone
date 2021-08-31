import React,{useState} from 'react'
import classes from "./Footer.module.css"

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState({
        photobiz:false,
        platform:false,
        services:false,
        profession:false,
        education: false,
        company:false
    })
    const togglePhotoBiz = () => {
        setIsMenuOpen({...isMenuOpen,photobiz: !isMenuOpen.photobiz})
    }
    const togglePlatform = () => {
        setIsMenuOpen({ ...isMenuOpen, platform: !isMenuOpen.platform })
    }
    const toggleServices = () => {
        setIsMenuOpen({ ...isMenuOpen, services: !isMenuOpen.services })
    }
    const toggleProfession = () => {
        setIsMenuOpen({ ...isMenuOpen, profession: !isMenuOpen.profession })
    }
    const toggleEducation = () => {
        setIsMenuOpen({ ...isMenuOpen, education: !isMenuOpen.education })
    }
    const toggleCompany = () => {
        setIsMenuOpen({ ...isMenuOpen, company: !isMenuOpen.company })
    }
    return ( 
        <div className={classes["footer-container"]}>
            <footer>
                <div className={classes["left-section"]}>
                    <div className={classes["logo-container"]}>
                        <img src="https://photobiz.com/content/corporate/photobiz/images/full_photobiz_minimal_logo.svg" alt=""/>
                    </div>
                    <div className={classes["phone"]}>
                        <span>1234567890</span>
                        <span>Mon-Fri 9am - 8pm</span>
                    </div>
                    <div className={classes["social-media-icons"]}>
                        <span>
                            <i className="fab fa-facebook-f"></i>
                        </span>
                        <span>
                            <i className="fab fa-twitter"></i>
                        </span>
                        <span>
                            <i className="fab fa-instagram"></i>
                        </span>
                        <span>
                            <i className="fab fa-pinterest-p"></i>
                        </span>
                        <span>
                            <i className="fab fa-youtube"></i>
                        </span>
                        <span>
                            <i className="fab fa-linkedin-in"></i>
                        </span>
                    </div>
                </div>
                <div className={classes["right-section"]}>
                    <div className={`${classes["menu-item"]} ${isMenuOpen.photobiz ? classes["menu-list-open"] : ""}`}>
                        <h3>Photobiz</h3>
                        <ul>
                            <li>Login</li>
                            <li>what is photobiz</li>
                            <li>pricing</li>
                        </ul>
                        <button className={classes["plus-btn"]} name={"photobiz"} onClick={togglePhotoBiz}>+</button>
                    </div>
                    <div className={`${classes["menu-item"]} ${isMenuOpen.platform ? classes["menu-list-open"] : ""}`}>
                        <h3>platform</h3>
                        <ul>
                            <li>website platform </li>
                            <li>domain + email</li>
                            <li>proofing only</li>
                        </ul>
                        <button className={classes["plus-btn"]} onClick={togglePlatform}>+</button>
                    </div>
                    <div className={`${classes["menu-item"]} ${isMenuOpen.services ? classes["menu-list-open"] : ""}`}>
                        <h3>services</h3>
                        <ul>
                            <li>about pro services</li>
                            <li>custom site design</li>
                            <li>website jumpstart</li>
                        </ul>
                        <button className={classes["plus-btn"]} onClick={toggleServices}>+</button>
                    </div>
                    <div className={`${classes["menu-item"]} ${isMenuOpen.profession ? classes["menu-list-open"] : ""}`}>
                        <h3>profession</h3>
                        <ul>
                            <li>wedding</li>
                            <li>seniors</li>
                            <li>newborns</li>
                        </ul>
                        <button className={classes["plus-btn"]} onClick={toggleProfession}>+</button>
                    </div>
                    <div className={`${classes["menu-item"]} ${isMenuOpen.education ? classes["menu-list-open"] : ""}`}>
                        <h3>education</h3>
                        <ul>
                            <li>work with experts</li>
                            <li>personal coaching</li>
                            <li>workshops</li>
                        </ul>
                        <button className={classes["plus-btn"]}  onClick={toggleEducation}>+</button>
                    </div>
                    <div className={`${classes["menu-item"]} ${isMenuOpen.company ? classes["menu-list-open"] : ""}`}>
                        <h3>company</h3>
                        <ul>
                            <li>why photobiz</li>
                            <li>our team</li>
                            <li>careers</li>
                        </ul>
                        <button className={classes["plus-btn"]} onClick={toggleCompany}>+</button>
                    </div>
                    <div className={`${classes["menu-item"]} ${classes["join-blog"]}`}>
                        <h3>join our blog</h3>
                        <p>Get weekly updates with tons of helpful tips for your business</p>
                        <form action="#">
                            <span>
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input type="text" />
                            <button className={classes.submit}>
                                {">"}
                                {/* <i className="fas fa-greater-than"></i> */}
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
