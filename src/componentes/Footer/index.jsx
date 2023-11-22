import "./style.css"



import { Menu } from '../Menu'

export function Footer(){
    return(
        <div id="footer">
            <div id="line"></div>
            
            {/* Menu */}
            <Menu/>

            
        </div>
    )
}