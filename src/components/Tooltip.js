import React from "react";

class Tooltip extends React.Component {

  // General tooltip rendering function
  render() {
    const { showToolTip, value } = this.props;
    console.log("showToolTip::", showToolTip);
    console.log("value::", value);
    if (value === "") {
      return <div></div>;
    } else {
      return (
        <div className={`${showToolTip ? "tool-tip-on" : "tool-tip-off"}`}>
          <div
            className={`${
              value === "left"
                ? "left"
                : value === "right"
                ? "right"
                : value === "top"
                ? "top"
                : value === "bottom"
                ? "bottom"
                : ""
            }`}
            id="tooltip"
          >
            <div className="tooltip-arrow"></div>
            <div className="tooltip-label">Tooltip</div>
          </div>
        </div>
      );
    }
  }
}

export default Tooltip;
