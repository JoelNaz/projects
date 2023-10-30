import { useState } from "react";
import axios from "axios";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";




export default function Dashboard() {

    const handleSubmit = (event) => {
        event.preventDefault();

	axios.get('http://127.0.0.1:8000/authen/user/'
            ).then(res => {
                console.log(res.data);
              }).catch((error) => {
                if (error.response) {
                  console.log(error.response);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                  }
              })

              
    }
    
    return(

                <button onClick={handleSubmit}>Data</button>
            );
	

}
