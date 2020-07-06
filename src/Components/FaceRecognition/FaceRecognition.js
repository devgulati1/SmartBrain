import React from "react"
import './FaceRecognition.css'

let FaceRecognition=({imageurl,box})=>{
    return(
        
        <div className="center ma">
        <div className="absolute mt2">
        <img   id="inputimage"  height="auto" width="200px" alt="img" src={imageurl}/>
        <div className="bounding-box" style={{top:box.topRow, bottom:box.bottomRow ,left:box.leftCol , right:box.rightCol }}></div>
        
        </div>
        </div>
        
    )
}
export default FaceRecognition;