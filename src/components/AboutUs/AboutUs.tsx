import Header from "../Header/Header";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className={`aboutUs ${styles.aboutUs} fs-4 fw-semibold px-5 p-2`}>
        About Us
      </div>
      <div className={`d-flex justify-content-center p-4`}>
        <img src="" alt="" className={`${styles.profileImg}`} />
      </div>
      <div className="px-5">
        <h4>What we do</h4>
        <p>
          We are dedicated software which aim at making a simple way of co
          nnecting the farmers and their sp onsors which aim at making peop le
          happy and very impressed
        </p>
      </div>
      <div className="Faq-section"></div>
    </div>
  );
};

export default AboutUs;
