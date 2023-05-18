import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movie({movieInfo,handleShow,setSingleMovie}) {
function handleOnClick(){
    handleShow()
    setSingleMovie(movieInfo)
}
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w780/${movieInfo.poster_path}`} />
      <Card.Body>
        <Card.Title>{movieInfo.title}</Card.Title>
        <Card.Text>
        {movieInfo.overview}
        </Card.Text>
        <Button variant="primary"  onClick={handleOnClick} >Add to Favorite</Button>
      </Card.Body>
    </Card>
  );
}

export default Movie;