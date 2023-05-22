import axios from 'axios'
import Movie from '../movie/Movie'
import { Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import UpdateComment from '../modalmovie/Updatecomment'
export default function FavList (){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movies, setMovies] = useState([]);
    const [singleMovie,setSingleMovie] = useState({})
    const [isUpdated,setisUpdated] = useState(false)

   
    function fetchdata(){
       axios.get(`${process.env.REACT_APP_LOCALSERVER}/getMovies`).then(favoriteMovies => {
            console.log(favoriteMovies)
            setMovies(favoriteMovies.data.movies)
           
        }).catch(err => {
            console.log(err)
            
        }) 
        
    }
    function deleteChangeState(id) {
        setMovies(beforeDelete => beforeDelete.filter(moviesfiltered => moviesfiltered.id !== id))
    }
    useEffect(() =>{
        fetchdata()
    },[isUpdated])
    return (
        <div>
            <Row>
                {movies.map(element => <Movie movieInfo={element} key={element.id} handleShow={handleShow} setSingleMovie={setSingleMovie} onFav={true} deleteChangeState={deleteChangeState} />)}
            </Row>
                <UpdateComment show={show} handleClose={handleClose} singleMovie={singleMovie} setisUpdated={setisUpdated}/>

        </div>
    )
}


