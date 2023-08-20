import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      // annoying bug here, because we also capture react devtools messages, see console for more
      const data = JSON.parse(e.data);

      switch (data.type) {
        case "error":
          toast.error(data.message);
          break;
        case "warn":
          toast.warn(data.message);
          break;
        default:
          toast.info(data.message);
          break;
      }
    };

    window.addEventListener("message", handleMessage, false);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
}
