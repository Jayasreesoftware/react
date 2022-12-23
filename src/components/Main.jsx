import React from "react"
import "./Main.css"
function Main(){
    return(
        <div className="main">
           <div className="left">
            <div className="card">
                <img src="https://plus.unsplash.com/premium_photo-1665657351417-84872c5ae575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2luYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
           </div>
           <div className="right">
            <div className="card1">
                <h1>TITLE</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus hic officia a voluptate odit corrupti quam quidem, beatae id molestias.</p>
                <button>show</button>
            </div>
           </div>
        </div> 
    )
    
}
export default Main



