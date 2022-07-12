import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './component/navigation'
import Home from './pages/Home'
import About from './pages/About'
import MyProject from './pages/MyProject'
import Page_Not_Found from './pages/Page_Not_Found'
const App = () => {
useEffect(()=>{
    alert("Website Is Under Construction")
},[])
return (
        <>
           <Router>
            <Navigation/>
                <Routes>
                    <Route path='/'  element={<About/>}></Route>
                    <Route path='/About' element={<Home/>}></Route>
                    <Route path='/MyProject'  element={<MyProject/>}></Route>
                    <Route path='*'  element={<Page_Not_Found/>}></Route> 
                </Routes>
            </Router>
        </>
    )
}

export default App