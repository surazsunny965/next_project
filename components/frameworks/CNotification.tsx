import { showNotification } from "@mantine/notifications";
import notificationStyles from "../../styles/notification.module.scss";

export default function cNotification(
  message: React.ReactNode,
  type: "success" | "error" | "warning" | "info" = "error"
) {
  switch (type) {
    case "success":
      return showNotification({
        title: "Success",
        message: message,
        color: "green",
        classNames: {
          title: notificationStyles.successTitle,
          root: notificationStyles.notification,
          description: notificationStyles.successMessage,
          body: notificationStyles.successBody,
        },
      });
    case "error":
      return showNotification({
        title: "Error",
        message: message,
        color: "red",
        classNames: {
          title: notificationStyles.errorTitle,
          root: notificationStyles.notification,
          description: notificationStyles.errorMessage,
          body: notificationStyles.errorBody,
        },
      });
    case "warning":
      return showNotification({
        title: "Warning",
        message: message,
        color: "yellow",
        classNames: {
          title: notificationStyles.warningTitle,
          root: notificationStyles.notification,
          description: notificationStyles.warningMessage,
          body: notificationStyles.warningBody,
        },
      });
    case "info":
      return showNotification({
        title: "Info",
        message: message,
        color: "blue",
        classNames: {
          title: notificationStyles.infoTitle,
          root: notificationStyles.notification,
          description: notificationStyles.infoMessage,
          body: notificationStyles.infoBody,
        },
      });
  }
}

// <Space h={10} />
// <Group>
//   <RButton
//     label="Success Notifications"
//     onClick={() => {
//       showRNotification("This is a success notification", "success");
//     }}
//   />
//   <RButton
//     label="Error Notifications"
//     onClick={() => {
//       showRNotification("This is an error notification", "error");
//     }}
//   />
//   <RButton
//     label="Warning Notifications"
//     onClick={() => {
//       showRNotification("This is a warning notification", "warning");
//     }}
//   />
//   <RButton
//     label="Info Notifications"
//     onClick={() => {
//       showRNotification("This is an info notification", "info");
//     }}
//   />
// </Group>
