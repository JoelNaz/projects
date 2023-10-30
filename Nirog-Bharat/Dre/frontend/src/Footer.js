import * as React from 'react';

export default function Footer() {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="one">
                        <p>Copyright ©️ 2023 - All Rights Reserved - Official website of<br/> Pradhan Mantri Jan Arogya Yojana
                            (PM-JAY), Government<br/> of India<br/>
                            Website Content Managed by - PM-JAY<br/>
                            Email: webmaster-pmjay[at]nha[dot]gov[dot]in<br/>
                            Postal Address : 9th Floor, Tower-l, Jeevan Bharati Building,<br/>Connaught Place, New Delhi -
                            110001<br/>
                            ☎ Toll-Free Call Center No - 14555<br/>
                            Last Updated on: 08-02-2023</p>
                    </div>
                    <div className="three">
                        <h3>POLICIES</h3>
                        <hr noshade='false' color="white" style={{ textAlign: 'left', width: '20%', marginLeft: 0, height: '2px'}}/>
                        <br/>
                        <br/>
                        <details>
                            <summary><a href="">Terms and Conditions</a></summary>
                        </details>
                        <hr color="white" noshade='true'/>
                        <details>
                            <summary><a href="">Whistle Blower Policy</a></summary>
                        </details>
                        <hr color="white" noshade='true'/>
                        <details>
                            <summary><a href="">Website Policy</a></summary>
                        </details>
                        <hr color="white" noshade='true'/>
                        <details>
                            <summary><a href="">Help</a></summary>
                        </details>
                        <hr color="white" noshade='true'/>
                        <a href="#" id="btp">Back to top</a>
                        <br/><br/>
                    </div>
                    <div className="fourimg">
                        <h3>APP FOR ANDROID</h3>
                        <hr noshade='true' color="white" style={{ textAlign: 'left', width: '18%', marginLeft: 0, height: '2px'}}/>
                        <img  src="static/images/footerpic.jpeg" alt=""/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </footer>
        </>
    );
}