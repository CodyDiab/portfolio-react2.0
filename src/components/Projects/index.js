import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Projects() {
    return(
        <Carousel showThumbs={false} >
        
            <div className="item ">
                <img src={require("../../assets/scatterbrain.png")} alt="screenshot"></img>
                <a href="https://stormy-scrubland-17368.herokuapp.com/" tagtet="_blank" rel="noopener noreferrer">
                Visit Scatterbrain
                </a>
                <br></br>
                <a href="https://github.com/CodyDiab/ScatterBrain" tagtet="_blank" rel="noopener noreferrer">
                    GitHub Repo
                    </a>
            </div>
         
       
            <div className="item" >
        <img  src={require("../../assets/Screenshot (11).png")} alt="screenshot"></img>
        <a href="https://codydiab.github.io/dm-emergency-paper-locator/" target="_blank" rel="noopener noreferrer">
           Visit Paper Locator
           </a>
           <br></br>
           <a href="https://github.com/CodyDiab/ScatterBrain" tagtet="_blank" rel="noopener noreferrer">
               GitHub Repo
           </a>
        </div>
        
        
        
        <div className="item">
            <img src={require("../../assets/IRISscreenshot.png")} alt="screenshot"></img>
            <a href="https://codydiab.github.io/IRIS-wapp/" tagtet="_blank" rel="noopener noreferrer">
             IRIS Weather
             </a>
             <br></br>
             <a href="https://github.com/CodyDiab/ScatterBrain" tagtet="_blank" rel="noopener noreferrer">
                 GitHub Repo
             </a>
        </div>
       
       
        <div className="item ">
            <img src={require("../../assets/git-it-done.png")} alt="screenshot"></img>
            <a href="https://codydiab.github.io/git-it-done/" tagtet="_blank" rel="noopener noreferrer">
            Git-It-Done
            </a>
            <br></br>
            <a href="https://github.com/CodyDiab/ScatterBrain" tagtet="_blank" rel="noopener noreferrer">
                GitHub Repo
            </a>
        </div>
       
       
            <div className="item">
           <img src={require("../../assets/acess-boost.png")} alt="screenshot"></img>
           <a href="https://codydiab.github.io/Accessibility-Boost-Project/" target="_blank" rel="noopener noreferrer">
           Horiseon
           </a>
           <br></br>
           <a href="https://github.com/CodyDiab/ScatterBrain" tagtet="_blank" rel="noopener noreferrer">
               GitHub Repo
           </a>
          </div>
      
       
        <div className="item">
            <img src={require("../../assets/work-day-sched..png")} alt="screenshot"></img>
            <a href="https://codydiab.github.io/Work-Day-Scheduler/" tagtet="_blank" rel="noopener noreferrer">
            Work-Day-Scheduler
            </a>
            <br></br>
            <a href="https://github.com/CodyDiab/ScatterBrain" tagtet="_blank" rel="noopener noreferrer">
                GitHub Repo
            </a>
        </div>
       
        
    </Carousel>
    )
}



export default Projects;