import React from "react";

export default function Circle() {
    const style = {
      boxSizing: 'border-box',
      zIndex: '-2',
      position: 'absolute',
      width: '607px',
      height: '452px',
      left: '700.86px',
      top: '70px', 
      background: 'linear-gradient(198.96deg, #DC00D3 18.28%, #07FAF5 89.92%)',
      border: '1px solid #000000',
      filter: 'blur(175px)',
      transform: 'rotate(-90.91deg)'
    }

    const style1 ={
      boxSizing: 'border-box',
      position: 'absolute',
      width: '391px',
      height: '230px',
      left: '985px',
      top: '1185px',
      zIndex: '-3',
      background: 'linear-gradient(92.18deg, #C9CAA1 0%, #E13737 69.56%)',
      border: '1px solid #000000',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      filter: 'blur(175px)'
    }

    const style2 = {
      boxSizing: 'border-box',
      position: 'absolute',
      width: '326px',
      height: '323px',
      left: '65px',
      top: '980px',
      zIndex: '-4',

      background: 'linear-gradient(92.18deg, #2AA9DF 0%, #AE0CA7 69.56%)',
      border: '1px solid #000000',
      filter: 'blur(175px)'
    }

    const style3 = {
      position: 'absolute',
      width: '537.77px',
      height: '543.1px',
      left: '819.23px',
      top: '1780.31px',
      zIndex: '-2',
      background: 'linear-gradient(141deg, rgba(29, 4, 33, 0.5) 27.81%, rgba(31, 5, 38, 0.519524) 36.32%, #4C13A9 75.23%)',
      boxShadow: 'inset 12px 4px 4px #100425',
      borderRadius: '50%'
    }

    const style4 = {
      position: 'absolute',
      width: '798px',
      height: '739px',
      left: '803px',
      top: '1621px',
      zIndex: '-3',
      background: 'radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)'
    }

    const style8 = {
        position: 'absolute',
        width: '798px',
        height: '739px',
        left: '-171px',
        top: '1421px',
        zIndex: '-3',
        background: 'radial-gradient(37.26% 37.26% at 50% 50%, rgba(170, 20, 240, 0.31) 0%, rgba(170, 20, 240, 0) 100%)'
      }

    return(
      <>
        <div style={style} className="circle"> </div> 
        <div style={style2} className="circle"> </div>
        <div style={style1} className="circle"> </div>
        <div style={style3} className="circle"> </div>
        <div style={style4} className="circle"> </div>
        <div style={style8} className="circle"> </div>

      </>
    )
}


