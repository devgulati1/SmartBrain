import React from "react"


let Navigation=({onRouteChange})=>{
    return(
        
        <nav style={{display:"flex", justifyContent:"flex-end"}} >

     <p onClick={()=>onRouteChange("signin")} className=" ma3 pa3 link black underline f4  pointer">Sign Out</p>        
        </nav>
        
    )
}
export default Navigation;