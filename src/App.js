import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './component/navigation'
import Home from "./pages/Home"
import Working from "./pages/Working"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Error from "./pages/Error"
const App = () => {
return (
        <>
           <Router>
            <Navigation Login={window.localStorage.getItem("ID")?"yes":"no"}/>
                <Routes>
                    <Route path='/'  element={<Home mainsize={window.localStorage.getItem("ID")?500:100}/>}></Route>
                    <Route path='/Working' element={<Working />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/SignUP' element={<SignUp />}></Route>
                    <Route path='*' element={<Error/>}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App