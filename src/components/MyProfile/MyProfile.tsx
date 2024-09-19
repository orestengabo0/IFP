import Header from "../Header/Header";
import style from "../AboutUs/AboutUs.module.css";
import styles from "./MyProfile.module.css";
import farmer from "../../assets/farmer_1-removebg-preview.png";
import ProfileCard from "./ProfileCard";
import Account from "../Dashboard/SmallUsageComponents/Account";

const MyProfile = () => {
  return (
    <div>
      <div className="pb-4">
        <Header />
      </div>
      <div className={`d-flex justify-content-center mt-5 pt-5`}>
        <img src={farmer} alt="" className={`${style.profileImg}`} />
      </div>
      <ProfileCard />
      <div>
        <div className="d-flex justify-content-between p-4">
          <span className="fs-5 fw-semibold">Paterned Sponsors</span>
          <span className="fw-semibold">see all</span>
        </div>
        <div className="p-3">
          <div
            className={`d-flex justify-content-evenly p-3 px-0 align-items-center sponsors ${styles.sponsors}`}
          >
            <img src={farmer} alt="" />
            <span className="fw-semibold fs-5">NGABO Oreste</span>
          </div>
        </div>
        <div className="p-3">
          <Account />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
