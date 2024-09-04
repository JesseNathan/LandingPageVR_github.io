
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram,} from '@fortawesome/free-brands-svg-icons'
import vrGear from '../image/Vrgear.png'

export default function Navbar() {
  return (
    <header>
       <nav>
          <ul>
            <li><a href="App.jsx">Home</a></li>
            <li><a href="Product.jsx">Products</a></li>
            <li className='trapesium'><img src={vrGear} alt="" className='vr-img'/></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul> 
          <div className="user-icon">
          <FontAwesomeIcon icon={faCircleUser} size="2xl"  />
          </div>
      </nav>
    </header> 
  );
}
