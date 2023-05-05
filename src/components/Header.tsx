import { NotificationHeaderProps } from "../types/Notification";

function Header(props: NotificationHeaderProps):JSX.Element {
  return (
    <header className="notification-header">
      <div className="notification-report">
        <h1 className="notification-label">
          {props.title}
          <span className="notification-count">{props.count}</span>
        </h1>
      </div>
      {props.count > 0 && 
      <button className="notification-handler" onClick={props.handler}>
        Mark all as read
      </button>}
    </header>
  );
}

export default Header;
