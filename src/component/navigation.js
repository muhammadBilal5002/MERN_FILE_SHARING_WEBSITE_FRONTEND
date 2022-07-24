import "../StyleSheet/Navigation.css"
import {Link, useNavigate} from "react-router-dom"
import { useRef, useState } from "react"
function Navigation(props){
    const navigate = useNavigate()
const nav2 = useRef(null)
const [isShown, setisShown] = useState(false)
function nav2none(){
    setisShown(false)
}
return(
<>
<header>
    <nav id="nav1">
    <h3>MY SHARE</h3>
    <ul style={{margin: "0"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/working">How It Works</Link></li>
        {/* <li>Ho</li> */}
    </ul>
    <div>
    {
    (props.Login=="no")?
    <>
    <Link to="/Login">
        <button>Login</button>
    </Link>
    <Link to="/SignUp">
        <button>Sign Up</button>
    </Link>
    </>:
    <>
    <Link to="/">
        <button onClick={()=>{
            window.localStorage.removeItem("ID")
            window.location.reload()
            
        }}>Logout</button>
    </Link>
    
    </>
    }
    </div>
    <h3 id="menu"onClick={()=>{
        setisShown(!isShown)
    }}>MENU</h3>
    </nav>
    <nav id="nav2" style={{display:isShown?"block":"none"}}>
    <br/>
    <ul style={{padding:"0"}}>
        <li><Link to="/" onClick={nav2none}>Home</Link></li>
        <li><Link to="/working" onClick={nav2none}>How It Works</Link></li>
    </ul>
    <br/>
    <br/>
    <div>
    {
    (props.Login=="no")?
    <>
    <Link to="/Login">
        <button onClick={nav2none}>Login</button>
    </Link>
    <Link to="/SignUp">
        <button onClick={nav2none}>Sign UP</button>
    </Link>
    </>
    :
    <Link to="/">
        <button  onClick={()=>{
            window.localStorage.removeItem("ID")
            window.location.reload()
            
        }}>Logout</button>
    </Link>
    
    }
    </div>
   
    </nav>

</header>
</>
)}
export default Navigation
