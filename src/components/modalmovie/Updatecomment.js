import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'

function UpdateComment({show,handleClose,singleMovie,setisUpdated}) {
  setisUpdated(false)
    function updateCommentByUser(){
      
        const obj = {
          user_comment : message
        }
        
        console.log(obj)
        axios.put(`${process.env.REACT_APP_LOCALSERVER}/UPDATE/${singleMovie.id}`,obj).then(saved => console.log(saved)).catch(err => console.log(err))
    }
    
    function saveAndExit() {
      // updateExistComment()
        
        updateCommentByUser()
        setisUpdated(true)
        handleClose()
        
    }
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
        
      };
      // function updateExistComment(){
      //   singleMovie.userComment = message;
      // }
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
          
            {singleMovie.overview}
            <p><label htmlFor='message'>Update your comment :{singleMovie.user_comment}</label><input
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
  
  export default UpdateComment;