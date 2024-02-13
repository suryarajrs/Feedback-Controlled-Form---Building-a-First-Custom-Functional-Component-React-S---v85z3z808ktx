import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState();
  const [commentError, setCommentError] = useState(false);


  const handleChange = (e)=>{
    setRating(e.target.value);
  }
  const handleOnChange =(e)=>{
   if (e.target.value.length < 5){
    setCommentError(true);
   }else{
    setCommentError(false);
  }
}
  return (
    <div id="main">
      <form>
        <div>
          <label htmlFor='rating'>Rating: </label>
          <input 
            onChange={handleChange}
            type="range"
            min="1"
            max="10"
            id="rating"
            value={rating}  
          />
          <span className='rating'>{rating}</span>
        </div>

        <div>
          <label htmlFor='comment'>Comment: </label>
          <textarea 
            id='comment'
            onChange={handleOnChange}
          />
          {commentError &&<p style={{ color: 'red' }} className="comment-error">Comment must be atleast 5 characters.</p>}
        </div>
        <button onClick={(e)=>{e.preventDefault()}} type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
