import './App.css';

import React from "react"
import Footer from './Footer.js'
import { Box } from '@mui/material';

export default function PledgePage() {
    return(
        <>
        <Box className='body'>
            <section className="breadcump">
                    <div className="pledge-container">
                        <h2 className="pl">Take A Pledge</h2>
                        <p className="pl"><a href="">Home</a> / Take a Pledge</p>
                    </div>

            </section><br/><br/>

            <section className="about-page">

                <div className="mainPledge">

                    <h2 style={{textAlign: 'center', color: 'rgb(235, 88, 88)', fontSize: 'xx-large'}}>Generate Certificate</h2><br/>
                    <form action="" method="post">
                        <div>
                            
                        <input required type="text" id="name" name="name" placeholder="Name"/>
                        </div>
                        <br/>
                        <div>
                            
                        <input required type="text" id="age" name="age" placeholder="Age"/>
                        </div>
                        <br/>
                        <div>
                            
                        <input required type="text" id="district" name="district" placeholder="District"/>
                        </div>
                        <br/>
                        <div>
                        
                        <input required type="text" id="state" name="state" placeholder="State"/>
                        </div>
                        <br/>

                        <div className="certbtn">
                            <button id="s" type="submit">Submit</button>
                            &nbsp; &nbsp;
                            <button id="r" type="reset">Reset</button>
                        </div>
                        
                    </form>
                
                </div>
    
    
            </section>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <Footer/>
        </Box>
        </>
    );
}