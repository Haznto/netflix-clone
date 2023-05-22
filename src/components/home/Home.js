
import axios from 'axios'
import Movie from '../movie/Movie'
import { Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import ModalMovie from '../modalmovie/ModalMovie'
export default function Home(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movies, setMovies] = useState([]);
    const [singleMovie,setSingleMovie] = useState({})
    function fetchdata(){
       axios.get(`${process.env.REACT_APP_APILINK}trending/all/week?api_key=${process.env.REACT_APP_APIKEY}`).then(moviesTrending => {
            
            setMovies(moviesTrending.data.results)
           
        }).catch(err => {
            console.log(err)
            
        }) 
        
    }
    useEffect(() =>{
        fetchdata()
    },[])
    return(
        
    <>
    
    {/* <button onClick={fetchdata}>Get Movies</button> */}
    <Row>
    {movies.map(element => <Movie movieInfo={element} key={element.id} handleShow={handleShow} setSingleMovie={setSingleMovie}/>)}
    </Row>
    <ModalMovie show ={show} handleClose={handleClose} singleMovie={singleMovie}/>
    </>
    )
}