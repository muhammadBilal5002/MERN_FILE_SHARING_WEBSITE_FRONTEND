import { useEffect, useRef } from "react"
import "../StyleSheet/Home.css"
import myurl from "../component/url"
function Home(props) {
    const uploadURL= myurl+"api/file"
    const drop = useRef(null)
    const fileinp = useRef(null)
    const link = useRef(null)
    const UploadProgress = useRef(null)
    const progressbar = useRef(null)
    const percentval = useRef(null)
    const linkInp = useRef(null)
    const filesizewarning = useRef(null)
    // const uploadURL = `https://filesharewithall.herokuapp.com/api/file`;

    useEffect(() => {
        drop.current.addEventListener("dragover", (e) => {
            e.preventDefault()
            if (!drop.current.classList.contains("dropped")) {
                drop.current.classList.add("dropped")
            }
        })
        drop.current.addEventListener("dragleave", (e) => {
            e.preventDefault()
            drop.current.classList.remove("dropped")
        })
        drop.current.addEventListener("drop", (e) => {
            console.log(e.dataTransfer)
            e.preventDefault()
            drop.current.classList.remove("dropped")
            fileinp.current.files= e.dataTransfer.files
            uploadFile()
        })
        fileinp.current.addEventListener("change", () => {
            uploadFile()
        })
        function uploadFile() {
            link.current.style.display = "none"
            let mainsize = props.mainsize
            var filesize = ((fileinp.current.files[0].size/1024)/1024).toFixed(4);
            if(filesize > mainsize){
                filesizewarning.current.style.display = "block"
                setTimeout(()=>{
                    filesizewarning.current.style.display = "none"
                },1500)
                return
            }
            const xhr = new XMLHttpRequest()
            const form = new FormData()
            form.append("myfile", fileinp.current.files[0])
            console.log("Ok 1")
            xhr.onreadystatechange = () => {
                UploadProgress.current.style.display = "block"
                xhr.upload.onprogress = (e) => {
                    const percent = Math.round((e.loaded / e.total) * 100)
                    progressbar.current.style.width = `${percent}%`
                    percentval.current.innerHTML = `${percent}%`
                }
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    showlink(JSON.parse(xhr.responseText))
                    fileinp.files = null
                    
                }
            }
            console.log("Ok 2")
            xhr.open("POST", uploadURL)
            xhr.send(form)
            console.log("Ok 3")
        }
        const showlink = ({Link}) => {
            UploadProgress.current.style.display = "none"
            progressbar.current.style.width = `0%`
            percentval.current.innerHTML = `0%`
            link.current.style.display = "flex"
            linkInp.current.value = Link
        }

    }, [])
    return (
        <>
            <div id="info">
                {
                (props.mainsize==100)?
                (<>
                <h6>You Can Upload File Upto: 100MB</h6>
                <h3 style={{ color: "black" }}>Login And Get <strong style={{ color: "rgba(18, 138, 250, 1)" }}> 500MB</strong></h3>
                </>
                ):
                <>
                <h3 style={{ color: "black" }}>Upload Upto: <strong style={{ color: "rgba(18, 138, 250, 1)" }}> 500MB</strong></h3>
                </>
                }
                
            </div>
            <div id="upload-section">
                <div id="filesizewarning" ref={filesizewarning}>
                    <p style={{ color: "red" }}>File Size Is Out Of Limit</p>
                </div>
                <div id="Upload" ref={drop}>
                    <div className="drop-file" id="drop-file">
                        <div className="icon">
                            <img src="./image/file.svg" id="left" alt="FileLogo" draggable="false" />
                            <img src="./image/file.svg" id="center" alt="FileLogo" draggable="false" />
                            <img src="./image/file.svg" id="right" alt="FileLogo" draggable="false" />
                        </div>
                    </div>
                    <div>
                    </div>
                    <p style={{ color: 'black' }}>Drag And Drop Your File Here, </p><span onClick={() => { fileinp.current.click() }} style={{ color: 'rgb(18, 138, 250)', cursor: 'pointer', fontWeight: 'bold' }}>Browser</span>
                    <input ref={fileinp} type="file" id="FileInput" style={{ display: 'none' }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                </div>
                {/* Progress Bar */}
                <div ref={UploadProgress} className="Upload-Progress">
                    <div ref={progressbar} className="progress-bar" />
                    <div id="percentvalue">
                        <p>Uploading......</p>
                        <p ref={percentval} id="percent">0%</p>
                    </div>
                </div>
                {/* Copy Link */}
                <div ref={link} className="link">
                    <div>
                        <p style={{ textAlign: "center" }}>Link Will Be Expired In 30 Min</p>
                        <input type="text" id="link" ref={linkInp} readOnly onClick={() => {
                            console.log("hello")
                            linkInp.current.select()
                            document.execCommand("copy")
                        }} />
                        <img src="./image/copy-svgrepo-com.svg"  alt="copy-icon" id="copy" onClick={() => {
                            console.log("hello")
                            linkInp.current.select()
                            document.execCommand("copy")
                        }} />
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home