import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addCommentUser } from '../../actions/comment.js';
import PropTypes from 'prop-types';

const Comments = ({ userId, userName, addCommentUser }) => {
    const commentSelector = useSelector(state => state.user)
    const [text, setText] = useState('');


    const SubmitHandler = (e) => {

      e.preventDefault();
      // console.log(props)
      console.log(userId, {text});

      const finalComment = userName + ": " + text;
      addCommentUser(userId, finalComment);
      setText('');
    }

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Leave a Comment</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={SubmitHandler}
        >
        <textarea
          name='text'
          placeholder='Comment the post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};


Comments.propTypes = {
  addCommentUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { addCommentUser }
)(Comments);
