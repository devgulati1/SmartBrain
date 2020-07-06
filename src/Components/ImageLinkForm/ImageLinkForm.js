import React from "react"
import "./ImageFormLink.css"


let ImageLinkForm=({onInputChange,onButtonClick})=>{
    return (
        <div className=" tc ">
        <p  >{"the magic will detect faces in your pictue.Give it a try"}</p>
       <div className="center ">

       <div className="    center form  ma3 br3 pa4 shadow-5">

       <input  className=" center pa3 ma3 f4  w-70" type="text" onChange={onInputChange} />
       <button className="dib pa3 ma3 pv3 white link bg-light-purple w-30 grow" 
       
        onClick={onButtonClick}>
       Detect</button>
      
       </div>

        </div>


        </div>
        )
}
export default ImageLinkForm