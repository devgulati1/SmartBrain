import React from "react"
import Tilt from 'react-tilt'
import "./Logo.css"
import brain from './brain.png';

let Logo=()=>{
    return (
        <div className=" ma3  mt0">

        <Tilt className="Tilt  pa3 shadow-5" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"><img style={{height:"100px" ,width:"100px"}} alt="brain" src={brain} /> </div>
</Tilt>

        </div>
    )
}
export default Logo;