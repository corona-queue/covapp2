import React from "react";
import WarningIcon from "@material-ui/icons/Warning";

export default function Warning() {
  return (
    <div
      style={{
        paddingLeft: "16px",
        paddingRight: "16px",
        color: "white",
        backgroundColor: "#e91e63",
        display: "flex",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        zIndex: 1200
      }}
    >
      <WarningIcon style={{ margin: "4px" }} />
      <div>
        <b>Testinstallation: </b>Anfragen werden nicht an Gesundheitsbehörden
        weitergeleitet.
      </div>
    </div>
  );
}
