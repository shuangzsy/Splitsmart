import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <div>
    <div className='header'>
      <div>
        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1637653233/IMG_5588_iksqs5.jpg" />
      </div>

      <ul>
        <Link className='login' to='/login'>Log In</Link>
        <Link className='signup' to='/signup'>Sign Up</Link>
      </ul>
    </div>
      {/* <div>
          <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1637687229/Screen_Shot_2021-11-23_at_9.05.40_AM_umuqrr.png" alt="" />
      </div> */}
    </div>

  )
}

export default MainNav;