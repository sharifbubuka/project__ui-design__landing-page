import React from "react";

const modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  const BackgroundStyle = {
    backgroundColor: "rgba(220,220,220,0.5)",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
  };

  const ModalStyle = {
    maxWidth: "40vw",
    minHeight: "30vh",
    backgroundColor: "#fff",
    margin: "25vh auto",
    position: "relative",
    // padding: 5,
  };

  const HeaderStyle = {
    height: 20,
    width: "100%",
  };

  const CloseBtnStyle = {
    float: "right",
    cursor: "pointer",
    display: "block",
    right: "-20px",
    fontSize: "2rem",
    position: "absolute",
    top: "-10%",
    right: "-3%",
  };

  return (
    <div style={BackgroundStyle} onClick={onClose}>
      <div style={ModalStyle}>
        <span style={CloseBtnStyle} onClick={onClose}>
          X
        </span>
        {children}
      </div>
    </div>
  );
};

export default modal;
