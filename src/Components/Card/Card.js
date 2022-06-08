import React from 'react'

function Card({ user }) {
  console.log(user);
  return (
    <div className="container m-5">
  <div className="row bg-gray-950 d-flex">
    <div className="col-md-6 ">
      <div className="card-block">
        <h4 className="card-title">{user.userName}</h4>
        <p className="card-text" >Dreamcatcher kombucha drinking vinegar cold-pressed hoodie craft beer literally blog microdosing trust organic flannel blue bottle fingerstache. Blog skateboard cronut chips brunch pug. Heirloom coloring book, pitchfork flannel bicycle rights deep v meditation.  </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Card