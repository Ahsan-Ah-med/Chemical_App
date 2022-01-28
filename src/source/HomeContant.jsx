import React from 'react';
import sitara from './images/sitara.jpg';
import lotte from './images/lotte.jpg';
import meta from './images/meta.jpg';
import qa from './images/qa.png';
import range from './images/range.jpg';
import sodium from './images/sodium.jpg';
import sulphur from './images/sulphur.jpg';
import './Home.css';

const HomeContant = () => {

    const SoleData = [
        {
            Image: sitara,
            title: "SITARA CHECMICAL INDUSTRIES LTD.",
            discription: "Distributor Of Sitara Chemical Industries Limited."
        },
        {
            Image: lotte,
            title: "LOTTE CHEMICAL.",
            discription: "LOTTE is a multinational Group of business units engaging individuals in such a diverse industry as confectionary."
        },
        {
            Image: meta,
            title: "Sodium Meta Bisulphite",
            discription: "Molecular Formula:Na2S2O5 CAS#:7681-57-4 HS Code:28321000"
        },
        
        {
            Image: range,
            title: "Complete Range of Reactive & Disperse Dyes.",
            discription: "Specialize in development and production of Reactive dyestuffs for textiles. Support the principle of “safety, environmental compliance and healthy living”, and promise “to improve the livelihood of people, enrich the future potential of people”"
        },
        {
            Image: sodium,
            title: "Sodium Sulphide Flakes",
            discription: "Molecular Formula: Na2S CAS No. 1313-82-2"
        },
        {
            Image: sulphur,
            title: "Sulphur Black",
            discription: "This dye belongs to the group of Sulphur Dyes. It is mainly used for dyeing Cellulosic fiber"
        },
       
    ]
    console.log(SoleData)

    return (
        <div className="box">
            <h1 className="sole">SOLE DISTRIBUTOR.</h1>
            {
                SoleData.map((e)=> {
                    const {Image, title, discription} = e;
                    return(
            <div className="contantbox">
                <br />
                <div className="soleimg">
                    <img src={Image}  alt="" />
                </div>
                <div className="title">
                        {title}
                </div>
                <div className="disc">
                        {discription}
                </div>
                <div className="rm">
                    <p>READ MORE.</p>
                </div>
            </div>

                    )
                }

                )
            }
        </div>
    )
}
export default HomeContant;