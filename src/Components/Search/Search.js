import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../actions/userAction';
import Card from '../Card/Card';
import './search.css'

function Search() {
    const dispatch = useDispatch();

    const [text, setText] = useState('')

    const { users } = useSelector(state => state.user);
    // console.log(users)

    const changeHandler = e => {
        setText(e.target.value)
    }
    const handleSearch = e => {
        // setText(e.target.value)

        dispatch(getUserData({type: 'text', query: text }))
    }

    // if(!user.users.length) {
    //     return (
    //     <div className="container">
    //     <div className="search-wrapper">
    //         <label htmlFor="search">Search Users</label>
    //         <input type="text" placeholder="Type here..." id="search" aria-label='search'
    //         name='search' value={text} onChange={handleSearch}/>
    //     </div>
    //     <p>No Data</p>
    //     </div>
    //         )
    // }


  return (
<div className="container">
	<div className="search-wrapper">
		<label htmlFor="search">Search Users</label>
		<input type="text" placeholder="Type here..." id="search" aria-label='search'
        name='search' value={text} onChange={changeHandler}/>
	<button onClick={handleSearch}>Search</button>    
    
    </div>

    {/* <div className="container m-5">
                                <div className="row bg-gray-950 d-flex">
                                  <div className="col-md-6 ">
                                    <div className="card-block">
                                      <h4 className="card-title">{users[0]?.userName}</h4>
                                      <p className="card-text" >email ID : {users[0]?.email}</p>
                                      <p className="card-text" >Phone No : {users[0]?.phnNo}</p>

                                    </div>
                                  </div>
                                </div>
                              </div>                                 */}
    
    <div className='col-md-9'>
					<div className='row'>
						{
							users?.map(users => (
								// <Card key={users._id} user={users} />
                                <div className="container m-5">
                                <div className="row bg-gray-950 d-flex">
                                  <div className="col-md-6 ">
                                    <div className="card-block">
                                      <h4 className="card-title">{users?.userName}</h4>
                                      <p className="card-text" >{users?.email}</p>
                                      <p className="card-text" >{users?.phnNo}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>                                
							))}
					</div>
				</div>
</div>
// </div>
  )
}

export default Search