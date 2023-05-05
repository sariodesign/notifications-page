import { useState, useEffect } from "react";
import { NotificationMessageProps } from "./types/Notification";
import Header from "./components/Header";
import NotificationMessage from "./components/Notification";

function App() {
  const [notifications, setNotifications] = useState<
    NotificationMessageProps[]
  >([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const getNotifications = async () => {
    const response = await fetch("../data.json").then((response) =>
      response.json()
    );

    // set state
    setNotifications(response.notifications);
    setNotificationCount(response.count);
  };

  useEffect(() => {
    getNotifications();
  }, []);

  const markReadHandler = () => {
    let markReadNotification = notifications.map((notification) => {
      if (notification.unread) {
        return { ...notification, unread: !notification.unread };
      }
      return notification;
    });

    // update state
    setNotifications(markReadNotification);
    setNotificationCount(0);
  };

  return (
    <div className="App">
      <Header
        title="Notifications"
        count={notificationCount}
        handler={markReadHandler}
      />

      {notifications &&
        notifications.map((item, index) => (
          <NotificationMessage key={index} {...item} />
        ))}
    </div>
  );
}

export default App;
