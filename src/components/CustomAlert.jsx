import { Alert } from "antd";
import { useState, useEffect } from "react";
export default function CustomAlert({ message, type }) {
  const [alertMsg, setAlertMsg] = useState(message);
  useEffect(() => {
    if (alertMsg) {
      console.log(message, type);
      let timeOutId = setTimeout(() => {
        setAlertMsg("");
      }, 3000);
      return () => clearTimeout(timeOutId);
    }
  }, [alertMsg]);

  useEffect(() => {
    setAlertMsg(message);
  }, [message]);

  return (
    <>
      {alertMsg && (
        <Alert
          message={alertMsg}
          type={type}
          closable
          onClose={() => setAlertMsg("")}
          showIcon
        />
      )}
    </>
  );
}
