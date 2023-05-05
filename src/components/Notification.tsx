import { NotificationMessageProps } from "../types/Notification";

function NotificationMessage(props: NotificationMessageProps) {
  const TitlePost = ():JSX.Element => {
    if (props.action !== "post" && !props.titlePost) return null;
    return (
      <strong>
        <a href="#"> {props.titlePost}</a>
      </strong>
    );
  };

  const GroupName = ():JSX.Element => {
    if (props.action !== "group" && !props.groupName) return null;
    return (
      <strong>
        {" "}
        <a href="#"> {props.groupName}</a>
      </strong>
    );
  };

  const PictureCommented = ():JSX.Element => {
    if (props.action !== "comment" && !props.picture) return null;
    return (
      <img
        className="notification-picture"
        src={props.picture}
        alt="Picture commented"
        width="50"
        height="50"
      />
    );
  };

  return (
    <div
      className={
        props.unread ? "notification notification-unread" : "notification"
      }
    >
      <img
        className="notification-avatar"
        src={props.avatar}
        alt="Avatar image"
        width="46"
        height="46"
      />
      <div className="notification-info">
        <p
          className={
            props.unread
              ? "notification-action notification-action-unread"
              : "notification-action"
          }
        >
          <strong>
            <a className="notification-name" href="#">
              {props.name}
            </a>
          </strong>
          <span> {props.notification}</span>
          <TitlePost />
          <GroupName />
        </p>
        <span className="notification-time">{props.time}</span>
        {props.message && (
          <p className="notification-message">{props.message}</p>
        )}
      </div>
      <PictureCommented />
    </div>
  );
}

export default NotificationMessage;
