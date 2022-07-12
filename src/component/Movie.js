import '../StyleSheet/index.css'
function Movie_View(props){
    return(
        <>
        <a href={props.Values.Url} target="_blank">
    <div id='movie-view'>
           <img id="movie-image" src={props.Values.img}></img>
           <h3>{props.Values.Name}</h3>
           <h4> Rating: <strong>{props.Values.Rating}</strong></h4>
    </div>
        </a>
    </>
 )
}

export default Movie_View