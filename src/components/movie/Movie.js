import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movie({movieInfo,handleShow,setSingleMovie,onFav=false,deleteChangeState}) {
function handleOnClick(){
    handleShow()
    setSingleMovie(movieInfo)
    
}
    
function deleteMovie(){
  axios.delete(`${process.env.REACT_APP_LOCALSERVER}/DELETE/${movieInfo.id}`).then(returned => console.log(returned))
  .catch(err => console.log(err))

  deleteChangeState(movieInfo.id)
}
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w780/${movieInfo.poster_path}`} />
      <Card.Body>
        <Card.Title>{movieInfo.title}</Card.Title>
        <Card.Text>
        {movieInfo.overview}
        </Card.Text>
        {onFav && <><p> Comments: {movieInfo.user_comment} </p></>}
        
        {onFav?
        <><Button variant="success"  onClick={handleOnClick} >Update</Button>
        <Button variant="danger"  onClick={deleteMovie} >Delete</Button>
        </>:
        <Button variant="primary"  onClick={handleOnClick} >Add to Favorite</Button>}
        
      </Card.Body>
    </Card>
  );
}

export default Movie;