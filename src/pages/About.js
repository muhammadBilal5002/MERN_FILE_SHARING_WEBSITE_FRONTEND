import '../StyleSheet/index.css'
import Myimg from '../images/MyImage.jpg'
import { useEffect, useState } from 'react'
import Typed from 'react-typed';

let i = 0;
let flag = false;
const inrto_text = `I am a last-year student in the Computer Science Program and have been 
enjoying learning different technology and programing languages like Html, CSS,
Vanilla JavaScript, React Js,Node Js, Express Js, Mongo DB, PHP, MY SQL, Android (Kotlin),
Python (Pandas, NumPy), Flask, Java. And have made lots of projects using
different technology. Name of Some Projects are present on my resume also
there are some which I didn’t mention.`

const About = () => {   
    return (
        <>
            <br />
       
            <div className="about-div">
                <img src={Myimg} alt="MyImage" className='intro-img' />
                <div className='div'>
                    <h1 className='introline'>
                        Hi,
                    </h1>
                    <div className='myname-div'>
                        <h1 className='myname'> My Name Is </h1><span className='myname bilal'>Muhammad Bilal</span>
                    </div>
                    <h1 className='myname mynameh1 Intro'>
                        <Typed className='MyIntro' strings={[inrto_text]} typeSpeed={30} style={{color:"red"}}/>
                    </h1>
                    <div className='intro-btn-div'>
                        <button className='intro-btn' onClick={() => {
                            // fetch('https://filesharewithall.herokuapp.com/download/088b3f8c-dce9-4f6a-9946-f1bc1a99707c')
                            // .then(response => console.log('Ok'))
                            window.open('https://filesharewithall.herokuapp.com/download/0a646b20-a6ca-4dbc-bec7-31e586c2645b')
                        }}>Download Resume</button>
                        <button className='intro-btn askmebtn' onClick={() => {
                            document.getElementById('ASKME').scrollIntoView()
                        }}>Ask Me..!</button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <div id='ASKME'>
                <div id="form">
                    <h1 style={{ textAlign: "center" }}>Enter Details</h1>
                    <label htmlFor="name" className="ask_label">Enter Your Name</label>
                    <input id="name" type="text" className="ask_inp" />
                    <label htmlFor="name" className="ask_label">Enter Your Email</label>
                    <input id="email" type="email" className="ask_inp" />
                    <label htmlFor="message" className="ask_label">Enter Your Message</label>
                    <textarea id="message" cols={30} rows={10} maxLength={300} className="ask_inp" placeholder="Word Limit 300" defaultValue={""} />
                    <button id="ask-btn" className="intro-btn" onClick={() => {
                        alert("Message Sending Not Avalible Right Now")
                    }}>Send Message</button>
                </div>

            </div>

        </>
    )

}

export default About