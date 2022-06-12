import React from 'react'
import { useSelector } from 'react-redux';
// import CheckBoxField from '../CheckBox/CheckBoxField';
import Comments from '../Comments/Comments';

function DataLoader() {

    const { users } = useSelector(state => state.user);

  return (
    <div>
    <div className='col-md-9'>
					<div className='row'>
						{
							users?.map(users => (
								// <Card key={users._id} user={users} />
                <div className="container m-5"  key={users._id}>
                <div className="row bg-gray-950 d-flex">
                  <div className="col-md-6 ">
                    <div className="card-block">
                      <p className="card-text" >Application Number : {users?._aid}</p>
                      <h4 className="card-title">Name : {users?._n}</h4>
                      <p className="card-text" >Email : {users?.e}</p>
                      <p className="card-text" >Mobile No. : {users?._m}</p>
                      <p className="card-text" >date of Birth : {users?.dob}</p>
                      <Comments userId={users?._id} userName={users._n} />                                                      
                    </div>
                  </div>
                </div>
              </div>
							))}
					</div>
				</div>
        {/* <CheckBoxField/> */}
        {/* <CommentForm userId={users?._id}/> */}
                </div>
  )
}

export default DataLoader