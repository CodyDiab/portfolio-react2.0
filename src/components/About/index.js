import React from "react";


function About() {

    return(
    <div className="about-container">
        <img alt=" profile" className="profile-img" src={require('../../assets/profile-image.jpg')}>
        </img>
           <div className="about-text">
            <h2>Cody Nabil Diab</h2>
            <p>
             Cody is a front end web developer located in Texas. Working from a design background while leveraging logic and utility to deliver a unique aesthetic along with a fluid user interface.
           </p>
         </div>
      
    </div>
 )
}

export default About;
