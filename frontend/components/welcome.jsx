import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from './main_nav';

const WelcomePage = () => {
  return (
    <div>
      <MainNav/>
      <div className='welcome-page'>
        <Link to='/signup'>
          <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638496432/Screen_Shot_2021-12-02_at_4.11.23_PM_dl3w1z.png" alt="" />
        </Link>
        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638492474/Screen_Shot_2021-12-02_at_4.11.34_PM_ntncoq.png" alt="" />
        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638492502/Screen_Shot_2021-12-02_at_4.11.45_PM_b6lpxp.png" alt="" />
        <Link to='/signup'>
          <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638492529/Screen_Shot_2021-12-02_at_4.11.54_PM_w2sicb.png" alt="" />
        </Link>
        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638492589/Screen_Shot_2021-12-02_at_4.12.13_PM_aehart.png" alt="" />
      </div>
    </div>

  )
}

export default WelcomePage;