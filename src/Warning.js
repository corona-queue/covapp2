import React from "react";
import WarningIcon from "@material-ui/icons/Warning";

export default function Warning() {
  return (
    <div
      style={{
        paddingLeft: "16px",
        paddingRight: "16px",
        color: "#e91e63",
        backgroundColor: "rgba(255,255,255,0.9)",
        display: "flex",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "space-around"
      }}
    >
      <WarningIcon style={{ margin: "4px" }} />
      <div>
        <b>Testinstallation: </b>
        <br /> Anfragen werden nicht ans Gesundheitsamt weitergeleitet.
      </div>
    </div>
  );
}
