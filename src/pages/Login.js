import { useNavigate } from "react-router-dom"
import { useState,useRef } from "react"
import myurl from "../component/url"
let isstatus = false
function Login() {
  const uploadURL = myurl + "loginuser"
  const btn = useRef(null)
  const navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  function login() {
    btn.current.disabled = true
    btn.current.innerText="Loading..."
    setemail(email.trim())
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "" || password.length < 5 || !email.match(validRegex)) {
      alert("Please Enter Valid Information")
    }
    else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      }
      fetch(uploadURL, requestOptions).then(response => response.json()).then((data) => {
        console.log(data)
        isstatus = data["data"]
        if (isstatus) {
          localStorage.setItem("ID",data["result"]["_id"])
          alert("Login Successfully")
           navigate("/")
          window.location.reload()
        }
        else {
          btn.current.disabled = false
          btn.current.innerText="Register"
          alert("Worng Validation")
        }

      }
      )

    }
  }
  return (
    <>
      <br />
      <br />
      <br />
      <section className="vh-90">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" value={email} onChange={(e) => { setemail(e.target.value) }} />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  {/* Checkbox */}
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', borderRadius: "20px" }} onClick={login} ref={btn}>Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <span style={{ cursor: "pointer" }} onClick={() => { navigate("/SignUp") }} className="link-danger">Register</span></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Login
