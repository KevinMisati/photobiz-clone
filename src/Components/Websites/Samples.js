import React from 'react'
import classes from "./Samples.module.css"
const samples = [
    {
        id: 1,
        title: "adams",
        img: "https://photobiz.com/content/images/corporate/photobiz/samples/sample_p_adams.jpg",
    },
    {
        id: 1,
        title: "harper",
        img: "https://photobiz.com/content/images/corporate/photobiz/samples/sample_p_harper.jpg",
    },
    {
        id: 1,
        title: "francis",
        img: "https://photobiz.com/content/images/corporate/photobiz/samples/sample_p_francis.jpg",
    },
    {
        id: 1,
        title: "kipling",
        img: "https://photobiz.com/content/images/corporate/photobiz/samples/sample_p_francis.jpg",
    },

]

const Sample = () => {
    return (
        <div className={classes["templates-container"]}>
            <section className={classes.templates}>

                {samples.map(({ id, title, img }) => {
                    return (
                    <div key={id} className={classes.template}>
                        <h3>{title}</h3>
                        <div className={classes["img-container"]}>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    )
                }
                )
                }
               

            </section>
        </div>
        
    )
}

export default Sample
