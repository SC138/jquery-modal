import "./global.css";
import { useState } from "react";

export const Popup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const displayPopup = () => {
    setIsPopupVisible(true);
  };

  const className = isPopupVisible ? "popup-visible" : "popup-hidden";

  return (
    <>
      <div className={className}>
        <h1>Employee created</h1>
      </div>
      <button type="submit" onClick={displayPopup}>
        Create
      </button>
    </>
  );
};
