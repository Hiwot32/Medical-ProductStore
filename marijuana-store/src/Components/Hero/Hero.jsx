import React from 'react'
import hero from './hero.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import heroImg from '../../assets/Images/Home/imgi_2_main-02-slider.png'

function Hero() {
  return (
    <div className={hero.outerSection}>
        <div className={hero.container}>
            <div className={hero.left}>
                <h1>Medical Marijuana<br />
                    Products Store</h1>
                <p>From soothing oils and natural extracts to carefully curated edibles, our range is crafted to promote balance, relief, and relaxation.</p>
                <h4><CheckCircleIcon className={hero.check}/>Best marijuana products</h4>
                <h4><CheckCircleIcon className={hero.check}/>Many points of sale</h4>
                <h4><CheckCircleIcon className={hero.check}/>Professional advice</h4>

                <button><span>Read More</span></button>

            </div>
            <div className={hero.right}>
                <img src={heroImg} width={550} />

            </div>
        </div>
      
    </div>
  )
}

export default Hero
