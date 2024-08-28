import React from 'react'
import logo from '../../assets/Logo.svg'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='p-5'>
        <div className={`d-flex justify-content-center`}>
            <img src={logo} alt="A logo" className={`logo ${styles.logo}`} />
        </div>
        <div className='d-flex justify-content-center mt-3'>
            <Link to="#" className={`link ${styles.link} fs-4 text-secondary`}>Home</Link>
        </div>
        <div className='d-flex justify-content-center mt-1'>
            <Link to="#" className={`link ${styles.link} fs-4 text-secondary`}>Profile</Link>
        </div>
        <div className='d-flex justify-content-center mt-1'>
            <Link to="#" className={`link ${styles.link} fs-4 text-secondary`}>Contact</Link>
        </div>
        <div className='d-flex justify-content-center mt-1'>
            <Link to="#" className={`link ${styles.link} fs-4 text-secondary`}>About</Link>
        </div>
        <div className='d-flex justify-content-center mt-3'>
            <Link to={"#"} className='mx-2'><BsFacebook size={30} color='grey'/></Link>
            <Link to={"#"} className='mx-2'><BsInstagram size={30} color='grey'/></Link>
            <Link to={"#"} className='mx-2'><BsTwitter size={30} color='grey'/></Link>
            <Link to={"#"} className='mx-2'><BsLinkedin size={30} color='grey'/></Link>
        </div>
        <div className='d-flex justify-content-between px-4 mx-5 mt-3'>
            <Link to={"#"} className={`link ${styles.link} fs-4 text-secondary`}>English</Link>
            <Link to={"#"} className={`link ${styles.link} fs-4 text-secondary`}>Privacy</Link>
            <Link to={"#"} className={`link ${styles.link} fs-4 text-secondary`}>Legal</Link>
        </div>
        <div className='mt-3'>
            <p className='text-center fs-5 text-secondary'>&copy; 2024 IFp.  All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer