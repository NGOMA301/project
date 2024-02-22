import React from 'react'
import './styleswitcher.css'
// import './style.css'
import color1 from './color-1.css'
import color2 from './color-2.css'
import color3 from './color-3.css'
import color4 from './color-4.css'
import color5 from './color-5.css'
import {FaMoon} from 'react-icons/fa'



export default function styleswitcher() {


  return (
        <div className='style-switcher'>
        <div className='style-switcher-toggle s-icon'>
            <i className='fas fa-cog fa-spin'></i>
        </div>
        <div id='icon' className='day-night s-icon'>
            <i className='fas'><FaMoon/></i>
        </div>
        <h4>Theme colors</h4>
        <div className='colors'>
            <span className='color-1' onClick="setActiveStyle('color-1')"></span>
            <span className='color-2' onClick="setActiveStyle('color-2')"></span>
            <span className='color-3' onClick="setActiveStyle('color-3')"></span>
            <span className='color-4' onClick="setActiveStyle('color-4')"></span>
            <span className='color-5' onClick="setActiveStyle('color-5')"></span>
        </div>
    </div>
  )
}
