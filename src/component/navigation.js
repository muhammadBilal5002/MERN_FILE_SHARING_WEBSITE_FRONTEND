import { Link } from 'react-router-dom'
import '../StyleSheet/index.css'

const Navigation = ()=>{
return (
    <>
    <div className='con-nav'>
    <div>
        <h1  className='nav-name'>
            Muhammad Bilal
        </h1>
    </div>
    <div>
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
    )
    
    }
    
    export default Navigation