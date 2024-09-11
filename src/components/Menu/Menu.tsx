import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaPhoneAlt, FaUser, FaRegQuestionCircle } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import styles from "./Dashboard.module.css";
import { BsGrid } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: <BsGrid size={30} color="green" />,
      className: styles.dashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      label: "Contact",
      icon: <FaPhoneAlt size={30} color="green" />,
      className: styles.contacts,
      path: "/contacts",
    },
    {
      id: 3,
      label: "About",
      icon: <RiMessage2Line size={30} color="green" />,
      className: styles.about,
      path: "/about-us",
    },
    {
      id: 4,
      label: "Profile",
      icon: <FaUser size={30} color="green" />,
      className: styles.profile,
      path: "/my-profile",
    },
  ];
  return (
    <div
      className={`container ${styles.container} d-flex justify-content-center`}
    >
      <div>
        <div className="d-flex">
          <IoMdCloseCircleOutline size={40} color="green" />
        </div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`text-success fw-normal fs-4 d-block ${item.className}`}
            onClick={() => navigate(item.path)}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
