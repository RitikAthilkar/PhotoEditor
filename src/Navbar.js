import { useState } from "react"

const NavBar = ({setBackground})=>{
    return(
        <div className="Nav_bar">
            <span>
           <input type="text" placeholder="Upload link of image" onChange={(e)=>setBackground(e.target.value)} />
           </span>
        </div>
    )
}
export default NavBar;
