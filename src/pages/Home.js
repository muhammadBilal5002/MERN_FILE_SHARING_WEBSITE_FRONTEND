import Movie_View from "../component/Movie"
import '../StyleSheet/index.css'
const MovieName = [
    {Name:"The Rise Of The Planet Of The Apes",img:"../images/Rise_of_the_planet_of_the_Apes.jpg",Rating:"7.6 / 10",Url:"https://www.imdb.com/title/tt1318514/"},
    {Name:"3Idiot",img:"../images/3Idiot.jpg",Rating:"8.4 / 10",Url:"https://www.imdb.com/title/tt1187043/?ref_=nv_sr_srsg_0"},
    {Name:"Inception",img:"../images/Inception.jpg",Rating:"8.8 / 10",Url:"https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0"},
    {Name:"Now You See Me",img:"../images/Now You See Me.jpg",Rating:"7.2 / 10",Url:"https://www.imdb.com/title/tt1670345/?ref_=nv_sr_srsg_0"},
    {Name:"Now You See Me 2",img:"../images/Now You See Me2.jpg",Rating:"6.4 / 10",Url:"https://www.imdb.com/title/tt3110958/?ref_=nv_sr_srsg_3"},
    {Name:"Pk",img:"../images/Pk.jpeg",Rating:"8.1 / 10",Url:"https://www.imdb.com/title/tt2338151/?ref_=fn_al_tt_1"},
]
const Fav_Movie = () => {
    return (
        <>
        <div id="home-movie-section">
           {
               MovieName.map(i=>{
                return(
                <Movie_View Values={i}/>
               )
            })
        }
        </div>
        </>
    )

}

export default Fav_Movie