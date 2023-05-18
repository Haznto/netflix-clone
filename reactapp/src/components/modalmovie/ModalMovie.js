import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'

function ModalMovie({show,handleClose,singleMovie}) {
    function saveMovie(){
        axios.post(`${process.env.REACT_APP_LOCALSERVER}/addMovie`,singleMovie).then(saved => console.log(saved)).catch(err => console.log(err))
    }
    function saveAndExit() {
        addComment()
        saveMovie()
        handleClose()
    }
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
      };
      function addComment(){
        singleMovie.userComment = message;
      }
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{singleMovie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img alt={singleMovie.title}src={`https://image.tmdb.org/t/p/w780/${singleMovie.poster_path}`}/>
            {singleMovie.overview}
            <p><label htmlFor='message'>Your Comment</label><input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}/>
            </p>
            
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveAndExit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalMovie;