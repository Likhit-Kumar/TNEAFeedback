import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../actions/userAction';
import CheckBox from '../CheckBox/CheckBoxField';
import { useNavigate } from 'react-router-dom';
import './search.css'


function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [text, setText] = useState('')

    // console.log(users)

    const changeHandler = e => {
        setText(e.target.value)
    }
    const handleSearch = e => {
        // setText(e.target.value)
        dispatch(getUserData({type: 'text', query: text }))
        navigate('../DataLoader/')
    }

  return (
    <div>
<div className="container">
	<div className="search-wrapper">
		<label htmlFor="search">Search By Email Id</label>
		<input type="email" placeholder="Enter the user id" id="search" aria-label='search'
        name='search' value={text} onChange={changeHandler}/>
	<button onClick={handleSearch}>Search</button>    
    
    </div>
    

</div>

</div>
  )
}

export default Search
