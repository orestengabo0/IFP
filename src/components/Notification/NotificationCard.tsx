import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import profile from "../../assets/farmer_1-removebg-preview.png";
import styles from "./Notification.module.css";

interface NotificationCardProps {
    notificationParagraph: string,
    notificationTime: string
}

const NotificationCard = ({notificationParagraph, notificationTime}:NotificationCardProps) => {
  const [closeNotification, setCloseNotification] = useState(true);

  const handleCloseNotification = () => {
    setCloseNotification((close) => !close);
  };
  
  return (
    <div>
        {closeNotification && (
        <div className={`notificationCard ${styles.notificationCard} p-1 pb-0`}>
          <div className={`notification ${styles.notification} px-3`}>
            <img src={profile} alt="" className={`image ${styles.image}`} />
            <p className="mt-4 mx-3">
              {notificationParagraph}
            </p>
            <IoClose
              size={30}
              className={`notificationClose ${styles.notificationClose}`}
              onClick={handleCloseNotification}
            />
          </div>
          <p className="text-end notificationTime mx-3 pb-2">{notificationTime}</p>
        </div>
      )}
    </div>
  )
}

export default NotificationCard