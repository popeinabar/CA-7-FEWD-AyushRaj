import { Link } from "react-router-dom"
import logo from "../Components/logo.png"
function Navbar(){
    return(
        
<div className="row1">
<nav className="nav">
    <Link to="/" className="site-title"><img src={logo} alt=""/></Link>
    <div>
        <Link to="/1"> <button>Register</button> </Link>
    </div>
</nav>
</div>


    )
}

export default Navbar;
