import React, { useState } from "react";
import "./styles.css";

const Tab = () => {
  const [ToggleState, setToggleState] = useState(1);

  const ToggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <ul className="tab-list">
        <li
          className={ToggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => ToggleTab(1)}
        >
          Tab 1
        </li>
        <li
          className={ToggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => ToggleTab(2)}
        >
          Tab 2
        </li>
        <li
          className={ToggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => ToggleTab(3)}
        >
          Tab 3
        </li>
      </ul>
      <div className="content-container">
        <div
          className={ToggleState === 1 ? "content active-content" : "content"}
        >
          <h2>Lorem</h2>
        </div>
        <div
          className={ToggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Ipsum</h2>
        </div>
        <div
          className={ToggleState === 3 ? "content active-content" : "content"}
        >
          <h2>Dolor</h2>
        </div>
      </div>
    </div>
  );
};

export default Tab;
