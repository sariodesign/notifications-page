export interface NotificationHeaderProps {
    title: string;
    count: number;
    handler: any;
  }
  
  export interface NotificationMessageProps {
    avatar: string;
    name: string;
    action: "post" | "group" | "follow" | "message" | "comment";
    titlePost?: string;
    groupName?: string;
    message?: string;
    picture?: string;
    notification: string;
    time: string;
    unread: boolean;
  }
  