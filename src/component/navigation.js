import { Link } from 'react-router-dom'
import '../StyleSheet/index.css'

function off_list_menu(){
    document.getElementById('ismenu').style.display="none"   
}

const Navigation = ()=>{
return (
    <>
    <>
    <div className='con-nav'>
    <div>
        <h1  className='nav-name'>
            Muhammad Bilal
        </h1>
    </div>
    <div className='' id='nav-menu' onClick={()=>{
        let ismenu = document.getElementById('ismenu')
        if(ismenu.style.display=="block"){
            ismenu.style.display="none"
        }
        else{
            ismenu.style.display="block"
        }
        
    }}>MENU</div>
    <div className='nav-div-link'>
    <span>
    <Link to="/" className='a nav-link'>PROFILE</Link>
    </span>
    <span>
    <Link to="/MyProject" className='a nav-link'>MY PROJECTS</Link>
    </span>
    <span>
    <Link to="/About" className='a nav-link'>FAVOURITE MOVIE</Link>
    </span>
    </div>
    </div>
    </>
    <div className='ismenu' id='ismenu'>    
    <div id='MenuOption'>
    <span>
    <Link to="/" className='a nav-link-menu' onClick={off_list_menu}>PROFILE</Link>
    </span>
    <span>
    <Link to="/MyProject" className='a nav-link-menu' onClick={off_list_menu}>MY PROJECTS</Link>
    </span>
    <span>
    <Link to="/About" className='a nav-link-menu' onClick={off_list_menu}>FAVOURITE MOVIE</Link>
    </span>
    </div>
    </div>
    </>
    )
    
    }
    
    export default Navigation