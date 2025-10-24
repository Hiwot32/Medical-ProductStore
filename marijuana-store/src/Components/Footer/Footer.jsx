import React from 'react'
import footer from './footer.module.css'
import logo from '../../assets/Images/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import img1 from '../../assets/Images/Footer/imgi_103_shop_03-69x100.jpg'
import img2 from '../../assets/Images/Footer/imgi_96_shop_01-69x100.jpg'
import img3 from '../../assets/Images/Footer/imgi_89_shop_20-69x100.jpg'
import img4 from '../../assets/Images/Footer/imgi_82_shop_19-69x100.jpg'
import img5 from '../../assets/Images/Footer/imgi_75_shop_18-69x100.jpg'
import img6 from '../../assets/Images/Footer/imgi_68_shop_17-69x100.jpg'


function Footer() {
  return (
  <div className={footer.outerSection}>
    <div className={footer.container}>
        <div className={footer.inner}>
            <div className={footer.top}>
                <img src={logo}/>
                <div className={footer.location}>
                    <LocationOnIcon className={footer.icon1}/>
                    <p>Clinic Address: <br /> 29 Nicolas str, New York, 987597</p>
                </div>
                <div className={footer.phone}>
                    <PhoneIcon className={footer.icon1}/>
                    <p>Phone Number: <br /> +4 (085) 335 780 45</p>
                </div>
                <div className={footer.socials}>
                    <TwitterIcon className={footer.social}/>
                    <InstagramIcon className={footer.social}/>
                    <FacebookIcon className={footer.social}/>
                    <YouTubeIcon className={footer.social}/>

                </div>


            </div>
            <div className={footer.below}>
            <div className={footer.left}>
                <h2><GrassOutlinedIcon className={footer.leafe}/> Opening Hours <span className={footer.line}></span></h2>
                <p>Monday-Friday-------9:00-19:00</p>
                <p>Saturday------------10:00-17:00</p>
                <p>Sunday--------------CLOSED</p>

            </div>
            <div className={footer.middel}>
                <h2><GrassOutlinedIcon className={footer.leafe}/>Recent Photos<GrassOutlinedIcon className={footer.leafe}/><span className={footer.line}></span></h2>
                <div className={footer.imgs}>
                    <div><img src={img1} /></div>
                    <div><img src={img2} /></div>
                    <div><img src={img3} /></div>
                    <div><img src={img4} /></div>
                    <div><img src={img5} /></div>
                    <div><img src={img6} /></div>
                    </div>
                
            </div>
            <div className={footer.right}>
                <h2><GrassOutlinedIcon className={footer.leafe}/>Subscribe <span className={footer.line}></span></h2>
                <input type='email' placeholder='Your email...' /><br />
                <button>Subscribe</button>

            </div>
            </div>

        </div>
    </div>
    <div className={footer.bottom}>
        <p>&copy; All Rights Reserved - 2025</p>
    </div>
  </div>
  )
}

export default Footer