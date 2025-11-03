import React from 'react'
import about from './about.module.css'
import img1 from '../../assets/Images/About/imgi_7_about-plate.png'

function About() {
  return (
    <div className={about.outerDiv}>
        <div className={about.innerDiv}>
            <div className={about.left}>
                <img src={img1} />
            </div>
            <div className={about.right}>
                <p classNam={about.above}>About Our Dispensary <span className={about.line}></span></p>
                <p className={about.title}>We use <span className={about.color}>high quality</span> and certified product from the USA</p>
                <p className={about.des}>ts ideal for drinking, cooking, smoking and other ways. The product is popular in 42 countries.</p>
                <p className={about.text}>Sed viverra, lorem in maximus faucibus, odio libero fringilla dolor, convallis vestibulum risus nisi ac neque. Maecenas convallis ligula metus, ac viverra magna egestas mollis. Etiam sed tortor vel purus aliquam faucibus.</p>

                <div className={about.btns}>
                    <button className={about.btn1}><span>More Info</span></button>
                    <button className={about.btn2}><span>Product Page</span></button>
                </div>

            </div>
        </div>

      
    </div>
  )
}

export default About
