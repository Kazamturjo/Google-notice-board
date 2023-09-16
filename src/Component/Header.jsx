import React from 'react'

function Header(props) {
    const logo = <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
    alt='logo'/>

  return (
    // <>
    <div className='header' style={{width:"100%", borderBottom:"0.5px solid gray"}}>
      {logo}
      <h3>Traideas Notice Board</h3>
    </div>
    
    // </>
  )
}
export default Header