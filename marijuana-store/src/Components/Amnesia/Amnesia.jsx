import React from 'react'
import amnesia from './amnesia.module.css'

function Amnesia() {
  return (
    <div className={Amnesia.outerSection}>
        <div className={amnesia.container}>
            <div className={amnesia.texts}>
                <p className={amnesia.blue}>Blue Amnesia</p>
                <h1>-50%</h1>
                <p className={amnesia.desc}>Vestibulum vitae risus placerat, auctor urna nec, pretium sem. Pellentesque finibus velit quam, ut imperdiet odio elementum eget.</p>
                <button><span>Read More</span></button>
            </div>
        </div>
      
    </div>
  )
}

export default Amnesia
