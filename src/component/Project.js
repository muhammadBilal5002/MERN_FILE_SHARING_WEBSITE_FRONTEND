import { useEffect } from 'react'
import '../StyleSheet/index.css'
function codelink(val){
  if(val==""){
    return (<span style={{color:"red"}}>Private Project</span>)
  }
  return(<a style={{color:"blueviolet"}}href={val} target="_blank">{val}</a>)
}
const Project = (props) => {
  
  return (
    <>
      <div id='project'>
        <h3>{props.value.name}</h3>
        <br />
        <p><strong>Description: </strong>{props.value.description}</p>
        <br />
        <p><strong>By Using: </strong>{props.value.language}</p>
        <br />
        <p><strong>Source Code Link: </strong>{codelink(props.value.source_code_link)}
        </p>
      </div>
    </>
  )
}

export default Project