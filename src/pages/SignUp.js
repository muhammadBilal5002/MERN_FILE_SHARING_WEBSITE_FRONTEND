import { useCallback, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import myurl from "../component/url"
let isstatus = false
function SignUp(){
  const navigation = useNavigate()
  const uploadURL= myurl+"registeruser"
  const btn = useRef(null)
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [repassword, setrepassword] = useState("")
  
  const signup = useCallback(()=>{
    btn.current.disabled = true
    btn.current.innerText="Loading..."

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setusername(username.trim())
    setemail(email.trim())
    setrepassword(repassword.trim())
    if(username==""||email==""||password==""||repassword==""||repassword!=password||password.length<5||!email.match(validRegex)){
     alert("Please Enter Valid Information")
    }
    else{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username,email,password,repassword})
    }
      fetch(uploadURL, requestOptions).then(response => response.json()).then(
        (data) => {
          console.log(data["data"])
          isstatus = data["data"]
            console.log(isstatus)
            if(isstatus){
              alert("Register Successfully")
              navigation("/Login")
            }
            else{
              btn.current.disabled = false
              btn.current.innerText="Register"
              alert("Email Address Already Exist")
            }
      }
        )
    }
  })
    return(
        <>
        <br/>
   <section className="vh-100">
  <div className="container h-80">
    <div className="row d-flex justify-content-center align-items-center h-80">
      <div className="col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body ">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control"  placeholder="Full Name" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control"  placeholder="Valid" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                      <label className="form-label" htmlFor="form3Example3c" >Your Email</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" placeholder="Atleast 6 Char" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control"  placeholder="Repeat Password" value={repassword} onChange={(e)=>{setrepassword(e.target.value)}}/>
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button ref={btn} onClick={signup} type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
export default SignUp
