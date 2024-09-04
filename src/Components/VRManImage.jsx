import React from "react";
import img5 from '../image/VR-Image4.png'

export default function vrImage (){

  const style5 = {
    position: 'absolute',
    width: '107.82px',
    height: '107.82px',
    left: '790px',
    top: '2257.83px',
    borderRadius: '50%',
    background: 'linear-gradient(180deg, #8C4DED 0%, #502C87 100%)'
  }

  const style6 = {
    position: 'absolute',
    width: '53.24px',
    height: '53.24px',
    left: '855.5px',
    top: '1795.29px',
    borderRadius: '50%',
    background: 'linear-gradient(180deg, #8C4DED 0%, #502C87 100%)'
  }

  const style7 = {
    position: 'absolute',
    width: '37.95px',
    height: '37.95px',
    left: '1260.5px',
    top: '1745.29px',
    borderRadius: '50%',
    background: 'linear-gradient(180deg, #8C4DED 0%, #502C87 100%)'
  }

  return (
    <div className="Vr-man">
          <img src={img5} alt="" className="vr-man"/> 
            
          <div style={style5} className="circle"> </div>
          <div style={style6} className="circle"> </div>
          <div style={style7} className="circle"> </div>

    </div>
    
  )
};