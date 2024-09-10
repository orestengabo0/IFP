import React from "react";
import logo from "../../assets/Logo.svg";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="p-4">
        <div className={`d-flex justify-content-center`}>
          <img src={logo} alt="A logo" className={`logo ${styles.logo}`} />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link to="#" className={`link ${styles.link}  text-secondary`}>
            Home
          </Link>
        </div>
        <div className="d-flex justify-content-center mt-1">
          <Link to="#" className={`link ${styles.link} text-secondary`}>
            Profile
          </Link>
        </div>
        <div className="d-flex justify-content-center mt-1">
          <Link to="#" className={`link ${styles.link}  text-secondary`}>
            Contact
          </Link>
        </div>
        <div className="d-flex justify-content-center mt-1">
          <Link to="#" className={`link ${styles.link}  text-secondary`}>
            About
          </Link>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link to={"#"} className="mx-2">
            <BsFacebook size={25} color="grey" />
          </Link>
          <Link to={"#"} className="mx-2">
            <BsInstagram size={25} color="grey" />
          </Link>
          <Link to={"#"} className="mx-2">
            <BsTwitter size={25} color="grey" />
          </Link>
          <Link to={"#"} className="mx-2">
            <BsLinkedin size={25} color="grey" />
          </Link>
        </div>
      </div>
      <hr />

      <div className="mt-3 p-4">
        <h3 className="text-center">Join Our Newsletter</h3>
        <p className=" text-secondary text-center">
          Be the first to know about our latest updates, exclusive offers, and
          more.
        </p>
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email"
          />
          <button className="btn btn-success mx-2">Subscribe</button>
        </div>
      </div>
      <hr />

      <div className="p-4">
        <div className="d-flex justify-content-between px-4 mx-5 mt-3">
          <Link to={"#"} className={`link ${styles.link}  text-secondary`}>
            English
          </Link>
          <Link to={"#"} className={`link ${styles.link}  text-secondary`}>
            Privacy
          </Link>
          <Link to={"#"} className={`link ${styles.link}  text-secondary`}>
            Legal
          </Link>
        </div>
        <div className="mt-3">
          <p className="text-center  text-secondary">
            &copy; 2024 IFp. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
