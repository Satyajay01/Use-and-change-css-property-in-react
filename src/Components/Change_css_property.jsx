import React, { useState } from 'react'
import './style.css'

function Change_css_property() {
    const [myColor, setmyColor] =useState("blue")
    const [fontSize, setfontSize] =useState()
    const [bgcolor, setbgcolor] =useState()
    const [Displya_pro, setDisplya_pro]=useState("block")

    function ColorFun() {
        setmyColor ("red")
        setfontSize ("50px")
        setbgcolor ("yellow")
        setDisplya_pro("inline")
    }

    const divStyle = {
        border: '2px solid red',
        height: '300px', 
        width: '100vw' 
      };


  return (
   <>
    <div style={divStyle}>
        <h1 style={{ color: 'red',backgroundColor: "lightblue"}}>hii this is is Satyajay</h1>
    <button onClick={ColorFun}>Button</button>
    <h1 className='my_text' style={{color: myColor,fontSize: fontSize, backgroundColor: bgcolor, display: Displya_pro}}>Change_css_property test</h1>

    </div>
   
   </>
  )
}

export default Change_css_property