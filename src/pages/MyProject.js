import { useEffect } from "react"
import Project from "../component/Project"
const projects = [
    {
        name: "Product Identification (Finding Pattern in Sales of Product)",
        description: "N / A",
        language: "HTML, CSS, JavaScript & Python (NumPy, Pandas, Flask)",
        source_code_link: ""
    },
    {
        name: "Online Banking Mobile Application",
        description: "N / A",
        language: "Kotlin, PHP & MySQL",
        source_code_link: "https://github.com/muhammadBilal5002/Android-Kotlin-PHP-and-MYSQL-Based-Online-Banking-App"
    },
    {
        name: "File Sharing Web Application",
        description: "N / A",
        language: "HTML, CSS, JavaScript, Node Js (Express), MongoDB (MongoDB Cloud)",
        source_code_link: "https://github.com/muhammadBilal5002/NodeJs-Express-Js-MongoDB-HTML-CSS-Javascript-Based-File-Sharing-App"
    },
    {
        name: "Portfolio Website",
        description: "N / A",
        language: "HTML, CSS, JavaScript, React Js, Node Js (Express), MongoDB",
        source_code_link: ""
    },
    {
        name: "C# Based MultiClient Server",
        description: "N / A",
        language: "C# , C# Thread, C# Socket",
        source_code_link: "https://github.com/muhammadBilal5002/C-Console-Based-MultiClient-Server-Project"
    },
    {
        name: "Hotel Management System",
        description: "N / A",
        language: "Java, JavaFx & File System",
        source_code_link: "https://github.com/muhammadBilal5002/JAVA-JAVAFX-JAVA-FileSytem-Based-Hotel-Management-System"
    },
    {
        name: "Desktop Banking Application",
        description: "N / A",
        language: " Java, JavaFx, Java Data Structure & File System",
        source_code_link: "https://github.com/muhammadBilal5002/JAVA-JAVA-FX-and-DataStructue-Based-Banking-Desktop-Application"
    }
]
const MyProject = () => {
    useEffect(()=>{
        setTimeout(()=>{
            alert("Description And ScreenShot Will Be Avalibale Soon")
        },20)
    },[])
    return (
        <>
            <div>
                {
                    projects.map(i => {
                        return (
                            <Project value={i} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default MyProject