import React from 'react';
// const homePic = require("../media/global-map_UN4MECXXU6.jpg");
// import homePic from "../media/global-map_UN4MECXXU6.jpg";
import homePic from "../media/achievement-agreement-arms-1068523.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMask } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <>

            <div className="row w-100">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 pl-4 d-flex justify-content-center">
                    <h2>Welcome to the Bad Bank&nbsp;&nbsp;<FontAwesomeIcon icon={faMask} className="" style={{}} /></h2>
                </div>
                <div className="col-lg-3"></div>
            </div>
            <div className="row w-100">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 pl-4 d-flex justify-content-center">
                    <div className="card" style={{maxWidth:'400px'}}>
                        <div className="card-body" >
                        
                            <img src={homePic} className="card-img-top" alt="Bad bank home image"/>
                            <p className="card-text">
                                For all of your fake banking needs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </>
    )
}

export default Home

