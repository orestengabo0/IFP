import Header from "../Header/Header";
import style from "../AboutUs/AboutUs.module.css";
import styles from "./MyProfile.module.css";
import CardInfoBadge from "./CardInfoBadge";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlinePhone, MdLogout } from "react-icons/md";
import farmer from "../../assets/farmer_1-removebg-preview.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsPlus } from "react-icons/bs";

const MyProfile = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const res = await axios.get("/api/sponsors");
        setSponsors(res.data);
      } catch (ex) {
        console.log("Error fetching sponsors:", ex);
      }
    };
    fetchSponsors();
  }, []);

  return (
    <div>
      <Header />
      <div className={`d-flex justify-content-center p-4`}>
        <img src="" alt="" className={`${style.profileImg}`} />
      </div>
      <div className={`${styles.profileCard} m-3 p-3 rounded-4`}>
        <h4 className="text-white text-center">NGABO Oreste</h4>
        <div className="cardInfo d-flex justify-content-evenly">
          <CardInfoBadge heading="Profession" role="middleman" />
          <CardInfoBadge heading="Location" role="Kigali" />
          <CardInfoBadge heading="Experience" role="5yrs" />
        </div>
        <div className="location mt-3">
          <div className="mt-2">
            <span>
              <HiOutlineLocationMarker
                size={30}
                color="white"
                className="mx-3"
              />
            </span>
            <span className="fs-5 text-white mt-1">Kigali Rwanda</span>
          </div>
          <div className="mt-2">
            <span>
              <MdOutlinePhone size={30} color="white" className="mx-3" />
            </span>
            <span className="fs-5 text-white mt-1">0738049975</span>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-between p-4">
          <span className="fs-5 fw-semibold">Paterned Sponsors</span>
          <span className="fw-semibold">see all</span>
        </div>
        <div className="p-3">
          {/* {sponsors.length > 0 && } */}
          <div
            className={`d-flex justify-content-evenly p-3 px-0 align-items-center sponsors ${styles.sponsors}`}
          >
            <img src={farmer} alt="" />
            <span className="fw-semibold fs-5">NGABO Oreste</span>
          </div>
        </div>
        <div className="p-3">
          <div className="d-flex mb-3">
            <div className={`bg-success-subtle rounded-5  d-flex justify-content-center ${styles.addAccount}`}>
              <BsPlus color="green" size={40} className="mt-1" />
            </div>
            <span className="fs-5 fw-semibold mt-1 mx-3">Add another account</span>
          </div>
          <div className="d-flex">
            <div className={`d-flex justify-content-center ${styles.addAccount}`}>
              <MdLogout color="red" size={35} className="mt-1" />
            </div>
            <span className="text-danger fs-5 fw-semibold mt-1 mx-3">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
