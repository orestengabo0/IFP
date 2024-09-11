import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import NotificationCard from "./NotificationCard";
import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

interface NotificationProps {
  notificationDay: string;
}

interface NotificationItem {
  id: string;
  text: string;
  time: string;
  isRead: boolean;
}

const NotificationList = ({ notificationDay }: NotificationProps) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      // Simulate error scenario
      const success = Math.random() > 0.2; // 80% chance of success

      if (success) {
        const fakeNotifications = [
          {
            id: "1",
            text: "Your account was created successfully!",
            time: "10:00 AM",
            isRead: false,
          },
          {
            id: "2",
            text: "You have a new message from John.",
            time: "11:30 AM",
            isRead: false,
          },
          {
            id: "3",
            text: "Your password was changed.",
            time: "1:15 PM",
            isRead: false,
          },
        ];

        setNotifications(fakeNotifications);
      } else {
        setError(true);
      }

      setLoading(false);
    }, 1500);
  }, []);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <p>Loading notifications....</p>;
  }

  if (error) {
    return <p>There was an error loading notifications. Please try again.</p>;
  }

  return (
    <div className="p-3 pt-4">
      <div className="d-flex justify-content-evenly">
        <div className="back-button" onClick={handleBack}>
          <PiCaretLeftBold color="green" size={30} />
        </div>
        <h1>Notifications</h1>
        <div className="d-flex">
          <p
            className="mt-1"
            onClick={markAllAsRead}
            style={{ cursor: "pointer" }}
          >
            Mark all as read
          </p>
        </div>
      </div>
      <p className="fs-4 fw-semibold text-end">{notificationDay}</p>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notificationParagraph={notification.text}
          notificationTime={notification.time}
          isRead={notification.isRead}
        />
      ))}
    </div>
  );
};

export default NotificationList;
