export const useToast = () => {
  const toasts = useState(
    "toasts",
    () => [] as { message: string; type: "info" | "success" | "error" }[]
  );

  const alertClass = (type: string) => {
    switch (type) {
      case "success":
        return "alert-success";
      case "error":
        return "alert-error";
      case "info":
      default:
        return "alert-info";
    }
  };

  const showToast = (
    message: string,
    type: "info" | "success" | "error" = "info"
  ) => {
    toasts.value.push({ message, type });

    // Auto-remove toast after 3 seconds
    setTimeout(() => {
      toasts.value.shift();
    }, 3000);
  };

  return { toasts, showToast, alertClass };
};
