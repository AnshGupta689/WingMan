import React from 'react'
import './service.css'
import ce from '../../assets/ce.png'
import fr from '../../assets/fr.png'
import tt from '../../assets/tt.png'
import alert from '../../assets/alert.jpg'
import wheat from '../../assets/wheat.jpg'
import ce_icon from '../../assets/ce_icon.jpg'
import fr_icon from '../../assets/fr_icon.png'
import tt_icon from '../../assets/tt_icon.png'
import alerts_icon from '../../assets/alerts_icon.png'
import wheat_icon from '../../assets/wheat_icon.png'
const Service = () => {
  return (
    <div className='services' >
         <div className='service'>
          <img src={ce} alt=""/>
          <div className='caption'>
            <img src={ce_icon}alt=""/>
            <p>Cost Effective</p>
          </div>
         </div>
         <div className='service'>
          <img src={fr} alt=""/>
          <div className='caption'>
            <img src={fr_icon}alt=""/>
            <p> Personalized profile</p>
          </div>
         </div>
         <div className='service'>
          <img src={tt} alt=""/>
          <div className='caption'>
            <img src={tt_icon}alt=""/>
            <p>Customer Support</p>
          </div>
         </div>
         <div className='service'>
          <img src={alert} alt=""/>
          <div className='caption'>
            <img src={alerts_icon}alt=""/>
            <p> Real Time price alert</p>
          </div>
         </div>
         <div className='service'>
          <img src={wheat} alt=""/>
          <div className='caption'>
            <img src={wheat_icon}alt=""/>
            <p> Crop Listing</p>
          </div>
         </div>


    </div>
  )
}

export default Service