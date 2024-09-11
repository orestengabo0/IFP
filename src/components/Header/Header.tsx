import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";
import children from "../../assets/children.png";
import { IoGridOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className={`container ${styles.container} p-4 d-flex justify-content-between`}
    >
      <div className="text-white fw-bold fs-1">
        <img src={logo} alt="A logo" className={`logo ${styles.logo}`} />
        IFP
      </div>
      <div className="d-flex">
        <Link to={"/notifications"}>
          <div>
            <MdNotificationsNone
              size={35}
              color="white"
              className={`mt-2 mx-2`}
            />
          </div>
        </Link>
        <Link to={"/dashboard"}>
          <div>
            <IoGridOutline size={30} color="white" className={`mt-2 mx-2`} />
          </div>
        </Link>
        <div className="mx-2">
          <Link to={"/my-profile"}>
            <img
              src={children}
              alt="Profile picture"
              className={`profilePicture ${styles.profilePicture}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
