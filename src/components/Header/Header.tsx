import logo from "../../assets/Logo.svg";
import children from "../../assets/children.png";
import { IoGridOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid bg-success p-3 d-flex justify-content-between align-items-center fixed-top">
      <div className="text-white fw-bold fs-1 d-flex align-items-center">
        <Link to={"/dashboard"} className="d-flex align-items-center">
          <img src={logo} alt="A logo" className="me-2" />
        </Link>
        IFP
      </div>
      <div className="d-flex">
        <Link to={"/notifications"}>
          <div>
            <MdNotificationsNone size={35} color="white" className="mt-2 mx-2" />
          </div>
        </Link>
        <Link to={"/menu"}>
          <div>
            <IoGridOutline size={30} color="white" className="mt-2 mx-2" />
          </div>
        </Link>
        <div className="mx-2">
          <Link to={"/my-profile"}>
            <img src={children} alt="Profile picture" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
