import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram,faYoutube, faGooglePlay, faApple} from '@fortawesome/free-brands-svg-icons'
import imgGooglePlay from '../image/GooglePlay.jpg'
import imgAppStore from '../image/AppStore.png'

export default function Footer() {

  return (
    <footer>
       <div class="footer-top">
            <ul class="footer-menu">
                <li><a href="#">Help</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div class="app-download">
                <h3>Download our App</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae consequatur dignissi molestiacié nobis? <br /> molestiae nobis? Inventore </p>
                <div class="app-stores">
                  <img src={imgGooglePlay} alt="" className="googlePlay"/>
                  <img src={imgAppStore} alt="" style={{objectFit: 'contain'}} />
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <ul class="footer-terms">
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Condition</a></li>
            </ul>
            <p>© 2024 VR ZONE Ltd. All Rights Reserved</p>
            <div class="social-icons">
                <a href="#"><FontAwesomeIcon icon={faTwitter} style={{color: 'white'}} size="xl"/></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} style={{color: 'white'}} size="xl"/></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} style={{color: 'white'}} size="xl"/></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} style={{color: 'white'}} size="xl"/></a>
            </div>
        </div>
    </footer>
  )
}